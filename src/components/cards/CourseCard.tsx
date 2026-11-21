import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import type { Course } from '@/types/course.types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export function CourseCard({ course, compact = false }: CourseCardProps) {
  return (
    <article
      className={cn(
        'relative bg-white rounded-2xl border border-gray-100 shadow-card',
        'hover:shadow-hover hover:-translate-y-1 transition-all duration-300',
        'flex flex-col overflow-hidden group'
      )}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-primary w-full group-hover:bg-secondary transition-colors duration-300" />

      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between gap-2">
          <span className="text-4xl" role="img" aria-label={course.title}>
            {course.icon}
          </span>
          <div className="flex flex-col items-end gap-1.5">
            {course.badge && (
              <Badge variant="accent">{course.badge}</Badge>
            )}
            <span className="text-[11px] font-semibold text-gray-500 font-body bg-gray-100 px-2 py-0.5 rounded-full">
              {course.level}
            </span>
          </div>
        </div>

        {/* Title & description */}
        <div>
          <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {course.description}
          </p>
        </div>

        {/* Meta details */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted font-body">
          <span className="flex items-center gap-1 font-medium text-gray-700">
            <span aria-hidden="true">⏱️</span> {course.duration.split('(')[0].trim()}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span aria-hidden="true">📍</span> {course.mode.split('(')[0].trim()}
          </span>
        </div>

        {/* Key Tools & Technologies Chips */}
        {!compact && course.toolsAndTech && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {course.toolsAndTech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-primary-light text-primary rounded-md text-[11px] font-medium font-body"
              >
                {tech}
              </span>
            ))}
            {course.toolsAndTech.length > 4 && (
              <span className="px-1.5 py-0.5 text-gray-400 text-[11px] font-body">
                +{course.toolsAndTech.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Projects Preview */}
        {!compact && course.projects && course.projects.length > 0 && (
          <div className="text-xs text-gray-500 font-body bg-section p-2.5 rounded-xl border border-gray-100">
            <span className="font-semibold text-gray-700 block mb-0.5 font-heading">Key Project:</span>
            <span className="line-clamp-1 italic">"{course.projects[0]}"</span>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link
            to={`/courses/${course.slug}`}
            className="block"
            aria-label={`View detailed syllabus and curriculum for ${course.title}`}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
            >
              View Detailed Syllabus →
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
