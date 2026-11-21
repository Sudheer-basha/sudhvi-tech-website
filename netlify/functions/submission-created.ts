/**
 * Self-contained Netlify Handler types (avoids requiring @netlify/functions dependency at build time)
 */
interface HandlerEvent {
  body: string | null;
  headers: Record<string, string | undefined>;
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  queryStringParameters: Record<string, string | undefined> | null;
}

interface HandlerResponse {
  statusCode: number;
  body?: string;
  headers?: Record<string, string | boolean | number>;
}

type Handler = (event: HandlerEvent, context?: unknown) => Promise<HandlerResponse> | HandlerResponse;

/**
 * Netlify Event-Driven Serverless Function: `submission-created`
 * 
 * Automatically triggered whenever a visitor submits any verified form
 * (e.g. `enrollment` or `contact`) on the SUDHVI TECH website.
 * 
 * Capabilities:
 * 1. Form Data Parsing: Captures all student enrollment & contact details.
 * 2. WhatsApp Business Cloud API Alert: Safely dispatches an alert to SUDHVI TECH
 *    administrators without exposing any API credentials or secret tokens in the client bundle.
 * 3. Webhook Integration: Forwards payload to Zapier, Make, or custom CRM endpoint if configured.
 * 
 * Note: Netlify native email notifications to ksudheerbasha@gmail.com are also configured
 * directly via the Netlify Dashboard (Site configuration > Forms > Form notifications).
 */

interface NetlifySubmissionPayload {
  payload: {
    id: string;
    form_name: string;
    created_at: string;
    data: {
      // Common fields
      fullName?: string;
      name?: string;
      email?: string;
      phone?: string;
      botField?: string;

      // Contact form specific fields
      userType?: string;
      subject?: string;
      programInterest?: string;
      message?: string;

      // Enrollment form specific fields
      city?: string;
      qualification?: string;
      college?: string;
      yearOfStudy?: string;
      course?: string;
      learningMode?: string;
      batchTiming?: string;
      primaryGoal?: string;
      projectSupport?: string;
      referral?: string;
      additionalNotes?: string;
    };
  };
}

