import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTABanner } from '@/components/ui/CTABanner';
import { CourseCard } from '@/components/cards/CourseCard';
import { courses } from '@/data/courses';
import { testimonials } from '@/data/testimonials';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/common/SEO';
import { TechNeuralBackground } from '@/components/ui/TechNeuralBackground';

/* ─── Why Choose Us items ─────────────────────────────── */
const WHY_ITEMS = [
  {
    icon: '🎯',
    title: 'Industry-Aligned Curriculum',
    desc: 'Syllabus designed in consultation with industry expectations rather than outdated academic coursework.',
  },
  {
    icon: '🔨',
    title: 'Live Project Experience',
    desc: 'Work on actual software architectures, real datasets, and deployable code repositories.',
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Practitioner Mentorship',
    desc: 'Learn directly from engineers and technical leads who actively build enterprise systems.',
  },
  {
    icon: '💼',
    title: 'Integrated Placement Preparation',
    desc: 'Resume tailoring, mock technical interviews, and soft skills training incorporated from week one.',
  },
  {
    icon: '🏢',
    title: 'Direct College Partnerships',
    desc: 'Structured on-campus bootcamps, workshops, and project mentorship tailored for department syllabi.',
  },
  {
    icon: '🛤️',
    title: 'Flexible Learning Modes',
    desc: 'Hybrid, online, and in-person campus schedules designed to run parallel to regular semester classes.',
  },
];

/* ─── Placement Prep items ────────────────────────────── */
const PLACEMENT_ITEMS = [
  {
    icon: '📄',
    title: 'ATS Resume Engineering',
    desc: 'Transform academic resumes into project-heavy, keyword-optimized profiles that pass corporate ATS filters.',
    points: ['Industry-standard templates', 'Project impact articulation', 'GitHub & portfolio integration'],
  },
  {
    icon: '🎤',
    title: 'Technical & HR Mock Interviews',
    desc: 'Simulated real-world technical interview rounds with detailed performance feedback and scoring.',
    points: ['Live coding assessments', 'System design basics', 'Behavioral and HR readiness'],
  },
  {
    icon: '🎓',
    title: 'Internship Pathways',
    desc: 'Guidance and mentorship to secure verified internships that translate directly to workplace readiness.',
    points: ['Application guidance', 'Project proof-of-work', 'Corporate workplace etiquette'],
  },
  {
    icon: '🧭',
    title: 'Career & Domain Advisory',
    desc: 'One-on-one consultation to identify the optimal career trajectory based on student strengths.',
    points: ['Specialization mapping', 'Salary & role benchmarks', 'Long-term skill roadmaps'],
  },
];

/* ─── College Collaboration services ─────────────────── */
const COLLAB_SERVICES = [
  {
    icon: '🏫',
    title: 'On-Campus Technical Bootcamps',
    target: 'B.Tech / Degree / MCA',
    desc: 'Intensive hands-on training conducted directly on your college campus, customized to your semester calendar.',
    deliverables: ['Custom syllabus matching department goals', 'Faculty coordination & attendance tracking', 'Student assessment reports'],
  },
  {
    icon: '🔧',
    title: 'Hands-on Technology Workshops',
    target: '2-Day to 5-Day Intensives',
    desc: 'High-impact technical masterclasses covering Generative AI, Python, Full Stack Engineering, and Cloud tools.',
    deliverables: ['Live coding demonstrations', 'Ready-to-use starter kits', 'Participation & skill certificates'],
  },
  {
    icon: '📐',
    title: 'Academic Final-Year Project Mentoring',
    target: 'Department Projects & Vivavoca',
    desc: 'Complete technical guidance for students undertaking final year capstones, IEEE implementations, and research papers.',
    deliverables: ['Original architecture design', 'Comprehensive documentation (SRS/Design)', 'Mock viva coaching with review panels'],
  },
  {
    icon: '🎓',
    title: 'Structured Student Internship Programs',
    target: 'Pre-Final & Final Year Students',
    desc: 'Credit-compliant internship modules with live project milestones, real sprint reviews, and progress reporting.',
    deliverables: ['Dedicated industry mentor per team', 'Git-based milestone reviews', 'Formal completion certification'],
  },
  {
    icon: '🏆',
    title: 'Placement Drive Readiness Modules',
    target: 'Placement Cell (TPO) Partnership',
    desc: 'Focused readiness drives preparing batches for upcoming campus placement drives and competitive hiring tests.',
    deliverables: ['Aptitude & algorithmic problem solving', 'Domain-specific interview drills', 'Batch readiness analytics for TPOs'],
  },
];

