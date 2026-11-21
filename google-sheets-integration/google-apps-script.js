/**
 * ============================================================================
 * SUDHVI TECH — Google Sheets & Instant Email Notification Webhook
 * ============================================================================
 * 
 * Instructions:
 * 1. Open Google Sheets (https://sheets.google.com) and create a new sheet:
 *    Name it: "SUDHVI TECH - Registrations & Inquiries"
 * 2. In Google Sheets top menu, click: Extensions > Apps Script
 * 3. Delete any default code in Code.gs and paste this ENTIRE file.
 * 4. Click the "Save" icon (Floppy disk).
 * 5. Click the blue "Deploy" button (top right) > "New deployment".
 * 6. Click the Gear icon next to "Select type" > select "Web app".
 * 7. Set:
 *    - Description: "SUDHVI TECH Form Handler"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone" (Crucial for receiving submissions)
 * 8. Click "Deploy" > "Authorize access" > choose your Google account > Advanced > Go to Untitled (unsafe) > Allow.
 * 9. Copy the generated "Web App URL" (ends in /exec).
 * 10. Paste this URL into your website's .env as:
 *     VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/.../exec
 *     and in Netlify Site Settings > Environment variables > GOOGLE_SHEET_URL
 * 
 * Result:
 * - Every submission is instantly added as a new row in your Google Sheet (which can be exported to Excel anytime).
 * - An instant email notification is immediately delivered to ksudheerbasha@gmail.com!
 */

// Target email address where instant lead alerts will be delivered
var ADMIN_EMAIL = "ksudheerbasha@gmail.com";

function setupSheetHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp (IST)",
      "Form Type",
      "Full Name",
      "Email Address",
      "Phone Number",
      "College / Organization",
      "Course / Subject",
      "Learning Mode / Year",
      "Message / Goals / Notes",
      "Lead Status"
    ];
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0F172A");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(10000); // 10 second timeout

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    setupSheetHeaders(sheet);

    var rawData = {};
    if (e && e.postData && e.postData.contents) {
      try {
        rawData = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        // Fallback for form urlencoded data
        rawData = e.parameter || {};
      }
    } else if (e && e.parameter) {
      rawData = e.parameter;
    }

    // Unpack if wrapped inside 'data' property
    var data = rawData.data || rawData;
    var formName = rawData.formName || data['form-name'] || data.formName || 'Inquiry';

    // Discard bot spam silently
    if (data.botField) {
      return ContentService.createTextOutput(JSON.stringify({ status: "filtered", message: "Bot filtered" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Capture Indian Standard Time timestamp
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MMM-yyyy hh:mm:ss a 'IST'");

    // Extract standardized fields
    var fullName = data.fullName || data.name || "Prospective Student";
    var email = data.email || "N/A";
    var phone = data.phone || "N/A";
    var collegeOrOrg = data.college || data.userType || "N/A";
    var courseOrSubject = data.course || data.subject || data.programInterest || "General Inquiry";
    var modeOrYear = (data.learningMode || "") + (data.yearOfStudy ? " (" + data.yearOfStudy + ")" : "");
    if (!modeOrYear.trim()) modeOrYear = data.city || "N/A";
    var notesOrMessage = data.message || data.additionalNotes || data.primaryGoal || "None";
    var leadStatus = "New Lead";

    // 1. Append row to Google Sheet
    sheet.appendRow([
      timestamp,
      formName.toUpperCase(),
      fullName,
      email,
      phone,
      collegeOrOrg,
      courseOrSubject,
      modeOrYear,
      notesOrMessage,
      leadStatus
    ]);

    // 2. Send instant email notification to ksudheerbasha@gmail.com
    var subjectPrefix = (formName.toLowerCase() === 'enrollment')
      ? "🎓 [SUDHVI TECH] New Student Enrollment: "
      : "📬 [SUDHVI TECH] New Inquiry: ";

    var emailSubject = subjectPrefix + fullName + " (" + courseOrSubject + ")";

    var htmlBody = "" +
      "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;'>" +
        "<div style='background-color: #0F172A; padding: 20px; text-align: center; color: #FFFFFF;'>" +
          "<h2 style='margin: 0; font-size: 20px; letter-spacing: 0.5px;'>SUDHVI TECH</h2>" +
          "<p style='margin: 4px 0 0 0; font-size: 13px; color: #38BDF8;'>Academic &amp; Student Registration Notification</p>" +
        "</div>" +
        "<div style='padding: 24px; background-color: #FFFFFF;'>" +
          "<h3 style='margin-top: 0; color: #0F172A; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;'>" +
            (formName.toLowerCase() === 'enrollment' ? 'New Enrollment Application' : 'New Contact Inquiry') +
          "</h3>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;'>" +
            "<tr><td style='padding: 8px 0; font-weight: bold; width: 35%;'>Full Name:</td><td style='padding: 8px 0; color: #0F172A;'><b>" + fullName + "</b></td></tr>" +
            "<tr><td style='padding: 8px 0; font-weight: bold;'>Phone Number:</td><td style='padding: 8px 0;'><a href='tel:" + phone + "' style='color: #0284C7; font-weight: bold; text-decoration: none;'>" + phone + "</a> &nbsp; <a href='https://wa.me/" + phone.replace(/[^0-9]/g, '') + "' style='color: #10B981; font-size: 12px;'>[WhatsApp]</a></td></tr>" +
            "<tr><td style='padding: 8px 0; font-weight: bold;'>Email:</td><td style='padding: 8px 0;'><a href='mailto:" + email + "' style='color: #0284C7; text-decoration: none;'>" + email + "</a></td></tr>" +
            "<tr><td style='padding: 8px 0; font-weight: bold;'>Program / Course:</td><td style='padding: 8px 0; color: #0F172A; font-weight: bold;'>" + courseOrSubject + "</td></tr>" +
            "<tr><td style='padding: 8px 0; font-weight: bold;'>College / Role:</td><td style='padding: 8px 0;'>" + collegeOrOrg + "</td></tr>" +
            "<tr><td style='padding: 8px 0; font-weight: bold;'>Mode / Batch:</td><td style='padding: 8px 0;'>" + modeOrYear + "</td></tr>" +
            "<tr><td style='padding: 8px 0; font-weight: bold;'>Details / Notes:</td><td style='padding: 8px 0; background-color: #F8FAFC; padding: 10px; border-radius: 6px;'>" + notesOrMessage + "</td></tr>" +
            "<tr><td style='padding: 8px 0; font-weight: bold;'>Timestamp:</td><td style='padding: 8px 0; font-size: 12px; color: #64748B;'>" + timestamp + "</td></tr>" +
          "</table>" +
          "<div style='margin-top: 24px; padding-top: 16px; border-top: 1px solid #E2E8F0; text-align: center;'>" +
            "<a href='https://docs.google.com/spreadsheets/d/" + SpreadsheetApp.getActiveSpreadsheet().getId() + "/edit' style='display: inline-block; padding: 10px 20px; background-color: #0284C7; color: #FFFFFF; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 13px;'>Open Google Sheet Leads Database</a>" +
          "</div>" +
        "</div>" +
        "<div style='background-color: #F8FAFC; padding: 12px; text-align: center; font-size: 11px; color: #94A3B8; border-top: 1px solid #E2E8F0;'>" +
          "SUDHVI TECH Leads Hub &bull; Automatic sync active &bull; Hyderabad, India" +
        "</div>" +
      "</div>";

    var plainBody = "SUDHVI TECH — New Submission Notification\n\n" +
      "Type: " + formName.toUpperCase() + "\n" +
      "Name: " + fullName + "\n" +
      "Phone: " + phone + "\n" +
      "Email: " + email + "\n" +
      "Program/Subject: " + courseOrSubject + "\n" +
      "College/Org: " + collegeOrOrg + "\n" +
      "Learning Mode: " + modeOrYear + "\n" +
      "Message/Notes: " + notesOrMessage + "\n" +
      "Timestamp: " + timestamp + "\n\n" +
      "This lead has been saved in your Google Sheet: https://docs.google.com/spreadsheets/d/" + SpreadsheetApp.getActiveSpreadsheet().getId() + "/edit";

    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: emailSubject,
      body: plainBody,
      htmlBody: htmlBody
    });

    lock.releaseLock();

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded in Google Sheet and email alert dispatched to " + ADMIN_EMAIL,
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    service: "SUDHVI TECH Google Sheets & Instant Email Notification Webhook",
    destinationEmail: ADMIN_EMAIL,
    instructions: "POST json payloads to this URL to record a row and dispatch email alerts."
  })).setMimeType(ContentService.MimeType.JSON);
}
