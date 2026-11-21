import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project.types';
import { Button } from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={cn(
        'bg-white rounded-2xl border border-gray-200 shadow-card p-6 sm:p-7',
        'hover:shadow-hover hover:-translate-y-1 transition-all duration-300',
        'flex flex-col justify-between h-full relative'
      )}
    >
      <div>
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-primary-light text-primary rounded-full text-[11px] font-semibold font-body">
              {project.category}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-muted font-body font-medium">
              {project.domain}
            </span>
          </div>
          <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full font-body">
            {project.difficulty}
          </span>
        </div>

        {/* Sample Demonstration Project Notice */}
        {project.isSampleConcept && (
          <div className="mb-3 inline-block">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-body">
              Sample Demonstration Concept
            </span>
          </div>
        )}

        {/* Project Title */}
        <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 leading-snug">
          {project.title}
        </h3>

        {/* Short Overview */}
        <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Problem Being Solved */}
        <div className="p-3.5 bg-section rounded-xl border border-gray-200 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-gray-700 font-heading mb-1">
            Problem Solved:
          </p>
          <p className="text-xs text-muted font-body leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-900 font-heading mb-2">
            Key Architectural Features:
          </p>
          <ul id={`features-${project.id}`} className="space-y-1">
            {(expanded ? project.keyFeatures : project.keyFeatures.slice(0, 2)).map((feat, idx) => (
              <li key={idx} className="text-xs text-gray-600 font-body flex items-start gap-2">
                <span className="text-secondary font-bold text-xs mt-0.5">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          {project.keyFeatures.length > 2 && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={`features-${project.id}`}
              className="text-[11px] text-primary font-semibold font-body mt-1.5 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
            >
              {expanded ? 'Show less' : `+ ${project.keyFeatures.length - 2} more features`}
            </button>
          )}
        </div>

        {/* Skills Learned */}
        <div className="mb-4 pt-3 border-t border-gray-100">
          <p className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider font-heading mb-2">
            Skills Students Master:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.skillsLearned.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[11px] font-body"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Tech Stack & Action */}
      <div className="pt-4 border-t border-gray-100 mt-2 space-y-4">
        {/* Tech Stack Chips */}
        <div>
          <p className="text-[11px] font-semibold text-muted font-body mb-1.5">
            Technology Stack:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-[11px] font-medium font-body"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1">
          <Link
            to="/contact"
            state={{ subject: 'Project Development' }}
            aria-label={`Inquire about project topic: ${project.title}`}
            className="block"
          >
            <Button variant="outline" size="sm" className="w-full">
              Inquire About This Project Topic →
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