/* ─── Training Methodology Pipeline ──────────────────── */
const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Core Fundamentals & Engineering Logic',
    desc: 'Deep conceptual foundation in modern programming languages, architecture principles, and algorithmic problem solving.',
    tag: 'Foundation',
  },
  {
    step: '02',
    title: 'Industry Tooling & Workflow Standards',
    desc: 'Working with Git/GitHub, modern IDEs, containerization basics, API testing, and code quality linting used in tech teams.',
    tag: 'Workflows',
  },
  {
    step: '03',
    title: 'Live Real-World Project Development',
    desc: 'Designing and building complete software products from scratch rather than following copy-paste tutorials.',
    tag: 'Hands-on',
  },
  {
    step: '04',
    title: 'Standardized Documentation & Code Review',
    desc: 'Writing clean code, technical reports, SRS documents, and participating in peer code reviews.',
    tag: 'Engineering Rigor',
  },
  {
    step: '05',
    title: 'Viva, Portfolio & Interview Simulation',
    desc: 'Comprehensive preparation for academic project defense, portfolio showcasing, and multi-round technical interviews.',
    tag: 'Job Ready',
  },
];

/* ─── Course categories displayed ────────────────────── */
const COURSE_CATEGORIES = [
  { icon: '🤖', label: 'AI & Machine Learning' },
  { icon: '✨', label: 'Generative AI' },
  { icon: '🤝', label: 'Agentic AI' },
  { icon: '📝', label: 'Prompt Engineering' },
  { icon: '🐍', label: 'Python Programming' },
  { icon: '☕', label: 'Java Full Stack' },
  { icon: '🧪', label: 'Software Testing' },
  { icon: '📊', label: 'Data Analytics' },
];

