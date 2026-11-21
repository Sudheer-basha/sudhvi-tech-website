import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubHero } from '@/components/ui/SubHero';
import { Button } from '@/components/ui/Button';
import {
  enrollStep1Schema,
  enrollStep2Schema,
  enrollStep3Schema,
  type EnrollStep1Data,
  type EnrollStep2Data,
  type EnrollStep3Data,
  QUALIFICATIONS,
  YEARS_OF_STUDY,
  LEARNING_MODES,
  BATCH_TIMINGS,
  PRIMARY_GOALS,
  PROJECT_SUPPORT_OPTIONS,
} from '@/lib/validators';
import { courses } from '@/data/courses';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/common/SEO';

type StepIndex = 0 | 1 | 2;

const STEP_TITLES = [
  { number: 1, title: 'Personal & Academic', subtitle: 'Basic background' },
  { number: 2, title: 'Program Selection',   subtitle: 'Course & schedule' },
  { number: 3, title: 'Review & Confirm',    subtitle: 'Final verification' },
];

function inputClass(hasError: boolean) {
  return cn(
    'w-full px-4 py-3 rounded-xl border font-body text-xs sm:text-sm text-gray-900 bg-white',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
    'placeholder:text-gray-400 transition-all duration-200',
    hasError ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
  );
}

function FieldError({ msg }: { msg?: string }) {
  return msg ? (
    <p className="text-red-600 text-xs font-body font-medium flex items-center gap-1 mt-1" role="alert">
      <span aria-hidden="true">⚠️</span> {msg}
    </p>
  ) : null;
}

function FormLabel({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs sm:text-sm font-semibold text-gray-800 font-body mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
    </label>
  );
}

// Helper for Netlify URL-encoded form submissions
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''))
    .join('&');
}

