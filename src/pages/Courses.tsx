import { useState, useMemo } from 'react';
import { SubHero } from '@/components/ui/SubHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTABanner } from '@/components/ui/CTABanner';
import { CourseCard } from '@/components/cards/CourseCard';
import { courses, courseCategories } from '@/data/courses';
import type { CourseFilterCategory } from '@/types/course.types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/common/SEO';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState<CourseFilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const gridRef = useScrollAnimation();

  // Filter courses by category and search keyword
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === 'All' || course.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.toolsAndTech.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Courses & Programs | SUDHVI TECH — Practical Technology Training"
        description="Explore 8 industry-aligned programs: AI & Machine Learning, Generative AI, Agentic AI, Prompt Engineering, Python, Java Full Stack, Software Testing, and Data Analytics."
        keywords="AI Course, Generative AI, Agentic AI, Python Course, Java Full Stack Course, Software Testing Training, Data Analytics Program, B.Tech Coding Course"
      />

      <SubHero
        title="Industry Readiness Programs"
        subtitle="Practical, project-driven programs in AI & Machine Learning, Full Stack Development, Testing, and Data Analytics — engineered for immediate workplace competence."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Courses' }]}
      />

      {/* ── Key Assurance Banner ── */}
      <section className="bg-primary text-white py-4 border-b border-blue-800" aria-label="Program highlights">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4 text-xs font-body">
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold" aria-hidden="true">✓</span>
            <span>All programs feature genuine end-to-end project implementations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold" aria-hidden="true">✓</span>
            <span>Academic major project &amp; viva defense documentation support included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold" aria-hidden="true">✓</span>
            <span>Inquiry-based transparent pricing with no hidden commitments</span>
          </div>
        </div>
      </section>

      {/* ── Filter & Search Controls ── */}
      <section className="bg-white py-8 border-b border-gray-100" aria-label="Course catalog controls">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Pills */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-2.5"
            role="group"
            aria-label="Course category filters"
          >
            {courseCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={cn(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold font-body transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-section text-gray-700 hover:bg-primary-light hover:text-primary border border-gray-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 shrink-0">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Python, AI, React..."
                aria-label="Search courses by keyword"
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

      {/* ── Course Grid ── */}
      <section
        ref={gridRef as React.RefObject<HTMLElement>}
        className="bg-slate-50 relative overflow-hidden section-padding border-b border-gray-200/80"
        aria-labelledby="courses-grid-heading"
      >
        {/* Subtle Tech Blueprint Grid & Ambient Orb */}
        <div className="absolute inset-0 bg-tech-blueprint opacity-70 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-blue-200/30 via-cyan-100/30 to-teal-100/30 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            label={`Catalog: ${filteredCourses.length} of ${courses.length} Programs`}
            title={activeCategory === 'All' ? 'All 8 Technical Programs' : `${activeCategory} Track`}
            subtitle="Explore comprehensive syllabi, live project deliverables, and tool stacks. Click on any program to view full module details and prerequisites."
            id="courses-grid-heading"
          />

          {filteredCourses.length === 0 ? (
            <div className="mt-14 bg-section rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center max-w-lg mx-auto">
              <div className="text-4xl mb-3" aria-hidden="true">🔍</div>
              <h3 className="font-heading font-semibold text-lg text-gray-800 mb-1">No matching programs found</h3>
              <p className="text-xs text-muted font-body mb-6">
                Try searching with a broader keyword (e.g. "AI", "Python", "Testing") or reset the category filter.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="animate-on-scroll">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          )}

          {/* Institutional Note */}
          <div className="mt-16 bg-section rounded-2xl border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-primary font-body uppercase tracking-wider block mb-1">
                College Leadership &amp; Placement Cells
              </span>
              <h4 className="font-heading font-bold text-lg text-gray-900">
                Looking to deliver one of these programs on your college campus?
              </h4>
              <p className="text-xs text-muted font-body mt-1 max-w-2xl">
                We organize customized on-campus bootcamps and project mentorship programs aligned with semester timelines for B.Tech, Degree, and MCA departments.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button variant="primary" size="md">
                Inquire for Campus Training →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTABanner
        title="Unsure Which Program Aligns With Your Goals?"
        subtitle="Book a free consultation with our academic counselors. We will review your academic background, current skill level, and placement objectives to guide you toward the right program."
        primaryLabel="Schedule Free Counseling"
        primaryTo="/contact"
        secondaryLabel="Enroll in a Course"
        secondaryTo="/enroll"
      />
    </>
  );
}
