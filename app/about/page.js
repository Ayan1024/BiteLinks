"use client";
import { Typography } from "@material-tailwind/react";

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Typography variant="h2" className="mb-6 text-center font-bold">
          About Us
        </Typography>
        <Typography className="text-lg leading-7 mb-4">
          Welcome to BiteLinks — your go-to platform for powerful, reliable, and beautifully simple URL shortening. Our mission is to help individuals and businesses easily share, track, and manage links across platforms.
        </Typography>
        <Typography className="text-lg leading-7 mb-4">
          Founded in 2024, BiteLinks was created with one goal in mind: to make sharing URLs effortless and insightful. Our platform provides not just short links but smart tools — including detailed analytics, customizable slugs, and seamless integrations.
        </Typography>
        <Typography className="text-lg leading-7 mb-4">
          Whether you are a digital marketer, content creator, or casual user, our intuitive dashboard and robust API allow you to manage your URLs with precision and ease.
        </Typography>
        <Typography className="text-lg leading-7 mb-4">
          At the heart of BiteLinks is a commitment to privacy, transparency, and innovation. We are constantly evolving to bring you new features and better performance.
        </Typography>
        <Typography className="text-lg leading-7">
          Thank you for trusting BiteLinks — lets keep the web connected, one link at a time.
        </Typography>
      </div>
    </section>
  );
}
