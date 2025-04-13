"use client";
import { Typography } from "@material-tailwind/react";

export default function TermsAndConditions() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 space-y-10">
      <div className="text-center">
        <Typography variant="h2" className="font-bold mb-4">
          Terms and Conditions
        </Typography>
        <Typography variant="paragraph">
          These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, you accept these terms in full.
        </Typography>
      </div>

      <div className="space-y-6">
        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            1. Acceptance of Terms
          </Typography>
          <Typography variant="paragraph">
            By accessing and using our services, you agree to be bound by these terms and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our services.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            2. Eligibility
          </Typography>
          <Typography variant="paragraph">
            You must be at least 13 years old to use our services. By using this website, you represent and warrant that you meet this age requirement.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            3. Account Responsibilities
          </Typography>
          <Typography variant="paragraph">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We are not liable for any loss or damage resulting from your failure to secure your account.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            4. Acceptable Use
          </Typography>
          <Typography variant="paragraph">
            You agree not to use the website in any way that may damage, disable, overburden, or impair the site, or interfere with anyone else use. Prohibited activities include, but are not limited to:
          </Typography>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Uploading malicious code or viruses</li>
            <li>Violating local, state, or international laws</li>
            <li>Collecting data without consent</li>
            <li>Impersonating another person or entity</li>
          </ul>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            5. Intellectual Property Rights
          </Typography>
          <Typography variant="paragraph">
            The content on this site, including text, graphics, logos, and software, is the property of the company and is protected by copyright and other laws. You may not reproduce or distribute any content without prior written permission.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            6. Termination of Service
          </Typography>
          <Typography variant="paragraph">
            We reserve the right to suspend or terminate your access to our services at any time, without prior notice, for conduct that we believe violates these terms or is harmful to other users.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            7. Third-Party Links
          </Typography>
          <Typography variant="paragraph">
            Our website may contain links to third-party websites. We do not control these sites and are not responsible for their content, privacy policies, or practices.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            8. Disclaimers
          </Typography>
          <Typography variant="paragraph">
            The services are provided on an “as is” and “as available” basis. We disclaim all warranties of any kind, either express or implied, including but not limited to fitness for a particular purpose and non-infringement.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            9. Limitation of Liability
          </Typography>
          <Typography variant="paragraph">
            In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, resulting from your use of the services.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            10. Governing Law
          </Typography>
          <Typography variant="paragraph">
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is headquartered, without regard to conflict of law principles.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            11. Changes to Terms
          </Typography>
          <Typography variant="paragraph">
            We may revise these terms at any time. By continuing to use the website after changes are made, you agree to be bound by the revised terms. It is your responsibility to review them periodically.
          </Typography>
        </div>

        <div>
          <Typography variant="paragraph">
            If you have any questions or concerns regarding these terms, please contact us at: support@bitelinks.com
          </Typography>
        </div>
      </div>
    </section>
  );
}
