import { Link } from 'react-router-dom';
import { SubHero } from '@/components/ui/SubHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTABanner } from '@/components/ui/CTABanner';
import { Button } from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/common/SEO';
import { TechNeuralBackground } from '@/components/ui/TechNeuralBackground';

/* ─── Core Values ─────────────────────────────────────── */
const CORE_VALUES = [
  {
    icon: '🏭',
    title: 'Industry Centricity',
    desc: 'Every syllabus, tool, and case study is selected based on active enterprise demand, not theoretical convenience.',
  },
  {
    icon: '🔨',
    title: 'Practical Immersion',
    desc: 'Hands-on coding, architecture design, and system building take precedence over passive lectures and slide memorization.',
  },
  {
    icon: '🤝',
    title: 'Transparency & Integrity',
    desc: 'We present clear program milestones, realistic career paths, and authentic project evaluations with zero exaggerated claims.',
  },
  {
    icon: '🚀',
    title: 'Student-First Mentorship',
    desc: 'Empowering every student with individual guidance, empathetic feedback, and continuous support throughout their journey.',
  },
  {
    icon: '💡',
    title: 'Adaptive Modernization',
    desc: 'Continuously refining our curriculum to incorporate modern breakthroughs like Generative AI, modern DevOps, and Agentic workflows.',
  },
  {
    icon: '🏛️',
    title: 'Academic Synergy',
    desc: 'Respecting and augmenting college curricula by functioning as an enabler for academic departments rather than a replacement.',
  },
];

/* ─── Industry Readiness Pillars ──────────────────────── */
const READINESS_PILLARS = [
  {
    number: '01',
    title: 'From Conceptual Theory to Engineering Execution',
    desc: 'Colleges teach foundational computer science concepts; we teach students how those concepts are applied in production software stacks, microservices, and live data pipelines.',
    points: ['Real-world code organization & modularity', 'Handling exceptions and edge cases', 'Industry-grade version control (Git)'],
  },
  {
    number: '02',
    title: 'Comprehensive Project Mentoring',
    desc: 'We guide students through the entire project lifecycle—from requirement analysis (SRS) and architecture diagrams to API integration, unit testing, and viva defense.',
    points: ['Architecture blueprints & schema design', 'Comprehensive documentation & reports', 'Mock presentation & defense coaching'],
  },
  {
    number: '03',
    title: 'Modern Tooling & Development Workflows',
    desc: 'Students gain hands-on proficiency with tools used daily in high-performing engineering teams, bridging the traditional workplace tooling divide.',
    points: ['IDEs, terminal workflows & debuggers', 'Postman, REST APIs & Docker fundamentals', 'Code quality linters and formatting'],
  },
  {
    number: '04',
    title: 'Holistic Career & Placement Readiness',
    desc: 'We integrate professional readiness directly into the learning pathway, helping students communicate technical decisions effectively.',
    points: ['ATS-compliant resume engineering', 'Algorithmic assessment drills', 'Technical & HR interview simulations'],
  },
];

/* ─── Why Students Choose Us ──────────────────────────── */
const STUDENT_BENEFITS = [
  {
    title: 'Authentic Hands-on Project Portfolio',
    desc: 'Graduate with GitHub-hosted, deployable projects that demonstrate genuine problem-solving ability to recruiters.',
  },
  {
    title: 'Active Industry Practitioner Guidance',
    desc: 'Learn directly from mentors with hands-on experience in building, testing, and shipping production software.',
  },
  {
    title: 'Complete Academic Project Support',
    desc: 'End-to-end guidance for B.Tech, Degree, and MCA final-year capstones including synopsis, documentation, and viva prep.',
  },
  {
    title: 'Zero-Gimmick Transparent Learning',
    desc: 'Honest skill assessments, realistic career coaching, and inquiry-based pricing without artificial promises.',
  },
  {
    title: 'Flexible Learning Schedules',
    desc: 'Carefully planned batch timings (evening, weekend, and hybrid) that run smoothly alongside regular college coursework.',
  },
  {
    title: 'Structured Interview Preparation',
    desc: 'Targeted preparation covering data structures, system logic, mock interviews, and personalized feedback.',
  },
];

