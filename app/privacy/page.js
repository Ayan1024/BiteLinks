"use client";
import { Typography } from "@material-tailwind/react";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 space-y-10">
      <div className="text-center">
        <Typography variant="h2" className="font-bold mb-4">
          Privacy Policy
        </Typography>
        <Typography variant="paragraph">
          Your privacy is important to us. This policy explains what information we collect and how we use it.
        </Typography>
      </div>

      <div className="space-y-6">
        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Information We Collect
          </Typography>
          <Typography variant="paragraph">
            We may collect information such as your name, email address, and any data submitted through our forms. Additionally, we gather analytics and usage data to improve our services.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            How We Use Your Information
          </Typography>
          <Typography variant="paragraph">
            Your information is used solely for providing and enhancing our services. We do not sell or rent your personal data to third parties.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Cookies and Tracking
          </Typography>
          <Typography variant="paragraph">
            We use cookies and similar technologies to monitor site performance and understand user behavior. You can disable cookies in your browser settings if preferred.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Data Security
          </Typography>
          <Typography variant="paragraph">
            We implement security measures to protect your personal data. However, no method of transmission over the internet is 100% secure.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Your Rights
          </Typography>
          <Typography variant="paragraph">
            You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise any of these rights.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Updates to This Policy
          </Typography>
          <Typography variant="paragraph">
            We may update our privacy policy from time to time. Any changes will be posted on this page.
          </Typography>
        </div>

        <div>
          <Typography variant="paragraph">
            If you have any questions about this privacy policy, please contact us at: support@bitelinks.com
          </Typography>
        </div>
      </div>
    </section>
  );
}