export const handler: Handler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing submission payload' }),
      };
    }

    const { payload }: NetlifySubmissionPayload = JSON.parse(event.body);
    const formName = payload.form_name || 'unknown-form';
    const data = payload.data || {};
    const timestamp = payload.created_at || new Date().toISOString();

    console.log(`[SUDHVI TECH Submission Log] Received form submission: "${formName}" at ${timestamp}`);

    // Discard bot submissions if any slipped past the frontend honeypot
    if (data.botField) {
      console.warn('[SUDHVI TECH Submission Log] Bot honeypot triggered. Silently discarded.');
      return { statusCode: 200, body: JSON.stringify({ message: 'Bot submission filtered.' }) };
    }

    // ─────────────────────────────────────────────────────────────
    // 1. Process Form Data & Format Notification Message
    // ─────────────────────────────────────────────────────────────
    let alertTitle = '';
    let alertDetails = '';

    if (formName === 'enrollment') {
      alertTitle = `🎓 New Student Enrollment: ${data.fullName || 'Prospective Student'}`;
      alertDetails = [
        `*Program*: ${data.course || 'Not specified'}`,
        `*Candidate Name*: ${data.fullName || 'N/A'}`,
        `*Phone*: ${data.phone || 'N/A'}`,
        `*Email*: ${data.email || 'N/A'}`,
        `*City*: ${data.city || 'N/A'}`,
        `*College*: ${data.college || 'N/A'}`,
        `*Qualification & Year*: ${data.qualification || 'N/A'} (${data.yearOfStudy || 'N/A'})`,
        `*Learning Mode*: ${data.learningMode || 'N/A'}`,
        `*Preferred Batch*: ${data.batchTiming || 'N/A'}`,
        `*Career Goal*: ${data.primaryGoal || 'N/A'}`,
        `*Project Support Needed*: ${data.projectSupport || 'N/A'}`,
        `*Referral*: ${data.referral || 'None'}`,
        `*Notes*: ${data.additionalNotes || 'None'}`,
        `*Timestamp*: ${timestamp}`,
      ].join('\n');
    } else if (formName === 'contact') {
      alertTitle = `📬 New Contact Inquiry: ${data.name || 'Visitor'}`;
      alertDetails = [
        `*Subject*: ${data.subject || 'General Inquiry'}`,
        `*Name*: ${data.name || 'N/A'}`,
        `*Phone*: ${data.phone || 'N/A'}`,
        `*Email*: ${data.email || 'N/A'}`,
        `*Visitor Category*: ${data.userType || 'N/A'}`,
        `*Program / Interest*: ${data.programInterest || 'General'}`,
        `*Message*: ${data.message || 'N/A'}`,
        `*Timestamp*: ${timestamp}`,
      ].join('\n');
    } else {
      alertTitle = `📝 Form Submission: ${formName}`;
      alertDetails = JSON.stringify(data, null, 2);
    }

    // ─────────────────────────────────────────────────────────────
    // 2. Official WhatsApp Business Cloud API Integration (Meta)
    // ─────────────────────────────────────────────────────────────
    // Required Netlify Environment Variables (configured in Netlify Site Settings):
    // - WHATSAPP_API_TOKEN: Meta Graph API System User Access Token
    // - WHATSAPP_PHONE_NUMBER_ID: Meta Phone Number ID (e.g., from WhatsApp App Dashboard)
    // - WHATSAPP_ADMIN_PHONE: Admin phone number with country code (e.g. 917093642973 or 917981292208)
    const whatsappToken = process.env.WHATSAPP_API_TOKEN;
    const whatsappPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const whatsappAdminPhone = process.env.WHATSAPP_ADMIN_PHONE || '917093642973';

    if (whatsappToken && whatsappPhoneId && whatsappAdminPhone) {
      try {
        console.log(`[WhatsApp API] Dispatching alert to ${whatsappAdminPhone}...`);
        
        // Official Meta WhatsApp Cloud API endpoint
        const waUrl = `https://graph.facebook.com/v19.0/${whatsappPhoneId}/messages`;
        
        // Note: For initiating conversations outside a 24-hr customer service window,
        // Meta WhatsApp Business API requires a pre-approved utility template.
        // If WHATSAPP_TEMPLATE_NAME is provided, we send a template message;
        // otherwise, we attempt text messaging (valid for active session windows or sandbox).
        const templateName = process.env.WHATSAPP_TEMPLATE_NAME;

        let requestBody: Record<string, unknown>;

        if (templateName) {
          requestBody = {
            messaging_product: 'whatsapp',
            to: whatsappAdminPhone,
            type: 'template',
            template: {
              name: templateName,
              language: { code: 'en' },
              components: [
                {
                  type: 'body',
                  parameters: [
                    { type: 'text', text: data.fullName || data.name || 'New Lead' },
                    { type: 'text', text: data.course || data.subject || 'Inquiry' },
                    { type: 'text', text: data.phone || 'N/A' },
                  ],
                },
              ],
            },
          };
        } else {
          // Standard text alert payload
          requestBody = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: whatsappAdminPhone,
            type: 'text',
            text: {
              preview_url: false,
              body: `${alertTitle}\n\n${alertDetails}`,
            },
          };
        }

        const waResponse = await fetch(waUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${whatsappToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const waResult = await waResponse.json();
        if (waResponse.ok) {
          console.log('[WhatsApp API] Message sent successfully:', waResult);
        } else {
          console.error('[WhatsApp API] Meta returned error:', waResult);
        }
      } catch (waErr) {
        console.error('[WhatsApp API] Connection failure:', waErr);
      }
    } else {
      console.log(
        '[WhatsApp API Notice] WhatsApp Cloud API credentials are not set in Netlify environment variables.\n' +
        'To enable automatic WhatsApp alerts, configure:\n' +
        '- WHATSAPP_API_TOKEN\n' +
        '- WHATSAPP_PHONE_NUMBER_ID\n' +
        '- WHATSAPP_ADMIN_PHONE (e.g. 917093642973)'
      );
    }

    // ─────────────────────────────────────────────────────────────
    // 3. Optional Webhook Forwarding (Zapier / Make / n8n / CRM)
    // ─────────────────────────────────────────────────────────────
    const webhookUrl = process.env.ENROLLMENT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        console.log(`[Webhook] Forwarding payload to external webhook: ${webhookUrl}`);
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'form_submission',
            formName,
            timestamp,
            data,
          }),
        });
        console.log('[Webhook] Forwarded successfully.');
      } catch (webhookErr) {
        console.error('[Webhook] Failed to forward payload:', webhookErr);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 'success',
        form: formName,
        timestamp,
      }),
    };
  } catch (error) {
    console.error('[SUDHVI TECH Submission Log] Unexpected error processing submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal processing error' }),
    };
  }
};
