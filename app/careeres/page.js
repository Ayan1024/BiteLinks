"use client";
import { Typography, Button } from "@material-tailwind/react";

export default function CareersPage() {
  return (
    <section className="min-h-screen px-6 py-16 ">
      <div className="max-w-5xl mx-auto">
        <Typography variant="h2" className="mb-6 text-center font-bold">
          Careers at BiteLinks
        </Typography>
        <Typography className="text-lg leading-7 mb-4 text-center">
          Join a fast-growing startup that's reshaping how the world shares information online. At BiteLinks, we’re not just building tools — we’re building the future of digital connectivity.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className=" p-6 rounded-xl shadow-lg">
            <Typography variant="h5" className="mb-2 font-semibold">
              💻 Frontend Developer
            </Typography>
            <Typography className="mb-4">
              Build beautiful, responsive interfaces that scale. You’ll collaborate with designers and backend engineers to bring life to new features.
            </Typography>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>React, TailwindCSS experience required</li>
              <li>2+ years in frontend development</li>
              <li>Passion for UI/UX</li>
            </ul>
            <Button color="blue" size="sm">Apply Now</Button>
          </div>

          <div className=" p-6 rounded-xl shadow-lg">
            <Typography variant="h5" className="mb-2 font-semibold">
              🧠 Product Manager
            </Typography>
            <Typography className="mb-4">
              Drive strategy and vision. Work cross-functionally with engineering, marketing, and design to create user-centric solutions.
            </Typography>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>3+ years experience in product leadership</li>
              <li>Strong analytical & communication skills</li>
              <li>Startup experience is a plus</li>
            </ul>
            <Button color="blue" size="sm">Apply Now</Button>
          </div>

          <div className=" p-6 rounded-xl shadow-lg">
            <Typography variant="h5" className="mb-2 font-semibold">
              🛠 Backend Engineer
            </Typography>
            <Typography className="mb-4">
              Architect reliable and scalable systems. You’ll work on authentication, link analytics, and API services.
            </Typography>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>Node.js, MongoDB, Next.js experience preferred</li>
              <li>Experience with RESTful APIs</li>
              <li>Security best practices knowledge</li>
            </ul>
            <Button color="blue" size="sm">Apply Now</Button>
          </div>

          <div className=" p-6 rounded-xl shadow-lg">
            <Typography variant="h5" className="mb-2 font-semibold">
              📣 Digital Marketer
            </Typography>
            <Typography className="mb-4">
              Help us grow our reach. Plan and execute campaigns that engage and convert. SEO, SEM, social — we want it all.
            </Typography>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>2+ years in performance marketing</li>
              <li>Data-driven & creative thinker</li>
              <li>Experience with analytics platforms</li>
            </ul>
            <Button color="blue" size="sm">Apply Now</Button>
          </div>
        </div>

        <Typography className="text-center mt-12">
          Don’t see a role that fits?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Email us
          </span>{" "}
          and let’s talk.
        </Typography>
      </div>
    </section>
  );
}
