import { SubHero } from '@/components/ui/SubHero';
import { SEO } from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | SUDHVI TECH"
        description="Privacy commitment and data protection practices for SUDHVI TECH students, partner colleges, and website visitors."
      />

      <SubHero
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding student, faculty, and institutional data with utmost integrity."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />

      <section className="bg-white section-padding" aria-labelledby="privacy-heading">
        <div className="container-custom max-w-4xl mx-auto space-y-8 font-body text-gray-700 leading-relaxed text-sm sm:text-base">
          <div className="bg-primary-light/40 border border-blue-200 rounded-2xl p-5 text-xs text-blue-900">
            <strong>Policy Status:</strong> Operational Privacy Framework. Formal statutory clauses are marked as [PLACEHOLDER] pending final legal counsel review prior to official launch.
          </div>

          <div>
            <h2 id="privacy-heading" className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              SUDHVI TECH collects only necessary information provided voluntarily by students, parents, and college representatives through our inquiry and enrollment forms:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted text-sm">
              <li>Contact details: Name, email address, phone number, and city.</li>
              <li>Academic background: Degree qualification, college/university name, and academic year.</li>
              <li>Learning preferences: Target technical program, preferred delivery mode, and scheduling preferences.</li>
              <li>Institutional details: Designation and institution name for college workshop/MoU inquiries.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">
              All submitted data is utilized strictly for academic advisory, curriculum consultation, and cohort scheduling:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted text-sm">
              <li>Direct telephone or email counseling regarding chosen courses and major projects.</li>
              <li>Coordination of campus workshop schedules with college placement and department coordinators.</li>
              <li>We <strong>do not sell, rent, or trade</strong> your personal information to third-party marketing entities.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              3. Data Security &amp; Retention
            </h2>
            <p className="text-muted text-sm">
              We employ industry-standard secure transfer protocols (HTTPS/TLS) for form transmissions. Academic inquiries are retained only as long as necessary to facilitate student counseling and course enrollment.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              4. Contact for Privacy Inquiries
            </h2>
            <p className="text-muted text-sm mb-4">
              For questions regarding your personal information, data removal requests, or institutional privacy agreements, please contact:
            </p>
            <p className="font-semibold text-gray-900 text-sm">
              Privacy Officer — SUDHVI TECH<br />
              Email: <a href="mailto:ksudheerbasha@gmail.com" className="text-primary hover:underline">ksudheerbasha@gmail.com</a><br />
              Phones: <a href="tel:+917093642973" className="hover:underline">+91 7093642973</a> / <a href="tel:+917981292208" className="hover:underline">+91 7981292208</a><br />
              Location: Hyderabad, Telangana, India
            </p>
            <div className="mt-6">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  Contact Privacy Desk →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
