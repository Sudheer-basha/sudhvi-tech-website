import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { courses } from '@/data/courses';
import { SubHero } from '@/components/ui/SubHero';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CTABanner } from '@/components/ui/CTABanner';
import { CourseCard } from '@/components/cards/CourseCard';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/common/SEO';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course   = courses.find((c) => c.slug === slug);

  // Accordion state for syllabus modules (open first module by default)
  const [openModule, setOpenModule] = useState<number | null>(1);
  // Accordion state for FAQs
  const [openFaq, setOpenFaq]       = useState<number | null>(0);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Related programs in the same category or overall catalog
  const relatedCourses = courses
    .filter((c) => c.id !== course.id && (c.category === course.category || courses.indexOf(c) < 3))
    .slice(0, 2);

  const toggleModule = (modNum: number) => {
    setOpenModule((prev) => (prev === modNum ? null : modNum));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'SUDHVI TECH',
      url: 'https://[CONFIRMED_DOMAIN_PENDING]/',
    },
    educationalCredentialAwarded: 'Industry Readiness Certificate',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.mode,
    },
  };

  return (
    <>
      <SEO
        title={`${course.title} Course`}
        description={course.description}
        keywords={`${course.title}, ${course.toolsAndTech.join(', ')}, ${course.category}, Industry Readiness, B.Tech Project Mentorship`}
        jsonLd={courseJsonLd}
      />

      {/* ── SubHero with Breadcrumbs ── */}
      <SubHero
        title={course.title}
        subtitle={course.description}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Courses', to: '/courses' },
          { label: course.shortTitle },
        ]}
      />

      {/* ── Quick Spec Strip ── */}
      <section className="bg-section py-4 border-b border-gray-200" aria-label="Program quick specifications">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4 text-xs font-body text-gray-700">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Category:</span>
            <Badge variant="primary">{course.category}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Level:</span>
            <span className="bg-white border border-gray-200 px-2.5 py-0.5 rounded-full font-medium">
              {course.level}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Duration:</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Delivery:</span>
            <span>{course.mode}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Pricing:</span>
            <span className="text-primary font-bold">Inquiry-Based</span>
          </div>
        </div>
      </section>

      {/* ── Main Detail Layout ── */}
      <section
        className="bg-slate-50 relative overflow-hidden section-padding border-b border-gray-200/80"
        aria-labelledby="course-overview-heading"
      >
        <div className="absolute inset-0 bg-tech-blueprint opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* ══════════════════════════════════════════════
                LEFT: MAIN CONTENT (8 COLS)
            ══════════════════════════════════════════════ */}
            <div className="lg:col-span-8 space-y-12">

              {/* 1. COURSE OVERVIEW */}
              <article aria-labelledby="course-overview-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 01
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Overview &amp; Philosophy</span>
                </div>
                <h2 id="course-overview-heading" className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
                  Program Overview
                </h2>
                <div className="p-6 bg-section rounded-2xl border border-gray-200 text-gray-700 font-body leading-relaxed text-base space-y-4">
                  <p>{course.fullDescription}</p>
                  <p className="text-sm text-muted">
                    This program is designed in strict accordance with SUDHVI TECH's <strong>Industry Readiness</strong> framework. Rather than shallow syntax overviews, every concept is taught through practical application, code reviews, and production-grade project development.
                  </p>
                </div>
              </article>

              {/* 2. WHO SHOULD ENROLL */}
              <article aria-labelledby="who-enroll-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 02
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Target Audience</span>
                </div>
                <h2 id="who-enroll-heading" className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  Who Should Enroll
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.whoShouldEnroll.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3"
                    >
                      <span className="text-secondary font-bold text-base shrink-0 mt-0.5">✓</span>
                      <span className="text-xs sm:text-sm text-gray-700 font-body leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* 3. PREREQUISITES */}
              <article aria-labelledby="prerequisites-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 03
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Required Knowledge</span>
                </div>
                <h2 id="prerequisites-heading" className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  Prerequisites &amp; Setup Requirements
                </h2>
                <div className="bg-primary-light/40 border border-blue-200 rounded-2xl p-6 space-y-3">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider font-body">
                    Recommended Background:
                  </p>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 font-body">
                        <span className="text-primary font-bold shrink-0">→</span>
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted font-body pt-2 border-t border-blue-200/60">
                    💡 <em>Unsure if you qualify? Contact our academic mentors for a complimentary skills assessment.</em>
                  </p>
                </div>
              </article>

              {/* 4. LEARNING OBJECTIVES */}
              <article aria-labelledby="objectives-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 04
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Core Competencies</span>
                </div>
                <h2 id="objectives-heading" className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  Learning Objectives
                </h2>
                <div className="space-y-3">
                  {course.learningObjectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                    >
                      <span className="w-6 h-6 rounded-full bg-secondary-light text-secondary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 font-body leading-relaxed">{obj}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* 5. DETAILED SYLLABUS / MODULES */}
              <article aria-labelledby="syllabus-heading">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                      Section 05
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs font-medium text-muted font-body">Curriculum Breakdown</span>
                  </div>
                  <span className="text-xs text-muted font-body">
                    {course.syllabus.length} Structured Modules
                  </span>
                </div>
                <h2 id="syllabus-heading" className="font-heading font-bold text-2xl text-gray-900 mb-6">
                  Detailed Syllabus &amp; Modules
                </h2>

                <div className="space-y-4">
                  {course.syllabus.map((mod) => {
                    const isOpen = openModule === mod.moduleNumber;
                    return (
                      <div
                        key={mod.moduleNumber}
                        className={cn(
                          'rounded-2xl border transition-all duration-200 overflow-hidden',
                          isOpen
                            ? 'border-primary bg-white shadow-md'
                            : 'border-gray-200 bg-section hover:border-gray-300'
                        )}
                      >
                        {/* Header Accordion Button */}
                        <button
                          type="button"
                          id={`module-btn-${mod.moduleNumber}`}
                          onClick={() => toggleModule(mod.moduleNumber)}
                          aria-expanded={isOpen}
                          aria-controls={`module-panel-${mod.moduleNumber}`}
                          className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary text-white font-heading font-bold text-xs flex items-center justify-center shrink-0">
                              0{mod.moduleNumber}
                            </span>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900">
                                  {mod.title}
                                </h3>
                                <span className="text-[11px] font-semibold text-muted font-body bg-gray-100 px-2 py-0.5 rounded">
                                  {mod.duration}
                                </span>
                              </div>
                              <p className="text-xs text-muted font-body mt-0.5 line-clamp-1">{mod.summary}</p>
                            </div>
                          </div>
                          <span className="text-primary font-bold text-lg shrink-0" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>

                        {/* Collapsible Content */}
                        {isOpen && (
                          <div
                            id={`module-panel-${mod.moduleNumber}`}
                            role="region"
                            aria-labelledby={`module-btn-${mod.moduleNumber}`}
                            className="px-5 pb-6 sm:px-6 pt-2 border-t border-gray-100 bg-white"
                          >
                            <p className="text-xs text-gray-600 font-body mb-3 font-medium">
                              Topics Covered:
                            </p>
                            <ul className="space-y-2">
                              {mod.topics.map((t, tidx) => (
                                <li key={tidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-body">
                                  <span className="text-secondary font-bold text-xs mt-0.5">•</span>
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>

              {/* 6. PRACTICAL EXERCISES & PROJECTS */}
              <article aria-labelledby="exercises-projects-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 06
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Hands-On Application</span>
                </div>
                <h2 id="exercises-projects-heading" className="font-heading font-bold text-2xl text-gray-900 mb-6">
                  Practical Lab Exercises &amp; Major Projects
                </h2>

                {/* Practical Exercises */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span>🔨</span> Weekly Hands-on Lab Assignments
                  </h3>
                  <div className="space-y-2.5">
                    {course.practicalExercises.map((ex, idx) => (
                      <div key={idx} className="bg-section p-3.5 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-700 font-body flex items-start gap-2.5">
                        <span className="font-bold text-primary font-heading shrink-0">Ex {idx + 1}:</span>
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Major Projects */}
                <div>
                  <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span>🚀</span> Deployable Major Portfolio Projects
                  </h3>
                  <div className="space-y-3">
                    {course.projects.map((proj, idx) => (
                      <div key={idx} className="bg-primary-light/50 border border-blue-200 p-5 rounded-2xl flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-heading font-semibold text-base text-gray-900">{proj}</h4>
                          <p className="text-xs text-muted font-body mt-1">
                            Includes complete source code repository, documentation package (SRS, design diagrams), and mock viva review coaching.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* 7. TOOLS & TECHNOLOGIES COVERED */}
              <article aria-labelledby="tools-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 07
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Stack &amp; Frameworks</span>
                </div>
                <h2 id="tools-heading" className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  Tools &amp; Technologies Covered
                </h2>
                <div className="flex flex-wrap gap-2.5 p-6 bg-section rounded-2xl border border-gray-200">
                  {course.toolsAndTech.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm font-semibold text-gray-800 font-body shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>

              {/* 8. TRAINING METHODOLOGY */}
              <article aria-labelledby="method-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 08
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Pedagogical Approach</span>
                </div>
                <h2 id="method-heading" className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  Training Methodology
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.trainingMethodology.map((m, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                      <span className="text-primary font-bold text-base shrink-0 mt-0.5">❖</span>
                      <p className="text-xs sm:text-sm text-gray-700 font-body leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* 9. EXPECTED LEARNING OUTCOMES */}
              <article aria-labelledby="outcomes-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 09
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Graduate Capabilities</span>
                </div>
                <h2 id="outcomes-heading" className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  Expected Learning Outcomes
                </h2>
                <div className="space-y-3">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-secondary-light/40 border border-emerald-200 p-4 rounded-xl">
                      <span className="text-secondary font-bold text-base shrink-0">✓</span>
                      <p className="text-xs sm:text-sm text-gray-800 font-body leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* CAREER OPPORTUNITIES */}
              <article aria-labelledby="career-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Career Alignment
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Target Job Roles</span>
                </div>
                <h2 id="career-heading" className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  Target Industry Roles
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {course.careerOpportunities.map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 bg-primary-light text-primary rounded-xl text-xs sm:text-sm font-semibold font-body"
                    >
                      💼 {role}
                    </span>
                  ))}
                </div>
              </article>

              {/* 11. FREQUENTLY ASKED QUESTIONS */}
              <article aria-labelledby="faqs-heading">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary font-body">
                    Section 11
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-medium text-muted font-body">Common Queries</span>
                </div>
                <h2 id="faqs-heading" className="font-heading font-bold text-2xl text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {course.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
                      >
                        <button
                          type="button"
                          id={`faq-btn-${idx}`}
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${idx}`}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          <span className="font-heading font-semibold text-sm sm:text-base text-gray-900">
                            {faq.question}
                          </span>
                          <span className="text-primary font-bold text-lg shrink-0" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            id={`faq-panel-${idx}`}
                            role="region"
                            aria-labelledby={`faq-btn-${idx}`}
                            className="px-5 pb-5 pt-1 border-t border-gray-100 text-xs sm:text-sm text-gray-700 font-body leading-relaxed bg-section"
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>

            </div>

            {/* ══════════════════════════════════════════════
                RIGHT: STICKY SIDEBAR (4 COLS)
                (Covers 10. Duration & Mode + 12. CTAs)
            ══════════════════════════════════════════════ */}
            <aside className="lg:col-span-4" aria-label="Course enrollment and inquiries">
              <div className="lg:sticky lg:top-24 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-card">
                {/* Course Icon & Level */}
                <div className="flex items-center justify-between">
                  <span className="text-5xl" role="img" aria-hidden="true">
                    {course.icon}
                  </span>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-gray-500 font-body uppercase tracking-wider block">
                      Program Level
                    </span>
                    <span className="text-xs font-bold font-heading text-primary bg-primary-light px-2.5 py-1 rounded-full inline-block mt-0.5">
                      {course.level}
                    </span>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-heading font-bold text-xl text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted font-body mt-1">
                    Industry Readiness &amp; Project Incubation Track
                  </p>
                </div>

                {/* 10. DURATION, MODE & SPECIFICATIONS */}
                <div className="space-y-3.5 text-xs sm:text-sm font-body">
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-muted flex items-center gap-1.5">
                      <span>⏱️</span> Duration
                    </span>
                    <span className="font-semibold text-gray-900">{course.duration}</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-muted flex items-center gap-1.5">
                      <span>💻</span> Mode
                    </span>
                    <span className="font-semibold text-gray-900">{course.mode.split('(')[0].trim()}</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-muted flex items-center gap-1.5">
                      <span>📅</span> Schedule
                    </span>
                    <span className="font-semibold text-gray-900 text-right">{course.schedule}</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-muted flex items-center gap-1.5">
                      <span>🚀</span> Projects
                    </span>
                    <span className="font-semibold text-secondary">{course.projects.length} Major Projects</span>
                  </div>

                  <div className="flex justify-between items-center py-1">
                    <span className="text-muted flex items-center gap-1.5">
                      <span>🏷️</span> Program Fee
                    </span>
                    <span className="font-bold text-primary text-base">Inquiry-Based</span>
                  </div>
                </div>

                {/* 12. ENROLLMENT & CONSULTATION CTAS */}
                <div className="space-y-3 pt-2">
                  <Link to="/enroll" state={{ course: course.title }} className="block">
                    <Button variant="accent" size="lg" className="w-full shadow-md">
                      Enroll in This Program →
                    </Button>
                  </Link>
                  <Link to="/contact" state={{ subject: 'Course Enquiry' }} className="block">
                    <Button variant="outline" size="md" className="w-full">
                      Inquire for Syllabus &amp; Fees
                    </Button>
                  </Link>
                </div>

                {/* Trust Guarantees */}
                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-muted font-body">
                  <p className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> No hidden admission commitments
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Full academic documentation support
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Free counseling call before batch allocation
                  </p>
                </div>

                {/* Campus/College Inquiries */}
                <div className="bg-section p-4 rounded-xl border border-gray-200 text-center">
                  <p className="text-xs font-semibold text-gray-800 font-heading mb-1">
                    HOD / Faculty Member?
                  </p>
                  <p className="text-[11px] text-muted font-body mb-3">
                    We organize custom on-campus cohorts of this program for your department.
                  </p>
                  <Link to="/contact" state={{ subject: 'College Partnership' }}>
                    <span className="text-xs font-bold text-primary hover:underline font-body">
                      Request Campus Presentation →
                    </span>
                  </Link>
                </div>
              </div>
            </aside>

          </div>

          {/* ── Related Courses Grid ── */}
          {relatedCourses.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-200">
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-8">
                Explore Related Programs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
                {relatedCourses.map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom Conversion Banner ── */}
      <CTABanner
        title={`Take the Next Step with ${course.title}`}
        subtitle="Speak with our technical mentors to understand batch timings, project milestones, and career pathways."
        primaryLabel="Enroll in This Course →"
        primaryTo="/enroll"
        secondaryLabel="Contact Academic Team"
        secondaryTo="/contact"
      />
    </>
  );
}