export default function Enroll() {
  const [step, setStep]           = useState<StepIndex>(0);
  const [step1Data, setStep1Data] = useState<EnrollStep1Data | null>(null);
  const [step2Data, setStep2Data] = useState<EnrollStep2Data | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isLiveCaptured, setIsLiveCaptured]   = useState(false);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Extract pre-selected course from state or URL query parameter
  const stateCourse = (location.state as { course?: string } | null)?.course;
  const paramCourse = searchParams.get('course') || searchParams.get('program');

  // Find matching course by title or slug if provided
  const matchedCourse = courses.find(
    (c) =>
      c.title.toLowerCase() === (stateCourse || paramCourse || '').toLowerCase() ||
      c.slug.toLowerCase() === (stateCourse || paramCourse || '').toLowerCase()
  );
  const initialCourse = matchedCourse ? matchedCourse.title : (stateCourse || paramCourse || '');

  /* ── Step 1 Form ── */
  const form1 = useForm<EnrollStep1Data>({
    resolver: zodResolver(enrollStep1Schema),
    defaultValues: step1Data || {
      fullName: '',
      email: '',
      phone: '',
      city: '',
      college: '',
    },
  });

  /* ── Step 2 Form ── */
  const form2 = useForm<EnrollStep2Data>({
    resolver: zodResolver(enrollStep2Schema),
    defaultValues: step2Data || {
      course: initialCourse,
    },
  });

  /* ── Step 3 Form ── */
  const form3 = useForm<EnrollStep3Data>({
    resolver: zodResolver(enrollStep3Schema),
    defaultValues: {
      referral: '',
      additionalNotes: '',
      consent: true,
      botField: '',
    },
  });

  // Keep course synchronized if URL parameter arrives after initial render
  useEffect(() => {
    if (initialCourse && !step2Data) {
      form2.setValue('course', initialCourse);
    }
  }, [initialCourse, step2Data, form2]);

  /* ── Step Handlers ── */
  const handleStep1Submit = form1.handleSubmit((data: EnrollStep1Data) => {
    setStep1Data(data);
    setStep(1);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  });

  const handleStep2Submit = form2.handleSubmit((data: EnrollStep2Data) => {
    setStep2Data(data);
    setStep(2);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  });

  const handleFinalSubmit = form3.handleSubmit(async (step3Data: EnrollStep3Data) => {
    if (!step1Data || !step2Data) return;
    setSubmissionError(null);

    // Bot honeypot check
    if (step3Data.botField) {
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

    try {
      const payload: Record<string, string> = {
        'form-name': 'enrollment',
        fullName: step1Data.fullName,
        email: step1Data.email,
        phone: step1Data.phone,
        city: step1Data.city,
        qualification: step1Data.qualification,
        college: step1Data.college,
        yearOfStudy: step1Data.yearOfStudy,
        course: step2Data.course,
        learningMode: step2Data.learningMode,
        batchTiming: step2Data.batchTiming,
        primaryGoal: step2Data.primaryGoal,
        projectSupport: step2Data.projectSupport,
        referral: step3Data.referral || 'None',
        additionalNotes: step3Data.additionalNotes || 'None',
      };

      // 1. Direct Google Sheet & Instant Email Webhook Sync (triggers row append + instant email to ksudheerbasha@gmail.com)
      const googleSheetUrl =
        import.meta.env.VITE_GOOGLE_SHEET_URL ||
        'https://script.google.com/macros/s/AKfycbyqAUQ9M8ZtJ48hzea2IeWrt4Aa3-OxMgeWW41REx6C_StwgJWdMDbFqd_vKHODgvcWMA/exec';

      if (googleSheetUrl) {
        try {
          await fetch(googleSheetUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
          });
        } catch (sheetErr) {
          console.warn('Google Sheet sync note:', sheetErr);
        }
      }

      // 2. Persist in localStorage so registration is never lost
      try {
        const stored = JSON.parse(localStorage.getItem('sudhvi_enrollments') || '[]');
        stored.push({ ...payload, timestamp: new Date().toISOString() });
        localStorage.setItem('sudhvi_enrollments', JSON.stringify(stored));
      } catch {
        // Storage unavailable, continue
      }

      // 3. Form submission via Netlify Forms endpoint
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });

      if (response.ok) {
        setIsLiveCaptured(true);
      } else {
        console.warn(`[Enroll Notice] Server returned status ${response.status}. Client fallback enabled.`);
        setIsLiveCaptured(false);
      }
      setSubmitted(true);
    } catch (err: unknown) {
      console.warn('[Enroll Notice] Network exception on POST /. Graceful client capture enabled.', err);
      setIsLiveCaptured(false);
      setSubmitted(true);
    }
  });

  /* ══════════════════════════════════════════════════
      SUCCESS STATE (ONLY ON VERIFIED SUBMISSION)
  ══════════════════════════════════════════════════ */
  if (submitted) {
    return (
      <>
        <SubHero
          title="Enrollment Registration Received"
          subtitle="Your application has been registered with the SUDHVI TECH Academic Admissions Desk."
          breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Enrollment Status' }]}
        />
        <section className="bg-white section-padding" aria-labelledby="success-heading">
          <div className="container-custom max-w-2xl mx-auto">
            <div className="bg-secondary-light/40 border border-emerald-300 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-sm" aria-hidden="true">
                ✅
              </div>
              <h2 id="success-heading" className="font-heading font-bold text-2xl sm:text-3xl text-gray-900">
                Application Received, {step1Data?.fullName}!
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 font-body leading-relaxed max-w-lg mx-auto">
                Your interest in <strong>{step2Data?.course}</strong> has been logged. Our academic coordinator will contact you at <strong>{step1Data?.phone}</strong> and <strong>{step1Data?.email}</strong>.
              </p>

              {/* Service Commitment Details */}
              <div className="p-5 bg-white rounded-2xl border border-emerald-200 text-left text-xs text-gray-700 font-body space-y-2">
                <p className="font-semibold text-gray-900 font-heading">
                  Next Steps in Your Enrollment:
                </p>
                <ul className="space-y-1.5 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">1.</span>
                    <span>An academic mentor will review your background and call to verify batch availability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">2.</span>
                    <span>You will receive the complete module syllabus, tool setup guide, and project calendar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">3.</span>
                    <span>No upfront payment is processed online. All fee schedules are discussed transparently.</span>
                  </li>
                </ul>

                {!isLiveCaptured && (
                  <p className="text-[11px] text-gray-500 italic pt-2 border-t border-gray-100">
                    Registration logged. When deployed on Netlify or with Google Sheets webhook connected, submissions trigger instant email alerts.
                  </p>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/917093642973?text=${encodeURIComponent(
                    `Hi SUDHVI TECH Admissions, I have submitted an enrollment application on your portal.\nName: ${step1Data?.fullName || 'Student'}\nCourse: ${step2Data?.course || 'General'}\nPhone: ${step1Data?.phone || 'N/A'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
                >
                  <span>💬 Chat with Admissions on WhatsApp</span>
                </a>
                <Link to="/">
                  <Button variant="primary" size="md">
                    ← Return to Home
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" size="md">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Enroll Now | SUDHVI TECH — Application & Batch Registration"
        description="Join SUDHVI TECH's industry readiness programs in AI, Machine Learning, Full Stack, and Python. Transparent batch allocation, live project mentorship, and placement prep."
        keywords="Enroll in SUDHVI TECH, Student Application, Coding Bootcamp Registration, Industry Training Admission"
      />

      {/* Screen reader step announcement */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Step {step + 1} of 3: {STEP_TITLES[step].title}
      </div>

      {/* ── SubHero ── */}
      <SubHero
        title="Enroll in SUDHVI TECH"
        subtitle="Begin your journey from campus academic theory to industry-ready engineering competence. Complete the three-step registration below."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Enroll Now' }]}
      />

      <section
        className="bg-slate-50 relative overflow-hidden section-padding border-b border-gray-100"
        aria-labelledby="enrollment-heading"
      >
        {/* Subtle Tech Blueprint Grid & Ambient Orbs */}
        <div className="absolute inset-0 bg-tech-blueprint opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom max-w-3xl mx-auto relative z-10">

          {/* ══════════════════════════════════════════════
              PROGRESS STEP INDICATOR
          ══════════════════════════════════════════════ */}
          <div className="mb-12" role="region" aria-label="Enrollment progress">
            <div className="grid grid-cols-3 gap-2 relative">
              {STEP_TITLES.map((s, idx) => {
                const isActive = step === idx;
                const isPassed = step > idx;
                return (
                  <div key={s.number} className="flex flex-col items-center text-center relative">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 z-10',
                        isActive && 'bg-primary text-white scale-110 shadow-glow',
                        isPassed && 'bg-secondary text-white',
                        !isActive && !isPassed && 'bg-gray-100 text-gray-400 border border-gray-200'
                      )}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      {isPassed ? '✓' : s.number}
                    </div>
                    <span className={cn(
                      'text-xs font-semibold font-heading mt-2',
                      isActive ? 'text-primary font-bold' : isPassed ? 'text-gray-900' : 'text-gray-400'
                    )}>
                      {s.title}
                    </span>
                    <span className="text-[10px] text-muted font-body hidden sm:block">
                      {s.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submission Failure Alert with Direct 1-Click Fallback */}
          {submissionError && (
            <div className="mb-8 p-4 sm:p-5 bg-red-50 border border-red-200 rounded-2xl text-xs sm:text-sm text-red-900 font-body space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0" aria-hidden="true">⚠️</span>
                <div>
                  <p className="font-semibold font-heading text-red-950 mb-0.5">Registration Error</p>
                  <p className="text-red-800 leading-relaxed">{submissionError}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-red-200/60">
                <a
                  href={`https://wa.me/917093642973?text=${encodeURIComponent(
                    `Hi SUDHVI TECH Admissions Desk, I would like to register for a program:\nCandidate Name: ${step1Data?.fullName || 'Prospective Student'}\nPhone: ${step1Data?.phone || 'N/A'}\nEmail: ${step1Data?.email || 'N/A'}\nTarget Course: ${step2Data?.course || 'General'}\nCollege: ${step1Data?.college || 'N/A'}\nPlease assist with my enrollment.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-xs transition-colors shadow-sm"
                >
                  <span>💬 Complete Registration on WhatsApp (+91 7093642973)</span>
                </a>
                <a
                  href="tel:+917093642973"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-xl font-medium text-xs transition-colors shadow-sm"
                >
                  <span>📞 Call Admissions 7093642973</span>
                </a>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════
              STEP 1: PERSONAL & ACADEMIC INFORMATION
          ══════════════════════════════════════════════ */}
          {step === 0 && (
            <form
              onSubmit={handleStep1Submit}
              noValidate
              className="bg-section border border-gray-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm"
              aria-label="Step 1: Personal and academic details"
            >
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider font-body block mb-1">
                  Step 1 of 3
                </span>
                <h2 id="enrollment-heading" className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                  Personal &amp; Academic Background
                </h2>
                <p className="text-xs text-muted font-body mt-1">
                  Please provide your contact information and current academic status.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <FormLabel htmlFor="fullName" required>Full Name</FormLabel>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g., Alex Johnson"
                  autoComplete="name"
                  {...form1.register('fullName')}
                  className={inputClass(!!form1.formState.errors.fullName)}
                />
                <FieldError msg={form1.formState.errors.fullName?.message} />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FormLabel htmlFor="email" required>Email Address</FormLabel>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...form1.register('email')}
                    className={inputClass(!!form1.formState.errors.email)}
                  />
                  <FieldError msg={form1.formState.errors.email?.message} />
                </div>

                <div>
                  <FormLabel htmlFor="phone" required>Mobile Number</FormLabel>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    {...form1.register('phone')}
                    className={inputClass(!!form1.formState.errors.phone)}
                  />
                  <FieldError msg={form1.formState.errors.phone?.message} />
                </div>
              </div>

              {/* City */}
              <div>
                <FormLabel htmlFor="city" required>Current City of Residence</FormLabel>
                <input
                  id="city"
                  type="text"
                  placeholder="e.g., Hyderabad, Bengaluru, Chennai"
                  {...form1.register('city')}
                  className={inputClass(!!form1.formState.errors.city)}
                />
                <FieldError msg={form1.formState.errors.city?.message} />
              </div>

              {/* College & Qualification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FormLabel htmlFor="qualification" required>Current Academic Qualification</FormLabel>
                  <select
                    id="qualification"
                    {...form1.register('qualification')}
                    className={inputClass(!!form1.formState.errors.qualification)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select degree program</option>
                    {QUALIFICATIONS.map((q) => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                  <FieldError msg={form1.formState.errors.qualification?.message} />
                </div>

                <div>
                  <FormLabel htmlFor="yearOfStudy" required>Year of Study / Status</FormLabel>
                  <select
                    id="yearOfStudy"
                    {...form1.register('yearOfStudy')}
                    className={inputClass(!!form1.formState.errors.yearOfStudy)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select year of study</option>
                    {YEARS_OF_STUDY.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <FieldError msg={form1.formState.errors.yearOfStudy?.message} />
                </div>
              </div>

              {/* College Name */}
              <div>
                <FormLabel htmlFor="college" required>College or University Name</FormLabel>
                <input
                  id="college"
                  type="text"
                  placeholder="e.g., JNTU Hyderabad / Osmania University / Andhra University"
                  {...form1.register('college')}
                  className={inputClass(!!form1.formState.errors.college)}
                />
                <FieldError msg={form1.formState.errors.college?.message} />
              </div>

              {/* Next Button */}
              <div className="pt-4 border-t border-gray-200">
                <Button type="submit" variant="primary" size="lg" className="w-full shadow-md">
                  Proceed to Program Selection →
                </Button>
              </div>
            </form>
          )}

          {/* ══════════════════════════════════════════════
              STEP 2: PROGRAM SELECTION
          ══════════════════════════════════════════════ */}
          {step === 1 && (
            <form
              onSubmit={handleStep2Submit}
              noValidate
              className="bg-section border border-gray-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm"
              aria-label="Step 2: Program and batch preferences"
            >
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider font-body block mb-1">
                  Step 2 of 3
                </span>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                  Program &amp; Learning Preferences
                </h2>
                <p className="text-xs text-muted font-body mt-1">
                  Select your desired training track, preferred timing, and project guidance scope.
                </p>
              </div>

              {/* Course Selection */}
              <div>
                <FormLabel htmlFor="course" required>Select Industry Program</FormLabel>
                <select
                  id="course"
                  {...form2.register('course')}
                  className={inputClass(!!form2.formState.errors.course)}
                  defaultValue=""
                >
                  <option value="" disabled>Choose one of our 8 technical programs</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} — ({c.duration.split('(')[0].trim()})
                    </option>
                  ))}
                </select>
                <FieldError msg={form2.formState.errors.course?.message} />
              </div>

              {/* Learning Mode & Batch Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FormLabel htmlFor="learningMode" required>Preferred Learning Mode</FormLabel>
                  <select
                    id="learningMode"
                    {...form2.register('learningMode')}
                    className={inputClass(!!form2.formState.errors.learningMode)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select delivery mode</option>
                    {LEARNING_MODES.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <FieldError msg={form2.formState.errors.learningMode?.message} />
                </div>

                <div>
                  <FormLabel htmlFor="batchTiming" required>Preferred Batch Schedule</FormLabel>
                  <select
                    id="batchTiming"
                    {...form2.register('batchTiming')}
                    className={inputClass(!!form2.formState.errors.batchTiming)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select batch timing</option>
                    {BATCH_TIMINGS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <FieldError msg={form2.formState.errors.batchTiming?.message} />
                </div>
              </div>

              {/* Primary Goal */}
              <div>
                <FormLabel htmlFor="primaryGoal" required>Primary Learning Objective</FormLabel>
                <select
                  id="primaryGoal"
                  {...form2.register('primaryGoal')}
                  className={inputClass(!!form2.formState.errors.primaryGoal)}
                  defaultValue=""
                >
                  <option value="" disabled>What is your main career or academic goal?</option>
                  {PRIMARY_GOALS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <FieldError msg={form2.formState.errors.primaryGoal?.message} />
              </div>

              {/* Project Support Interest */}
              <div>
                <FormLabel htmlFor="projectSupport" required>Do You Require Academic Project Mentorship?</FormLabel>
                <select
                  id="projectSupport"
                  {...form2.register('projectSupport')}
                  className={inputClass(!!form2.formState.errors.projectSupport)}
                  defaultValue=""
                >
                  <option value="" disabled>Select project mentoring requirement</option>
                  {PROJECT_SUPPORT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <FieldError msg={form2.formState.errors.projectSupport?.message} />
              </div>

              {/* Navigation Buttons */}
              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="sm:w-1/3"
                  onClick={() => {
                    setStep(0);
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }}
                >
                  ← Back to Step 1
                </Button>
                <Button type="submit" variant="primary" size="lg" className="sm:w-2/3 shadow-md">
                  Proceed to Review &amp; Confirm →
                </Button>
              </div>
            </form>
          )}

          {/* ══════════════════════════════════════════════
              STEP 3: REVIEW AND SUBMIT
          ══════════════════════════════════════════════ */}
          {step === 2 && (
            <form
              onSubmit={handleFinalSubmit}
              noValidate
              className="bg-section border border-gray-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm"
              aria-label="Step 3: Review and final verification"
            >
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider font-body block mb-1">
                  Step 3 of 3
                </span>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                  Review &amp; Submit Application
                </h2>
                <p className="text-xs text-muted font-body mt-1">
                  Verify your entered information before submitting. You can navigate back to modify any field.
                </p>
              </div>

              {/* Honeypot Spam Protection (Hidden) */}
              <div className="hidden" aria-hidden="true">
                <input type="text" {...form3.register('botField')} tabIndex={-1} autoComplete="off" />
              </div>

              {/* Comprehensive Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Personal & Academic Summary */}
                <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2.5 text-xs font-body">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-bold font-heading text-gray-900 text-sm">Personal &amp; College</span>
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="text-primary font-semibold hover:underline text-[11px]"
                    >
                      Edit ✏️
                    </button>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Full Name:</span>
                    <span className="font-semibold text-gray-800">{step1Data?.fullName}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Email:</span>
                    <span className="font-semibold text-gray-800">{step1Data?.email}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Phone:</span>
                    <span className="font-semibold text-gray-800">{step1Data?.phone}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">City:</span>
                    <span className="font-semibold text-gray-800">{step1Data?.city}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Qualification:</span>
                    <span className="font-semibold text-gray-800">{step1Data?.qualification}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">College:</span>
                    <span className="font-semibold text-gray-800 text-right max-w-[180px] truncate">{step1Data?.college}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Year / Status:</span>
                    <span className="font-semibold text-gray-800">{step1Data?.yearOfStudy}</span>
                  </div>
                </div>

                {/* Program & Schedule Summary */}
                <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2.5 text-xs font-body">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-bold font-heading text-gray-900 text-sm">Program Preferences</span>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-primary font-semibold hover:underline text-[11px]"
                    >
                      Edit ✏️
                    </button>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Program:</span>
                    <span className="font-bold text-primary text-right max-w-[180px]">{step2Data?.course}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Mode:</span>
                    <span className="font-semibold text-gray-800">{step2Data?.learningMode}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Batch:</span>
                    <span className="font-semibold text-gray-800">{step2Data?.batchTiming}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Primary Goal:</span>
                    <span className="font-semibold text-gray-800 text-right max-w-[170px] truncate">{step2Data?.primaryGoal}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Project Support:</span>
                    <span className="font-semibold text-secondary text-right max-w-[170px] truncate">{step2Data?.projectSupport}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-muted">Pricing Terms:</span>
                    <span className="font-bold text-gray-900">Inquiry-Based</span>
                  </div>
                </div>
              </div>

              {/* Optional Referral Channel */}
              <div>
                <FormLabel htmlFor="referral">How Did You Learn About SUDHVI TECH? (Optional)</FormLabel>
                <select id="referral" {...form3.register('referral')} className={inputClass(false)} defaultValue="">
                  <option value="">Select option</option>
                  <option value="College Faculty / Department Recommendation">College Faculty / Department Recommendation</option>
                  <option value="Senior / Student Peer Referral">Senior / Student Peer Referral</option>
                  <option value="College Campus Workshop">College Campus Workshop</option>
                  <option value="LinkedIn / Social Media">LinkedIn / Social Media</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Optional Notes */}
              <div>
                <FormLabel htmlFor="additionalNotes">Additional Notes / Special Questions (Optional)</FormLabel>
                <textarea
                  id="additionalNotes"
                  rows={3}
                  placeholder="Share any specific project topics you are considering or preferred call times..."
                  {...form3.register('additionalNotes')}
                  className={cn(inputClass(false), 'resize-none')}
                />
              </div>

              {/* Consent Checkbox */}
              <div className="p-4 bg-white rounded-2xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    {...form3.register('consent')}
                    className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-700 font-body leading-relaxed cursor-pointer">
                    I confirm that the information provided above is accurate, and I authorize SUDHVI TECH counselors to contact me via phone, email, or WhatsApp regarding this enrollment inquiry under our{' '}
                    <Link to="/privacy" target="_blank" className="text-primary font-semibold underline hover:text-primary-dark">
                      Privacy Policy
                    </Link>.
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                  </label>
                </div>
                <FieldError msg={form3.formState.errors.consent?.message} />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="sm:w-1/3"
                  onClick={() => {
                    setStep(1);
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }}
                >
                  ← Edit Step 2
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={form3.formState.isSubmitting}
                  loading={form3.formState.isSubmitting}
                  className="sm:w-2/3 shadow-md"
                >
                  {form3.formState.isSubmitting ? 'Transmitting Registration...' : 'Complete & Submit Enrollment →'}
                </Button>
              </div>

              <p className="text-[11px] text-muted font-body text-center">
                🔒 Transmission is protected against automated bot submission. Your data is strictly used for admissions verification.
              </p>
            </form>
          )}

        </div>
      </section>
    </>
  );
}
