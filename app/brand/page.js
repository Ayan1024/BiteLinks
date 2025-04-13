"use client";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export default function BrandCenterPage() {
  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Typography variant="h2" className="mb-6 text-center font-bold">
          BiteLinks Brand Center
        </Typography>
        <Typography className="text-lg mb-10 text-center text-gray-600 dark:text-gray-400">
          Welcome to our Brand Center — your source for BiteLinks logos, brand assets, guidelines, and media inquiries.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg dark:bg-slate-700 dark:text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2 font-semibold">
                🎨 Logo Guidelines
              </Typography>
              <Typography className="text-sm">
                Download official BiteLinks logos and learn how to use them properly. Our logo should always remain visible, unobstructed, and on-brand.
              </Typography>
              <ul className="list-disc ml-5 mt-2 text-sm text-blue-500">
                <li><a href="#" className="hover:underline">Download logo pack</a></li>
                <li><a href="#" className="hover:underline">View usage guide</a></li>
              </ul>
            </CardBody>
          </Card>

          <Card className="shadow-lg dark:bg-slate-700 dark:text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2 font-semibold">
                📘 Brand Guidelines
              </Typography>
              <Typography className="text-sm">
                Understand our voice, tone, and brand personality. This guide covers typography, color palette, imagery, and messaging.
              </Typography>
              <ul className="list-disc ml-5 mt-2 text-sm text-blue-500">
                <li><a href="#" className="hover:underline">Download brand book</a></li>
                <li><a href="#" className="hover:underline">Color palette & fonts</a></li>
              </ul>
            </CardBody>
          </Card>

          <Card className="shadow-lg dark:bg-slate-700 dark:text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2 font-semibold">
                📸 Media Assets
              </Typography>
              <Typography className="text-sm">
                Get high-res images, product screenshots, press kits, and executive headshots. Ideal for editorial or press features.
              </Typography>
              <ul className="list-disc ml-5 mt-2 text-sm text-blue-500">
                <li><a href="#" className="hover:underline">Press kit</a></li>
                <li><a href="#" className="hover:underline">Executive photos</a></li>
              </ul>
            </CardBody>
          </Card>

          <Card className="shadow-lg dark:bg-slate-700 dark:text-white">
            <CardBody>
              <Typography variant="h5" className="mb-2 font-semibold">
                📨 Media Inquiries
              </Typography>
              <Typography className="text-sm">
                For interviews, press features, or media collaboration, contact our PR team. We are happy to share our story.
              </Typography>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>Email: <span className="text-blue-500">press@bitelinks.io</span></li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <Typography className="mt-16 text-center text-sm text-gray-600 dark:text-gray-400">
          Please respect our branding and don’t use our assets in misleading or inappropriate ways.
        </Typography>
      </div>
    </section>
  );
}
