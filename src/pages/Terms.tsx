import { SubHero } from '@/components/ui/SubHero';
import { SEO } from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use | SUDHVI TECH"
        description="Terms and conditions governing website usage, program enrollment, and academic project mentorship at SUDHVI TECH."
      />

      <SubHero
        title="Terms of Use"
        subtitle="Operational terms and principles governing academic training, project guidance, and institutional collaboration."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Terms of Use' }]}
      />

      <section className="bg-white section-padding" aria-labelledby="terms-heading">
        <div className="container-custom max-w-4xl mx-auto space-y-8 font-body text-gray-700 leading-relaxed text-sm sm:text-base">
          <div className="bg-primary-light/40 border border-blue-200 rounded-2xl p-5 text-xs text-blue-900">
            <strong>Terms Status:</strong> General Program Terms. Statutory legal terms are marked as [PLACEHOLDER] pending final legal counsel review prior to official launch.
          </div>

          <div>
            <h2 id="terms-heading" className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              1. Scope of Programs &amp; Services
            </h2>
            <p className="mb-2">
              SUDHVI TECH operates as an <strong>Industry Readiness &amp; Project Development Partner</strong>. We provide hands-on skill training, curriculum enhancement, and academic project mentorship to complement degree coursework.
            </p>
            <p className="text-muted text-sm">
              We do not confer degree certificates; all degree certifications are awarded by the student's respective affiliated college or university. SUDHVI TECH issues certificates of completion recognizing practical skills and project deliverables achieved during the program.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              2. Academic Honesty &amp; Project Integrity
            </h2>
            <p className="text-muted text-sm">
              Our academic project mentorship is structured to guide, mentor, and teach students to design, develop, understand, and defend their own software architectures. We do not support black-box outsourcing of academic submissions; every student must participate actively in coding, testing, and viva defense preparation.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              3. Transparent Fee &amp; Admissions Policy
            </h2>
            <p className="text-muted text-sm">
              All program fee discussions are conducted through direct academic counseling. There are no surprise fees, auto-renewals, or unauthorized financial commitments. No payments are requested through online web forms.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 mb-3">
              4. Inquiries &amp; Support
            </h2>
            <p className="text-muted text-sm mb-4">
              For any clarification regarding program terms or institutional Memorandums of Understanding (MoUs):
            </p>
            <p className="font-semibold text-gray-900 text-sm">
              Legal &amp; Academic Desk — SUDHVI TECH<br />
              Email: <a href="mailto:ksudheerbasha@gmail.com" className="text-primary hover:underline">ksudheerbasha@gmail.com</a><br />
              Phones: <a href="tel:+917093642973" className="hover:underline">+91 7093642973</a> / <a href="tel:+917981292208" className="hover:underline">+91 7981292208</a><br />
              Location: Hyderabad, Telangana, India
            </p>
            <div className="mt-6">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  Contact Support Desk →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
