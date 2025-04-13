"use client";
import { Typography } from "@material-tailwind/react";

export default function Licensing() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 space-y-10">
      <div className="text-center">
        <Typography variant="h2" className="font-bold mb-4">
          Licensing Information
        </Typography>
        <Typography variant="paragraph">
          Learn about the terms of use and licensing for the assets, content, and services we provide.
        </Typography>
      </div>

      <div className="space-y-6">
        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Content Ownership
          </Typography>
          <Typography variant="paragraph">
            All text, images, code, and media used on this site are either owned by us or licensed for use. Unauthorized copying or distribution is not permitted.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            User Submissions
          </Typography>
          <Typography variant="paragraph">
            By submitting content to our platform, you grant us a non-exclusive, worldwide license to use, modify, and distribute your content as necessary to operate our services.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Third-Party Assets
          </Typography>
          <Typography variant="paragraph">
            Some icons, images, and libraries used in this project are licensed from third-party providers. It is your responsibility to review and comply with their terms of use.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Open Source Components
          </Typography>
          <Typography variant="paragraph">
            Our application may incorporate open source software components. Each is used under its respective license, which may impose obligations on use or distribution.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold mb-2">
            Prohibited Use
          </Typography>
          <Typography variant="paragraph">
            You may not use any of our licensed content or code in a way that is misleading, illegal, or violates any local regulations.
          </Typography>
        </div>

        <div>
          <Typography variant="paragraph">
            For questions about licensing, please contact us at: legal@bitelinks.com
          </Typography>
        </div>
      </div>
    </section>
  );
}