/* ─── Commitment to Colleges ──────────────────────────── */
const INSTITUTION_COMMITMENTS = [
  {
    icon: '🏫',
    title: 'Customized On-Campus Bootcamps',
    desc: 'We conduct specialized workshops and bootcamps on your college campus, tailored to complement your department curriculum.',
  },
  {
    icon: '📊',
    title: 'Objective Student Progress Metrics',
    desc: 'Department HODs and TPOs receive transparent attendance and skill milestone reports to measure cohort progress.',
  },
  {
    icon: '🔬',
    title: 'Academic Final-Year Project Incubation',
    desc: 'Mentoring department batches in developing original, IEEE-aligned, or industry-grade capstone projects with proper documentation.',
  },
  {
    icon: '🎯',
    title: 'Placement Cell (TPO) Augmentation',
    desc: 'Intensive pre-placement drives and technical assessment bootcamps designed to elevate batch clearance rates during campus recruitments.',
  },
];

export default function About() {
  const storyRef      = useScrollAnimation();
  const valuesRef     = useScrollAnimation();
  const readinessRef  = useScrollAnimation();
  const studentsRef   = useScrollAnimation();
  const collegesRef   = useScrollAnimation();
  const founderRef    = useScrollAnimation();

  return (
    <>
      <SEO
        title="About Us | SUDHVI TECH — Industry Readiness Partner"
        description="Learn about SUDHVI TECH's mission to bridge academic learning and industry expectations through project-driven mentoring, practical technology training, and college collaboration."
        keywords="About SUDHVI TECH, Industry Readiness, EdTech Startup, College Collaboration, Student Mentorship, Technical Training"
      />

      {/* ── SubHero Header ── */}
      <SubHero
        title="About SUDHVI TECH"
        subtitle="An Industry Readiness & Project Development Partner dedicated to bridging the critical gap between academic learning and industry expectations."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />

      {/* ══════════════════════════════════════════════════
          1. COMPANY INTRODUCTION AND STORY
      ══════════════════════════════════════════════════ */}
      <section
        ref={storyRef as React.RefObject<HTMLElement>}
        className="bg-tech-blueprint relative overflow-hidden section-padding border-b border-gray-100"
        aria-labelledby="story-heading"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text — 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                label="Our Story &amp; Origins"
                title="Why SUDHVI TECH Was Founded"
                align="left"
                id="story-heading"
              />
              <div className="space-y-4 text-gray-700 font-body leading-relaxed text-base">
                <p>
                  Every academic year, thousands of talented students graduate from engineering, degree, and postgraduate institutions with strong foundational degrees—yet encounter an immediate hurdle: corporate hiring teams expect candidates who already understand production architectures, development lifecycles, and modern industry toolchains.
                </p>
                <p>
                  The disconnect is not due to a lack of student capability or academic dedication. Rather, traditional university syllabi are structured around theoretical exam rubrics, leaving little room for live system design, hands-on repository collaboration, or realistic viva defense.
                </p>
                <p>
                  <strong>SUDHVI TECH was established to solve this exact bottleneck.</strong> We operate not as a commercial coaching institute, but as a technical readiness partner. We collaborate with both aspiring students and forward-thinking academic institutions to deliver hands-on project incubation, practical coding mastery, and structured placement coaching.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-body text-muted border-t border-gray-100">
                <div>
                  <span className="text-gray-900 font-semibold">Entity:</span> SUDHVI TECH
                </div>
                <div>
                  <span className="text-gray-900 font-semibold">Focus:</span> Industry Readiness &amp; Project Mentorship
                </div>
                <div>
                  <span className="text-gray-900 font-semibold">Headquarters:</span> Hyderabad, Telangana, India
                </div>
              </div>
            </div>

            {/* Visual Narrative Box — 5 cols */}
            <div className="lg:col-span-5 bg-section rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-card">
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gray-200">
                <img
                  src="/logo.png"
                  alt="SUDHVI TECH Emblem"
                  className="w-12 h-12 object-contain rounded-full shadow-sm bg-white p-0.5 border border-gray-200"
                  width="48"
                  height="48"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 leading-tight">
                    The SUDHVI TECH Distinction
                  </h3>
                  <p className="text-xs text-muted font-body mt-0.5">From Campus to Career</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  {
                    title: 'The Academic Foundation',
                    desc: 'Colleges provide rigorous theory, algorithms, and degree accreditation.',
                  },
                  {
                    title: 'The Industry Reality',
                    desc: 'Employers require Git workflows, clean code, framework proficiency, and live project proofs.',
                  },
                  {
                    title: 'The SUDHVI TECH Bridge',
                    desc: 'We combine live projects, practitioner mentorship, and interview drills to make candidates immediately job-ready.',
                  },
                ].map((item, idx) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary-light text-primary font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-gray-900">{item.title}</h4>
                      <p className="text-xs text-muted font-body mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2 & 3. VISION & MISSION
      ══════════════════════════════════════════════════ */}
      <section className="bg-section section-padding" aria-labelledby="vision-mission-heading">
        <div className="container-custom">
          <SectionHeader
            label="Guiding Direction"
            title="Vision &amp; Mission"
            subtitle="Our institutional principles guide every curriculum update, mentor interaction, and college collaboration program."
            id="vision-mission-heading"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-blue-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center text-3xl mb-6">
                  <span aria-hidden="true">🔭</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 font-body leading-relaxed text-base">
                  To become the most dependable and respected Industry Readiness &amp; Project Development Partner for students and higher educational institutions—ensuring that every graduate steps into their professional career with demonstrable technical capability, authentic project experience, and complete self-assurance.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider font-body">
                <span>Long-Term Horizon</span>
                <span>•</span>
                <span>Sustainable Technical Impact</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-emerald-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-secondary-light text-secondary flex items-center justify-center text-3xl mb-6">
                  <span aria-hidden="true">🎯</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 font-body leading-relaxed text-base">
                  To provide practical, rigorous, and industry-modeled technology education through real project development, practitioner mentorship, and systematic placement preparation—bridging the gap between university coursework and contemporary industry standards for every student and college we partner with.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider font-body">
                <span>Daily Practice</span>
                <span>•</span>
                <span>Hands-on Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. CORE VALUES (DEEP TECH DARK SECTION)
      ══════════════════════════════════════════════════ */}
      <section
        ref={valuesRef as React.RefObject<HTMLElement>}
        className="bg-tech-grid-dark text-white relative overflow-hidden section-padding"
        aria-labelledby="values-heading"
      >
        {/* Connected Neural Node Background */}
        <TechNeuralBackground variant="dark" opacity="opacity-30" />

        {/* Ambient Cyan / Blue Glows */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="What Defines Us"
            title="Our Core Values"
            subtitle="These values govern our teaching approach, mentorship standards, and institutional partnerships."
            light
            id="values-heading"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="animate-on-scroll card-glass-dark rounded-2xl p-7 border border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 text-white"
              >
                <div className="w-12 h-12 bg-blue-900/60 border border-blue-500/30 rounded-xl flex items-center justify-center text-2xl text-cyan-300 shadow-sm">
                  <span aria-hidden="true">{val.icon}</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-300 font-body leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. OUR APPROACH TO INDUSTRY READINESS
      ══════════════════════════════════════════════════ */}
      <section
        ref={readinessRef as React.RefObject<HTMLElement>}
        className="bg-section section-padding"
        aria-labelledby="readiness-heading"
      >
        <div className="container-custom">
          <SectionHeader
            label="The Methodology"
            title="Our Approach to Industry Readiness"
            subtitle="Industry readiness is not achieved by watching pre-recorded tutorials. It requires active engineering rigor, feedback loops, and real deliverables."
            id="readiness-heading"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {READINESS_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-200 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-heading font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
                      Pillar {pillar.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted font-body leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2 font-heading">
                    Practical Focus:
                  </p>
                  <ul className="space-y-1.5">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="text-xs text-gray-600 font-body flex items-center gap-2">
                        <span className="text-secondary font-bold">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. WHY STUDENTS SHOULD CHOOSE SUDHVI TECH
      ══════════════════════════════════════════════════ */}
      <section
        ref={studentsRef as React.RefObject<HTMLElement>}
        className="bg-white section-padding"
        aria-labelledby="students-heading"
      >
        <div className="container-custom">
          <SectionHeader
            label="Student Perspective"
            title="Why Students Choose SUDHVI TECH"
            subtitle="Designed specifically for B.Tech, Degree, and MCA students seeking genuine skill progression and career launchpad."
            id="students-heading"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_BENEFITS.map((item) => (
              <div
                key={item.title}
                className="animate-on-scroll bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-secondary-light text-secondary flex items-center justify-center font-bold text-sm mb-4">
                    ✓
                  </div>
                  <h4 className="font-heading font-semibold text-base text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/courses">
              <Button variant="primary" size="lg">
                Explore Our Programs →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. COMMITMENT TO COLLEGES AND INSTITUTIONS
      ══════════════════════════════════════════════════ */}
      <section
        ref={collegesRef as React.RefObject<HTMLElement>}
        className="bg-gradient-to-br from-[#06182F] via-[#092B45] to-[#044744] text-white relative overflow-hidden section-padding"
        aria-labelledby="colleges-heading"
      >
        {/* Technology Synapse & Node Backdrop */}
        <TechNeuralBackground variant="cyan" opacity="opacity-35" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="Institutional Partnership"
            title="Our Commitment to Colleges &amp; Academic Leadership"
            subtitle="We view colleges not as sales targets, but as academic partners. We work alongside Principals, HODs, and Placement Officers to enrich student outcomes without disrupting academic calendars."
            light
            id="colleges-heading"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTION_COMMITMENTS.map((item) => (
              <div
                key={item.title}
                className="animate-on-scroll card-glass-dark rounded-2xl p-7 border border-white/15 shadow-xl hover:border-teal-400/50 hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col text-white"
              >
                <div className="w-12 h-12 bg-teal-900/50 border border-teal-500/30 text-teal-300 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm">
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <h4 className="font-heading font-semibold text-base text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 font-body leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 card-glass-dark rounded-2xl border border-white/20 p-8 text-center max-w-3xl mx-auto shadow-2xl text-white">
            <h4 className="font-heading font-semibold text-lg text-white mb-2">
              Are you an HOD, Principal, or Placement Officer?
            </h4>
            <p className="text-sm text-slate-300 font-body mb-6">
              Let us tailor an on-campus training or project mentorship program specifically suited to your students' semester requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="accent" size="md">
                  Inquire for College Collaboration →
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-white" size="md">
                  Request Department Presentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. FOUNDER MESSAGE
      ══════════════════════════════════════════════════ */}
      <section
        ref={founderRef as React.RefObject<HTMLElement>}
        className="bg-white section-padding"
        aria-labelledby="founder-heading"
      >
        <div className="container-custom">
          <SectionHeader
            label="Leadership Perspective"
            title="A Message from Our Leadership"
            id="founder-heading"
          />

          <div className="mt-12 max-w-3xl mx-auto bg-section rounded-3xl p-8 sm:p-12 border border-gray-200 relative shadow-card">
            <span
              className="absolute top-6 left-8 text-7xl text-primary-light/50 font-serif leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              “
            </span>

            <blockquote className="pt-6 text-gray-800 font-body text-base sm:text-lg leading-relaxed italic text-center relative z-10">
              [PLACEHOLDER: Founder personal message regarding why SUDHVI TECH was started, our educational philosophy, and our dedication to student career outcomes.]
            </blockquote>

            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-center gap-3">
              <div
                className="w-16 h-16 bg-white border-2 border-primary-light rounded-full flex items-center justify-center text-gray-400 text-2xl shadow-sm"
                aria-label="Founder Photo Placeholder"
              >
                👤
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-gray-900 text-base">
                  [PLACEHOLDER: Founder Name]
                </p>
                <p className="text-xs text-muted font-body">
                  [PLACEHOLDER: Founder Title / Credentials]
                </p>
                <p className="text-[11px] text-primary font-semibold font-body mt-0.5">
                  SUDHVI TECH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. FINAL CALL TO ACTION
      ══════════════════════════════════════════════════ */}
      <CTABanner
        title="Ready to Partner with SUDHVI TECH?"
        subtitle="Whether you are an ambitious student preparing for your first industry role, or an academic leader looking to empower your campus batch—we invite you to connect with us."
        primaryLabel="Schedule a Consultation"
        primaryTo="/contact"
        secondaryLabel="Explore All Programs"
        secondaryTo="/courses"
      />
    </>
  );
}
