import { useState, useMemo } from 'react';
import { SubHero } from '@/components/ui/SubHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTABanner } from '@/components/ui/CTABanner';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { projects, projectCategories, projectServices, methodologyStages } from '@/data/projects';
import type { ProjectCategory } from '@/types/project.types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/common/SEO';
import { TechNeuralBackground } from '@/components/ui/TechNeuralBackground';

type FilterTab = 'All' | ProjectCategory;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const heroRef        = useScrollAnimation();
  const gridRef        = useScrollAnimation();
  const methodologyRef = useScrollAnimation();
  const servicesRef    = useScrollAnimation();
  const collegesRef    = useScrollAnimation();

  // Filter projects by active tab and search keyword
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTab = activeTab === 'All' || project.category === activeTab;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.domain.toLowerCase().includes(query) ||
        project.techStack.some((t) => t.toLowerCase().includes(query)) ||
        project.description.toLowerCase().includes(query);
      return matchesTab && matchesQuery;
    });
  }, [activeTab, searchQuery]);

  return (
    <>
      <SEO
        title="Academic & Industry Projects | SUDHVI TECH"
        description="Comprehensive project development and mentoring for B.Tech, Degree/BCA, and MCA students. IEEE paper implementations, live industry projects, SRS documentation, and viva defense coaching."
        keywords="B.Tech Projects, MCA Projects, Degree Projects, IEEE Projects, AI Projects, Machine Learning Projects, Python Projects, Java Projects, Project Mentorship, Viva Preparation"
      />

      {/* ══════════════════════════════════════════════════
          1. PROJECTS PAGE HERO
      ══════════════════════════════════════════════════ */}
      <SubHero
        title="Project Development &amp; Mentorship"
        subtitle="Empowering B.Tech, Degree &amp; MCA students to architect, code, document, and confidently defend authentic academic and industry capstones."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      {/* ── Philosophy & Academic Integrity Banner ── */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="bg-primary text-white py-6 border-b border-blue-900"
        aria-label="Academic integrity statement"
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5" aria-hidden="true">🛡️</span>
              <div>
                <h2 className="font-heading font-semibold text-sm text-white">
                  Academic Integrity &amp; Mentorship Promise
                </h2>
                <p className="text-xs text-white/80 font-body leading-relaxed max-w-3xl mt-0.5">
                  SUDHVI TECH does <strong>not</strong> supply pre-packaged, copy-paste academic projects. We operate as a technical mentoring partner—guiding students line-by-line so they thoroughly understand their architecture, algorithms, and code to achieve high-distinction viva defenses.
                </p>
              </div>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button variant="outline-white" size="sm">
                Discuss Your Topic →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROJECT CATEGORIES & SEARCH CONTROLS
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-8 border-b border-gray-100" aria-label="Project category filters">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-2"
            role="tablist"
            aria-label="Project domain categories"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeTab === cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  'px-3.5 py-2 rounded-full text-xs font-semibold font-body transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  activeTab === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-section text-gray-700 hover:bg-primary-light hover:text-primary border border-gray-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 shrink-0">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ML, Spring, Django..."
                aria-label="Search projects by keyword"
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm font-body text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <span className="absolute left-3 top-2.5 text-gray-400 text-sm" aria-hidden="true">
                🔍
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2–8. PROJECT SHOWCASE (SAMPLE DEMONSTRATION CONCEPTS)
      ══════════════════════════════════════════════════ */}
      <section
        ref={gridRef as React.RefObject<HTMLElement>}
        className="bg-tech-grid-dark text-white relative overflow-hidden section-padding"
        aria-labelledby="projects-grid-heading"
      >
        {/* Connected Neural Node Background */}
        <TechNeuralBackground variant="dark" opacity="opacity-35" />

        {/* Ambient Cyan / Blue Radiant Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <SectionHeader
            label={`Demonstration Concepts: Showing ${filteredProjects.length} Projects`}
            title={activeTab === 'All' ? 'Illustrative Project Blueprints' : `${activeTab}`}
            subtitle="The projects below represent illustrative engineering blueprints and demonstration architectures across degree streams. Custom project topics tailored to your university syllabus are formulated upon inquiry."
            light
            id="projects-grid-heading"
          />

          {/* IEEE Research Clarification Disclaimer */}
          {(activeTab === 'All' || activeTab === 'IEEE Research') && (
            <div className="mt-8 card-glass-dark border border-cyan-500/30 rounded-xl p-4 text-xs text-cyan-200 font-body max-w-4xl mx-auto flex items-start gap-2.5 shadow-md">
              <span className="text-base shrink-0">ℹ️</span>
              <span>
                <strong>Academic Clarification on IEEE Projects:</strong> IEEE research projects listed represent independent, student-led technical implementations modeled after published algorithmic papers and research methodologies. This does not represent an endorsement, sponsorship, or official certification by the Institute of Electrical and Electronics Engineers (IEEE).
              </span>
            </div>
          )}

          {/* Demonstration Notice */}
          <div className="mt-4 text-center">
            <span className="text-[11px] text-slate-400 font-body italic">
              Notice: All project cards display sample architectural concepts and demonstration models. We do not publish past student personal submissions to uphold student academic privacy.
            </span>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="mt-12 bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center max-w-lg mx-auto">
              <div className="text-4xl mb-3" aria-hidden="true">🔍</div>
              <h3 className="font-heading font-semibold text-lg text-gray-800 mb-1">No matching project blueprints found</h3>
              <p className="text-xs text-muted font-body mb-6">
                Try searching for a different keyword or reset the category filter to view all project domains.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveTab('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="animate-on-scroll">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}

          {/* Custom Project Callout */}
          <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider font-body block mb-1">
                Custom Academic Topics
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                Have a Unique Department Project Topic or Guide Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-muted font-body mt-1 max-w-2xl leading-relaxed">
                Bring your college project guidelines or abstract draft. Our senior technical mentors will review the scope, verify technical feasibility, and assist you in structuring a defensible system architecture.
              </p>
            </div>
            <Link to="/contact" state={{ subject: 'Project Development' }} className="shrink-0">
              <Button variant="accent" size="lg" className="shadow-md">
                Discuss Custom Topic →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9 & 10. DOCUMENTATION & VIVA GUIDANCE SERVICES
      ══════════════════════════════════════════════════ */}
      <section
        ref={servicesRef as React.RefObject<HTMLElement>}
        className="bg-tech-blueprint relative overflow-hidden section-padding border-b border-gray-100"
        aria-labelledby="support-services-heading"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="Comprehensive Academic Packaging"
            title="Project Documentation &amp; Viva Defense Support"
            subtitle="Examiners evaluate academic projects on two critical dimensions: the engineering code and the student's ability to explain, document, and defend every design decision."
            id="support-services-heading"
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectServices.map((service) => (
              <div
                key={service.id}
                className="animate-on-scroll bg-section rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-primary-light text-primary rounded-2xl flex items-center justify-center text-3xl mb-6">
                    <span aria-hidden="true">{service.icon}</span>
                  </div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider font-body block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-body leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="border-t border-gray-200 pt-5">
                    <p className="text-xs font-bold text-gray-800 uppercase tracking-wider font-heading mb-3">
                      Included Deliverables &amp; Coaching:
                    </p>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((del, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-body">
                          <span className="text-secondary font-bold text-sm shrink-0">✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link to="/contact" state={{ subject: `Project Support: ${service.title}` }}>
                    <Button variant="outline" size="sm" className="w-full">
                      Inquire for Documentation / Viva Support →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. PROJECT DEVELOPMENT METHODOLOGY
      ══════════════════════════════════════════════════ */}
      <section
        ref={methodologyRef as React.RefObject<HTMLElement>}
        className="bg-slate-900 text-white relative overflow-hidden section-padding"
        aria-labelledby="project-methodology-heading"
      >
        {/* Connected Neural Node Background */}
        <TechNeuralBackground variant="cyan" opacity="opacity-25" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="Structured Workflow"
            title="Our 6-Stage Project Mentorship Methodology"
            subtitle="We follow a systematic engineering lifecycle designed to eliminate last-minute project panic and ensure students master every layer of their submission."
            light
            id="project-methodology-heading"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologyStages.map((stage) => (
              <div
                key={stage.step}
                className="animate-on-scroll card-glass-dark rounded-2xl border border-white/10 p-7 shadow-xl hover:border-cyan-400/50 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-500/30 text-cyan-300 font-heading font-bold text-sm flex items-center justify-center shadow-sm">
                      {stage.step}
                    </span>
                    <span className="text-[11px] font-semibold text-teal-300 bg-teal-950/70 border border-teal-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-body">
                      Stage {stage.step}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-white mb-2 leading-snug">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-body leading-relaxed mb-4">
                    {stage.summary}
                  </p>
                  <ul className="space-y-1.5 border-t border-white/10 pt-3">
                    {stage.activities.map((act, actIdx) => (
                      <li key={actIdx} className="text-xs text-slate-200 font-body flex items-start gap-2">
                        <span className="text-secondary font-bold text-xs shrink-0 mt-0.5">•</span>
                        <span>{act}</span>
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
          12. STUDENT & COLLEGE COLLABORATION SECTION
      ══════════════════════════════════════════════════ */}
      <section
        ref={collegesRef as React.RefObject<HTMLElement>}
        className="bg-white section-padding"
        aria-labelledby="collab-projects-heading"
      >
        <div className="container-custom">
          <SectionHeader
            label="Institutional Partnership"
            title="Departmental Project Mentoring for Colleges"
            subtitle="Assisting Department Heads, Project Coordinators, and Principals in elevating the quality, originality, and defense rigor of final-year capstone batches."
            id="collab-projects-heading"
          />

          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-semibold uppercase tracking-wider font-body">
                For College HODs &amp; Academic Project Committees
              </span>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Partner with SUDHVI TECH for Department Capstone Batches
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/85 font-body">
                <div className="flex items-start gap-2.5">
                  <span className="text-secondary font-bold text-base">✓</span>
                  <span>Structured milestone reviews aligned with your internal assessment review schedules</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-secondary font-bold text-base">✓</span>
                  <span>Mentorship across diverse stacks (AI/ML, Web, Cloud, IoT, Data) under one roof</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-secondary font-bold text-base">✓</span>
                  <span>Standardized IEEE / University format documentation for all student teams</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-secondary font-bold text-base">✓</span>
                  <span>Simulated external examiner viva panels conducted prior to final university examinations</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link to="/contact" state={{ subject: 'College Partnership' }}>
                  <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-md">
                    Schedule an Institutional Discussion →
                  </Button>
                </Link>
                <Link to="/contact" state={{ subject: 'Project Development' }}>
                  <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
                    Request Department Project Brochure
                  </Button>
                </Link>
              </div>

              <p className="text-[11px] text-white/60 font-body">
                We respect your university syllabus guidelines and work alongside department guides to ensure transparent student evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ── */}
      <CTABanner
        title="Ready to Build an Authentic, Defensible Project?"
        subtitle="Avoid last-minute project panic. Consult with our technical project guides to select your topic, architect your system, and begin implementation."
        primaryLabel="Inquire About Projects →"
        primaryTo="/contact"
        secondaryLabel="Explore Course Programs"
        secondaryTo="/courses"
      />
    </>
  );
}
