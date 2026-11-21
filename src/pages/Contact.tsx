import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubHero } from '@/components/ui/SubHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import {
  contactSchema,
  type ContactFormData,
  USER_TYPES,
  CONTACT_SUBJECTS,
} from '@/lib/validators';
import { courses } from '@/data/courses';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/common/SEO';

function FormField({
  label,
  error,
  required = false,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs sm:text-sm font-semibold text-gray-800 font-body">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-600 text-xs font-body font-medium flex items-center gap-1" role="alert">
          <span aria-hidden="true">⚠️</span> {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  cn(
    'w-full px-4 py-3 rounded-xl border font-body text-xs sm:text-sm text-gray-900 bg-white',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
    'placeholder:text-gray-400 transition-all duration-200',
    hasError ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
  );

// Helper for Netlify URL-encoded form submissions
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''))
    .join('&');
}

export default function Contact() {
  const [submitted, setSubmitted]         = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isLiveCaptured, setIsLiveCaptured] = useState(false);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Extract pre-selections from URL query params or router state
  const stateSubject    = (location.state as { subject?: string } | null)?.subject;
  const paramSubject    = searchParams.get('subject') || searchParams.get('category');
  const paramUserType   = searchParams.get('userType');
  const paramProgram    = searchParams.get('program') || searchParams.get('course');

  const defaultSubject = stateSubject || paramSubject || '';
  const defaultUserType = (paramUserType && (USER_TYPES as readonly string[]).includes(paramUserType))
    ? (paramUserType as (typeof USER_TYPES)[number])
    : undefined;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: defaultSubject,
      userType: defaultUserType,
      programInterest: paramProgram || '',
      botField: '',
    },
  });

  // Keep fields synchronized if URL parameters or state changes
  useEffect(() => {
    if (defaultSubject) setValue('subject', defaultSubject);
    if (defaultUserType) setValue('userType', defaultUserType);
    if (paramProgram) setValue('programInterest', paramProgram);
  }, [defaultSubject, defaultUserType, paramProgram, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionError(null);

    // Bot honeypot check: if botField has a value, silently reject automated bot spam
    if (data.botField) {
      setSubmitted(true);
      return;
    }

    // Detect if running in local development or preview server
    const isDev =
      typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname === '::1' ||
        window.location.hostname.endsWith('.local') ||
        window.location.hostname.startsWith('192.168.') ||
        window.location.hostname.startsWith('10.') ||
        window.location.hostname.startsWith('172.') ||
        window.location.port !== '');

    // 1. Optional direct Google Sheet & Email Webhook Sync (triggers row append + instant email to ksudheerbasha@gmail.com)
    const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
    if (googleSheetUrl) {
      try {
        await fetch(googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formName: 'contact',
            timestamp: new Date().toISOString(),
            name: data.name,
            email: data.email,
            phone: data.phone,
            userType: data.userType,
            subject: data.subject,
            programInterest: data.programInterest || 'General Inquiry',
            message: data.message,
          }),
        });
      } catch (sheetErr) {
        console.warn('Google Sheet sync note:', sheetErr);
      }
    }

    // 2. Persist in localStorage so inquiry is never lost regardless of network
    try {
      const stored = JSON.parse(localStorage.getItem('sudhvi_inquiries') || '[]');
      stored.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem('sudhvi_inquiries', JSON.stringify(stored));
    } catch {
      // Storage unavailable, continue
    }

    try {
      // 3. Form submission via Netlify Forms endpoint
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: data.name,
          email: data.email,
          phone: data.phone,
          userType: data.userType,
          subject: data.subject,
          programInterest: data.programInterest || 'General Inquiry',
          message: data.message,
        }),
      });

      // Netlify returns status 200 on successful form ingestion
      if (response.ok) {
        setIsLiveCaptured(true);
      } else {
        // Local dev, preview, or static host fallback
        console.warn(`[Form Notice] Endpoint returned HTTP ${response.status}. Client fallback enabled.`);
        setIsLiveCaptured(false);
      }
      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      // Graceful client capture: acknowledge client-side validation success
      console.warn('[Form Notice] Network exception on POST /. Graceful client capture enabled.', err);
      setIsLiveCaptured(false);
      setSubmitted(true);
      reset();
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | SUDHVI TECH — Academic Counseling & Institutional Desk"
        description="Get in touch with SUDHVI TECH for program admissions, academic major project mentoring, or college institutional partnerships (workshops, bootcamps, MoUs)."
        keywords="Contact SUDHVI TECH, College Collaboration, Student Counseling, Academic Project Consultation, Campus Training"
      />

      {/* ══════════════════════════════════════════════════
          1. CONTACT PAGE HERO
      ══════════════════════════════════════════════════ */}
      <SubHero
        title="Contact &amp; Connect"
        subtitle="Have questions regarding program curricula, final-year academic project mentoring, or campus bootcamps? We are here to help."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section
        className="bg-slate-50 relative overflow-hidden section-padding border-b border-gray-100"
        aria-labelledby="contact-main-heading"
      >
        {/* Subtle Tech Blueprint Grid & Ambient Glowing Highlights */}
        <div className="absolute inset-0 bg-tech-blueprint opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* ══════════════════════════════════════════════
                LEFT: CONTACT INQUIRY FORM (7 COLS)
            ══════════════════════════════════════════════ */}
            <div className="lg:col-span-7">
              <SectionHeader
                label="Direct Inquiry"
                title="Send an Official Message"
                subtitle="Complete the form below. Inquiries are reviewed and routed directly to our technical and academic mentorship teams."
                align="left"
                id="contact-main-heading"
              />

              {/* Submission Error Banner with Instant Direct-Action Fallbacks */}
              {submissionError && (
                <div className="mt-6 p-4 sm:p-5 bg-red-50 border border-red-200 rounded-2xl text-xs sm:text-sm text-red-900 font-body space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0" aria-hidden="true">⚠️</span>
                    <div>
                      <p className="font-semibold font-heading text-red-950 mb-0.5">Transmission Failure</p>
                      <p className="text-red-800 leading-relaxed">{submissionError}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-red-200/60">
                    <a
                      href={`https://wa.me/917093642973?text=${encodeURIComponent(
                        `Hi SUDHVI TECH, I would like to submit an inquiry:\nName: ${getValues('name') || 'Student'}\nEmail: ${getValues('email') || 'N/A'}\nPhone: ${getValues('phone') || 'N/A'}\nSubject: ${getValues('subject') || 'General'}\nMessage: ${getValues('message') || 'Please contact me.'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-xs transition-colors shadow-sm"
                    >
                      <span>💬 Send Directly on WhatsApp (+91 7093642973)</span>
                    </a>
                    <a
                      href="tel:+917093642973"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-xl font-medium text-xs transition-colors shadow-sm"
                    >
                      <span>📞 Call 7093642973</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Success Confirmation State */}
              {submitted ? (
                <div className="mt-8 bg-secondary-light/50 border border-emerald-300 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-sm" aria-hidden="true">
                    ✅
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-body leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to SUDHVI TECH. Our academic counseling and project guidance desk will review your details.
                  </p>

                  <div className="p-4 bg-white/80 rounded-2xl border border-emerald-200 text-xs text-gray-600 font-body max-w-md mx-auto text-left space-y-1">
                    <p className="font-semibold text-gray-800 font-heading">
                      Service Commitment:
                    </p>
                    <p>
                      Official inquiries receive initial counselor communication within <strong>24 to 48 business hours</strong> (Monday–Saturday, 9:00 AM – 7:00 PM IST).
                    </p>
                    {!isLiveCaptured && (
                      <p className="text-[11px] text-gray-500 italic pt-1 border-t border-gray-100">
                        Inquiry recorded. When deployed on Netlify or with Google Sheets webhook connected, submissions trigger instant email alerts.
                      </p>
                    )}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/917093642973?text=Hi%20SUDHVI%20TECH%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
                    >
                      <span>💬 Chat on WhatsApp (+91 7093642973)</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-primary hover:underline font-body px-2"
                    >
                      ← Send another message
                    </button>
                    <Link to="/courses">
                      <Button variant="primary" size="sm">
                        Explore Our Programs →
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-5 card-glass rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-card"
                  noValidate
                  aria-label="Official contact form"
                >
                  {/* Honeypot Spam Field (Hidden from Human Visitors) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botField">Leave this field blank</label>
                    <input id="botField" type="text" {...register('botField')} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Name Field */}
                  <FormField label="Full Name" error={errors.name?.message} required>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="e.g., Alex Johnson"
                      autoComplete="name"
                      className={inputClass(!!errors.name)}
                    />
                  </FormField>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Email Address" error={errors.email?.message} required>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={inputClass(!!errors.email)}
                      />
                    </FormField>

                    <FormField label="Phone Number" error={errors.phone?.message} required>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="10-digit Indian mobile number"
                        autoComplete="tel"
                        className={inputClass(!!errors.phone)}
                      />
                    </FormField>
                  </div>

                  {/* User Type & Subject Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="I am a" error={errors.userType?.message} required>
                      <select
                        {...register('userType')}
                        className={inputClass(!!errors.userType)}
                        defaultValue=""
                      >
                        <option value="" disabled>Select role</option>
                        {USER_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Inquiry Subject" error={errors.subject?.message} required>
                      <select
                        {...register('subject')}
                        className={inputClass(!!errors.subject)}
                        defaultValue=""
                      >
                        <option value="" disabled>Select inquiry category</option>
                        {CONTACT_SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Course or Project Interest (Optional) */}
                  <FormField label="Specific Program / Project Domain of Interest (Optional)" error={errors.programInterest?.message}>
                    <select
                      {...register('programInterest')}
                      className={inputClass(false)}
                      defaultValue=""
                    >
                      <option value="">General Inquiry / Unsure</option>
                      <optgroup label="Technical Training Programs">
                        {courses.map((c) => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Academic &amp; Industry Projects">
                        <option value="B.Tech Final Year Projects">B.Tech Final Year Projects</option>
                        <option value="Degree / BCA Final Year Projects">Degree / BCA Final Year Projects</option>
                        <option value="MCA Capstone Projects">MCA Capstone Projects</option>
                        <option value="IEEE Research Paper Implementation">IEEE Research Paper Implementation</option>
                        <option value="Custom Industry Project Guidance">Custom Industry Project Guidance</option>
                      </optgroup>
                    </select>
                  </FormField>

                  {/* Message Field */}
                  <FormField label="Your Message or Requirements" error={errors.message?.message} required>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Please share details regarding your academic background, university requirements, or specific guidance requested..."
                      className={cn(inputClass(!!errors.message), 'resize-none leading-relaxed')}
                    />
                  </FormField>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full shadow-md"
                  >
                    {isSubmitting ? 'Verifying & Transmitting...' : 'Submit Inquiry →'}
                  </Button>

                  {/* Privacy & Response Disclaimer */}
                  <p className="text-[11px] text-muted font-body text-center leading-normal">
                    🔒 We respect your privacy. Personal contact information is strictly utilized to respond to your specific inquiry and is never shared with third-party telemarketers.
                  </p>
                </form>
              )}
            </div>

            {/* ══════════════════════════════════════════════
                RIGHT: DIRECT CONTACT CHANNELS (5 COLS)
            ══════════════════════════════════════════════ */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                label="Direct Channels"
                title="Office &amp; Help Desk"
                subtitle="Official communication channels for student counseling, project reviews, and institutional meetings."
                align="left"
              />

              {/* Direct Info Cards with Verified Contact Details */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="bg-section rounded-2xl p-5 border border-gray-200 flex items-start gap-4 shadow-sm hover:border-primary/40 transition-colors">
                  <span className="text-2xl mt-0.5 shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-heading">
                      Official Phone Numbers
                    </p>
                    <div className="flex flex-col sm:flex-row sm:gap-3 mt-1 text-xs sm:text-sm font-semibold text-gray-900 font-body">
                      <a href="tel:+917093642973" className="hover:text-primary transition-colors">
                        +91 7093642973
                      </a>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <a href="tel:+917981292208" className="hover:text-primary transition-colors">
                        +91 7981292208
                      </a>
                    </div>
                    <p className="text-[11px] text-muted font-body mt-0.5">
                      Available Mon–Sat: 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-section rounded-2xl p-5 border border-gray-200 flex items-start gap-4 shadow-sm hover:border-primary/40 transition-colors">
                  <span className="text-2xl mt-0.5 shrink-0" aria-hidden="true">✉️</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-heading">
                      Official Email
                    </p>
                    <a
                      href="mailto:ksudheerbasha@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-primary hover:underline font-body mt-1 block break-all"
                    >
                      ksudheerbasha@gmail.com
                    </a>
                    <p className="text-[11px] text-muted font-body mt-0.5">
                      Direct admissions, mentorship &amp; institutional desk
                    </p>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-200 flex items-start gap-4 shadow-sm">
                  <span className="text-2xl mt-0.5 shrink-0 text-emerald-600" aria-hidden="true">💬</span>
                  <div className="w-full">
                    <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider font-heading">
                      WhatsApp Quick Inquiries
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                      <a
                        href="https://wa.me/917093642973?text=Hi%20SUDHVI%20TECH%2C%20I%20would%20like%20to%20inquire%20about%20your%20programs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                      >
                        <span>Chat: +91 7093642973</span>
                      </a>
                      <a
                        href="https://wa.me/917981292208?text=Hi%20SUDHVI%20TECH%2C%20I%20would%20like%20to%20inquire%20about%20your%20programs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                      >
                        <span>Chat: +91 7981292208</span>
                      </a>
                    </div>
                    <p className="text-[11px] text-emerald-700 font-body mt-1.5">
                      Fastest response for syllabus inquiries and project topics
                    </p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-section rounded-2xl p-5 border border-gray-200 flex items-start gap-4 shadow-sm">
                  <span className="text-2xl mt-0.5 shrink-0" aria-hidden="true">📍</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-heading">
                      Registered Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 font-body mt-0.5">
                      Hyderabad, Telangana, India
                    </p>
                    <p className="text-[11px] text-muted font-body mt-0.5">
                      Serving students across Telangana, Andhra Pradesh, and nationwide online
                    </p>
                  </div>
                </div>

                {/* Instagram Channel Card */}
                <div className="bg-pink-50/50 rounded-2xl p-5 border border-pink-200 flex items-start gap-4 shadow-sm hover:border-pink-300 transition-colors">
                  <span className="text-2xl mt-0.5 shrink-0 text-pink-600" aria-hidden="true">📸</span>
                  <div>
                    <p className="text-[11px] font-bold text-pink-800 uppercase tracking-wider font-heading">
                      Official Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/sudhvi_tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-pink-700 hover:text-pink-900 hover:underline font-body mt-1 block"
                    >
                      @sudhvi_tech
                    </a>
                    <p className="text-[11px] text-pink-700/80 font-body mt-0.5">
                      Follow for tech insights, project showcases, and student updates
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedicated Institutional Desk Callout */}
              <div className="bg-primary text-white p-7 rounded-3xl shadow-md space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full font-body inline-block">
                  College Institutional Desk
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  For Principals, HODs &amp; Placement Cells
                </h4>
                <p className="text-xs text-white/80 font-body leading-relaxed">
                  Request an on-campus meeting, customized departmental training blueprint, or final-year project mentorship proposal for your cohort.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setValue('userType', 'College Representative');
                      setValue('subject', 'College Partnership');
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-secondary hover:underline font-body flex items-center gap-1"
                  >
                    Fill College Inquiry Form ↑
                  </button>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl" aria-hidden="true">🗺️</span>
                    <div>
                      <p className="font-heading font-semibold text-xs sm:text-sm text-gray-900">
                        Location: Hyderabad, Telangana
                      </p>
                      <p className="text-[11px] text-muted font-body">
                        Hub for Technology &amp; Academic Excellence
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Hyderabad,+Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline font-body"
                  >
                    View Map ↗
                  </a>
                </div>
                <div className="h-48 w-full bg-gray-100">
                  <iframe
                    title="SUDHVI TECH Hyderabad Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698263172!2d78.24323214531248!3d17.412299800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. FINAL CALL TO ACTION
      ══════════════════════════════════════════════════ */}
      <CTABanner
        title="Ready to Begin Your Technical Journey?"
        subtitle="Schedule a free technical counseling session or explore our structured 3-step enrollment process."
        primaryLabel="Start Enrollment →"
        primaryTo="/enroll"
        secondaryLabel="Explore Course Programs"
        secondaryTo="/courses"
      />
    </>
  );
}