export default function Home() {
  const heroRef        = useScrollAnimation();
  const missionRef     = useScrollAnimation();
  const whyRef         = useScrollAnimation();
  const coursesRef     = useScrollAnimation();
  const projectsRef    = useScrollAnimation();
  const placementRef   = useScrollAnimation();
  const methodRef      = useScrollAnimation();
  const collabRef      = useScrollAnimation();

  return (
    <>
      <SEO
        title="SUDHVI TECH — From Campus to Career | Industry Readiness & Project Development"
        description="SUDHVI TECH empowers B.Tech, Degree, and MCA students with practical technical training in AI, GenAI, Full Stack, and Python, live project mentorship, and placement preparation."
        keywords="Industry Readiness, B.Tech Projects, MCA Projects, Artificial Intelligence, Generative AI, Java Full Stack, Python Programming, Placement Preparation, College Collaboration"
      />

      {/* ══════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="bg-transparent min-h-[92vh] flex flex-col justify-center relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Subtle Ambient Depth Lighting (Allows 3D Vanta WebGL canvas to shine clearly) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-teal-400/10 blur-3xl rounded-full" />
        </div>

        <div className="container-custom pt-28 pb-16 relative z-10">
          {/* Institutional Badge */}
          <div className="animate-on-scroll flex justify-center mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full text-xs sm:text-sm font-semibold font-body tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
              Industry Readiness &amp; Project Development Partner
            </span>
          </div>

          {/* Headline & Subhead */}
          <div className="animate-on-scroll text-center max-w-4xl mx-auto">
            <h1
              id="hero-heading"
              className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.15] text-balance tracking-tight"
            >
              Bridge the Gap Between <span className="text-secondary">Academia</span> and Industry
            </h1>
            <p className="mt-6 text-base sm:text-xl text-white/85 font-body leading-relaxed max-w-2xl mx-auto font-normal">
              Empowering B.Tech, Degree &amp; MCA students with practical technical skills, live project execution, and structured placement preparation.
            </p>
          </div>

          {/* Action Triggers */}
          <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/courses">
              <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                Explore Programs →
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline-white" size="lg" className="w-full sm:w-auto backdrop-blur-sm">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {/* Audience Quick Nav Pill */}
          <div className="animate-on-scroll flex items-center justify-center gap-2 sm:gap-4 mt-8 text-xs text-white/70 font-body">
            <span>Specialized solutions for:</span>
            <span className="text-white font-medium bg-white/10 px-2.5 py-1 rounded-md">Students &amp; Graduates</span>
            <span className="text-white font-medium bg-white/10 px-2.5 py-1 rounded-md">Colleges, HODs &amp; TPOs</span>
          </div>

          {/* Course categories strip */}
          <div className="animate-on-scroll mt-14 border-t border-white/15 pt-8">
            <p className="text-center text-white/60 text-xs font-semibold uppercase tracking-widest mb-6 font-body">
              Core Technical Programs Offered
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {COURSE_CATEGORIES.map(({ icon, label }) => (
                <Link
                  key={label}
                  to="/courses"
                  className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-md hover:shadow-cyan-500/15 transition-all duration-300 text-center group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="text-white/90 text-xs font-body font-medium leading-tight">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. COMPANY MISSION & POSITIONING
      ══════════════════════════════════════════════════ */}
      <section
        ref={missionRef as React.RefObject<HTMLElement>}
        className="bg-tech-blueprint relative overflow-hidden section-padding border-b border-gray-100"
        aria-labelledby="mission-heading"
      >
        {/* Soft Ambient Luminous Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="Our Core Purpose"
            title="Not a Traditional Coaching Center — An Industry Readiness Partner"
            subtitle="Traditional academic curricula focus primarily on theoretical exams. SUDHVI TECH acts as an operational bridge, instilling modern development workflows, practical problem solving, and workplace habits."
            id="mission-heading"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Practical Hands-on Learning',
                desc: 'Every session is built around practical application. Students write code, debug real stack traces, and manage software repositories from day one.',
                borderColor: 'border-blue-100 hover:border-blue-400/50',
                iconBg: 'bg-primary-light text-primary',
              },
              {
                icon: '🏭',
                title: 'Strict Industry Alignment',
                desc: 'Our program blueprints are modeled directly after software company requirements, agile frameworks, Git workflows, and contemporary technology stacks.',
                borderColor: 'border-emerald-100 hover:border-emerald-400/50',
                iconBg: 'bg-secondary-light text-secondary',
              },
              {
                icon: '🚀',
                title: 'Outcome-Driven Career Growth',
                desc: 'We evaluate success by student workplace confidence, project defensibility in viva reviews, and ability to excel in placement interviews.',
                borderColor: 'border-orange-100 hover:border-orange-400/50',
                iconBg: 'bg-accent-light text-accent',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={cn(
                  'animate-on-scroll rounded-3xl border p-8 flex flex-col gap-5 card-glass shadow-card',
                  'hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300',
                  item.borderColor
                )}
              >
                <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm', item.iconBg)}>
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. WHY CHOOSE US (DEEP TECH DARK SECTION)
      ══════════════════════════════════════════════════ */}
      <section
        ref={whyRef as React.RefObject<HTMLElement>}
        className="bg-tech-grid-dark text-white relative overflow-hidden section-padding"
        aria-labelledby="why-heading"
      >
        {/* Connected Neural Node Background */}
        <TechNeuralBackground variant="dark" opacity="opacity-30" />

        {/* Ambient Cyan / Blue Luminous Glows */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column — 5 cols */}
            <div className="lg:col-span-5">
              <SectionHeader
                label="Why SUDHVI TECH"
                title="A Comprehensive Readiness Ecosystem"
                subtitle="We do not just provide lecture slides. We integrate technical skill development, project execution, mentorship, and career readiness into a unified program."
                align="left"
                light
                id="why-heading"
              />
              <div className="mt-8 space-y-4">
                <div className="p-5 card-glass-dark rounded-2xl border border-white/10">
                  <h4 className="font-heading font-semibold text-sm text-cyan-300 mb-1">For Students &amp; Graduates</h4>
                  <p className="text-xs text-slate-300 font-body leading-relaxed">Build authentic project portfolios, master industry tools, and pass technical interviews with confidence.</p>
                </div>
                <div className="p-5 card-glass-dark rounded-2xl border border-white/10">
                  <h4 className="font-heading font-semibold text-sm text-teal-300 mb-1">For Colleges, HODs &amp; TPOs</h4>
                  <p className="text-xs text-slate-300 font-body leading-relaxed">Augment your department curriculum with customized on-campus bootcamps and measurable placement readiness.</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/about">
                  <Button variant="accent" size="md">Our Story &amp; Vision →</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline-white" size="md">Inquire Now</Button>
                </Link>
              </div>
            </div>

            {/* Right Column — 7 cols Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_ITEMS.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="animate-on-scroll card-glass-dark rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 text-white"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-900/60 border border-blue-500/30 flex items-center justify-center text-xl mb-4 text-cyan-300 shadow-sm">
                    <span aria-hidden="true">{icon}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-base text-white mb-2">{title}</h4>
                  <p className="text-xs text-slate-300 font-body leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. FEATURED COURSES
      ══════════════════════════════════════════════════ */}
      <section
        ref={coursesRef as React.RefObject<HTMLElement>}
        className="bg-slate-50 relative overflow-hidden section-padding border-b border-gray-200/80"
        aria-labelledby="courses-heading"
      >
        {/* Subtle Tech Blueprint Grid & Ambient Orb */}
        <div className="absolute inset-0 bg-tech-blueprint opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-gradient-to-r from-blue-200/30 via-cyan-100/30 to-teal-100/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="Industry Programs"
            title="Core Programs Built for Immediate Job Readiness"
            subtitle="Every program features live projects, modern tooling, and integrated career coaching. Detailed program outlines available upon inquiry."
            id="courses-heading"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course) => (
              <div key={course.id} className="animate-on-scroll">
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses">
              <Button variant="primary" size="lg" className="shadow-md">
                View All 8 Programs →
              </Button>
            </Link>
            <Link to="/enroll">
              <Button variant="accent" size="lg" className="shadow-md">
                Enroll Today →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. ACADEMIC & INDUSTRY PROJECT DEVELOPMENT
      ══════════════════════════════════════════════════ */}
      <section
        ref={projectsRef as React.RefObject<HTMLElement>}
        className="bg-tech-grid-dark text-white relative overflow-hidden section-padding"
        aria-labelledby="projects-heading"
      >
        {/* Connected Neural Network Backdrop */}
        <TechNeuralBackground variant="dark" opacity="opacity-30" />

        {/* Ambient Glowing Highlights */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — 6 cols */}
            <div className="lg:col-span-6">
              <SectionHeader
                label="Project Development Mentorship"
                title="Academic Final-Year &amp; Industry Projects Done Right"
                subtitle="We do not supply canned code. We guide students step-by-step through the software engineering lifecycle — enabling full code understanding and confident defense during viva reviews."
                align="left"
                light
                id="projects-heading"
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'B.Tech Projects', desc: 'Embedded systems, AI/ML models, Web architectures.' },
                  { title: 'Degree & MCA Projects', desc: 'Enterprise databases, full stack apps, cloud systems.' },
                  { title: 'IEEE Standard Projects', desc: 'Implementations based on verified research papers.' },
                  { title: 'Live Industry Case Studies', desc: 'Solving real operational workflows and analytics.' },
                  { title: 'Full Documentation Support', desc: 'Synopsis, SRS, Architecture Diagrams & Final Reports.' },
                  { title: 'PPT & Viva Coaching', desc: 'Mock defense sessions with review questionnaires.' },
                ].map((item) => (
                  <div key={item.title} className="card-glass-dark p-4 rounded-xl border border-white/10 shadow-sm">
                    <span className="text-secondary font-bold mr-1.5" aria-hidden="true">✓</span>
                    <strong className="text-xs font-heading text-white block mt-1">{item.title}</strong>
                    <p className="text-xs text-slate-300 font-body mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/projects">
                  <Button variant="accent" size="md">Browse Project Domains →</Button>
                </Link>
              </div>
            </div>

            {/* Right — 6 cols Cards Showcase */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {[
                { label: 'B.Tech Engineering', domain: 'Hardware/Software', emoji: '🎓', border: 'hover:border-cyan-400/50' },
                { label: 'MCA & Degree', domain: 'Full Stack & Cloud', emoji: '💻', border: 'hover:border-emerald-400/50' },
                { label: 'IEEE Implementations', domain: 'Research Papers', emoji: '📡', border: 'hover:border-purple-400/50' },
                { label: 'Live Industry Solutions', domain: 'Enterprise Tech', emoji: '🏭', border: 'hover:border-orange-400/50' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    'card-glass-dark rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center gap-3',
                    'shadow-lg hover:-translate-y-1 transition-all duration-300 text-white',
                    item.border
                  )}
                >
                  <span className="text-4xl drop-shadow-sm" aria-hidden="true">{item.emoji}</span>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-sm">{item.label}</h4>
                    <span className="text-xs text-slate-300 font-body">{item.domain}</span>
                  </div>
                </div>
              ))}
              <div className="col-span-2 card-glass-dark rounded-2xl border border-white/15 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg text-white">
                <div>
                  <h4 className="font-heading font-semibold text-sm text-cyan-300">Need Guidance on Your Project Topic?</h4>
                  <p className="text-xs text-slate-300 font-body">Our team assists with topic selection, feasibility, and synopsis preparation.</p>
                </div>
                <Link to="/contact">
                  <Button variant="outline-white" size="sm" className="shrink-0">
                    Inquire →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. TRAINING METHODOLOGY (NEW)
      ══════════════════════════════════════════════════ */}
      <section
        ref={methodRef as React.RefObject<HTMLElement>}
        className="bg-white section-padding"
        aria-labelledby="methodology-heading"
      >
        <div className="container-custom">
          <SectionHeader
            label="Training Methodology"
            title="How We Transform Students into Contributing Engineers"
            subtitle="Our structured five-stage learning pathway ensures learners transition seamlessly from conceptual syntax to production-grade engineering standards."
            id="methodology-heading"
          />

          <div className="mt-14 relative">
            {/* Desktop timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-8 z-0" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {METHODOLOGY_STEPS.map((m) => (
                <div
                  key={m.step}
                  className="animate-on-scroll bg-white rounded-2xl border border-gray-100 p-6 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary text-white font-heading font-bold text-sm flex items-center justify-center">
                      {m.step}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary font-body bg-secondary-light px-2.5 py-0.5 rounded-full">
                      {m.tag}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-base text-gray-900 mb-2 leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-xs text-muted font-body leading-relaxed mt-auto">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. PLACEMENT PREPARATION
      ══════════════════════════════════════════════════ */}
      <section
        ref={placementRef as React.RefObject<HTMLElement>}
        className="bg-section section-padding"
        aria-labelledby="placement-heading"
      >
        <div className="container-custom">
          <SectionHeader
            label="Placement Readiness"
            title="Career-Ready from Day One"
            subtitle="Technical capability is only half the battle. We prepare students for recruitment screening, technical assessments, and panel discussions."
            id="placement-heading"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLACEMENT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="animate-on-scroll bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-2xl">
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-muted font-body leading-relaxed mb-4">{item.desc}</p>
                  <ul className="space-y-1.5 border-t border-gray-100 pt-3">
                    {item.points.map((pt) => (
                      <li key={pt} className="text-xs text-gray-600 font-body flex items-center gap-2">
                        <span className="text-secondary font-bold text-xs">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact">
              <Button variant="outline" size="md">
                Schedule Placement Guidance Session →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. COLLEGE COLLABORATION (PRIORITY FOR HODs/TPOs)
      ══════════════════════════════════════════════════ */}
      <section
        ref={collabRef as React.RefObject<HTMLElement>}
        className="bg-gradient-to-br from-[#06182F] via-[#092B45] to-[#044744] text-white relative overflow-hidden section-padding"
        aria-labelledby="collab-heading"
      >
        {/* Technology Synapse & Node Backdrop */}
        <TechNeuralBackground variant="cyan" opacity="opacity-35" />

        {/* Ambient Teal / Cyan Radiant Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <SectionHeader
            label="Institutional Partnerships"
            title="Empowering Engineering &amp; Degree Campuses"
            subtitle="SUDHVI TECH collaborates with College Principals, Department HODs, and Training & Placement Officers (TPOs) to deliver customized on-campus programs, technical workshops, and project incubation."
            light
            id="collab-heading"
          />

          {/* Specific Tag for College Leadership */}
          <div className="flex justify-center mt-4 mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-cyan-200 border border-white/20 rounded-full text-xs sm:text-sm font-semibold font-body shadow-md">
              <span aria-hidden="true">🏛️</span>
              Dedicated Partner for Principals, HODs &amp; Placement Cells
            </span>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLAB_SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  'animate-on-scroll card-glass-dark rounded-2xl border border-white/15 p-7',
                  'shadow-xl hover:border-teal-400/50 hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300',
                  'flex flex-col gap-4 text-white',
                  index === 4 && 'lg:col-start-2'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-teal-900/50 border border-teal-500/30 rounded-xl flex items-center justify-center text-2xl text-teal-300 shadow-sm">
                    <span aria-hidden="true">{service.icon}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-300 font-body bg-teal-950/70 border border-teal-500/30 px-3 py-1 rounded-full">
                    {service.target}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-body leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider mb-2 font-heading">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-1">
                      {service.deliverables.map((d) => (
                        <li key={d} className="text-xs text-slate-200 font-body flex items-start gap-2">
                          <span className="text-secondary font-bold">✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Institutional CTA Box */}
          <div className="mt-14 card-glass-dark border border-white/25 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-body border border-white/20">
                Institutional Partnership Inquiry
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
                Bring SUDHVI TECH to Your Campus
              </h3>
              <p className="text-slate-200 font-body text-sm sm:text-base mb-8 leading-relaxed">
                We work closely with College HODs and TPOs to align bootcamps with semester schedules and department objectives. Request an introductory consultation with our academic partnership team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                    Schedule a Campus Meeting →
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
                    Request Department Syllabus
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-xs text-white/60 font-body">
                Official institutional inquiries receive responses within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. STUDENT & INSTITUTIONAL FEEDBACK
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate-50/80 bg-tech-blueprint section-padding relative overflow-hidden" aria-labelledby="testimonials-heading">
        {/* Subtle radial ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="Verified Experiences"
            title="What Students &amp; College Partners Say"
            subtitle="Authentic feedback examples from engineering candidates, MCA graduates, and academic coordinators who have experienced SUDHVI TECH's hands-on project mentoring and industry readiness programs."
            id="testimonials-heading"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="card-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-gray-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-400 text-sm tracking-tighter" aria-label={`${item.rating} out of 5 stars`}>
                      {'★'.repeat(item.rating)}
                    </div>
                    <span className="text-[10px] font-bold font-heading px-2.5 py-0.5 rounded-full bg-secondary-light/70 text-secondary-dark border border-secondary/20">
                      {item.verifiedLabel}
                    </span>
                  </div>

                  {/* Program Tag */}
                  <p className="text-[11px] font-bold font-heading text-primary uppercase tracking-wider mb-2">
                    {item.program}
                  </p>

                  {/* Quote */}
                  <p className="text-gray-700 text-xs sm:text-sm font-body leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm font-heading`}>
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 font-heading truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-600 font-body truncate">
                      {item.role}
                    </p>
                    <p className="text-[10px] text-gray-400 font-body truncate">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transparency & Customization Note */}
          <div className="mt-10 text-center">
            <p className="text-xs text-muted font-body inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-xs">
              <span className="text-secondary font-bold">✓</span>
              <span>Representative feedback reflecting project mentoring outcomes and campus workshops. Easily updated anytime in <code>src/data/testimonials.ts</code>.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. FINAL CALL TO ACTION BANNER
      ══════════════════════════════════════════════════ */}
      <CTABanner
        title="Ready to Take the Next Step Toward Your Career?"
        subtitle="Whether you are an aspiring student ready to master practical skills, or a college leader looking to elevate your department's placement readiness — we are here to help."
        primaryLabel="Enroll in a Program →"
        primaryTo="/enroll"
        secondaryLabel="Schedule a Consultation"
        secondaryTo="/contact"
      />
    </>
  );
}
