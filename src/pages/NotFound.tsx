import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/common/SEO';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <SEO
        title="Page Not Found (404) | SUDHVI TECH"
        description="The requested page could not be found. Return to SUDHVI TECH home or explore our courses catalog."
      />
      <div className="text-center max-w-md">
        <div className="text-8xl font-heading font-extrabold text-primary-light select-none mb-4">
          404
        </div>
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-muted font-body mb-8">
          The page you're looking for has moved or doesn't exist.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" size="lg">← Back to Home</Button>
          </Link>
          <Link to="/courses">
            <Button variant="outline" size="lg">Explore Courses</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
