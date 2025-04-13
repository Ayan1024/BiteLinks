"use client";
import {
  Input,
  Textarea,
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

export default function ContactUs() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <Typography variant="h2" className="font-bold mb-3">
            Contact Us
          </Typography>
          <Typography variant="paragraph">
            We’re happy to hear from you. Fill out the form and we’ll get back as soon as we can.
          </Typography>
        </div>

        {/* Contact Form Card */}
      
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Your full name"
                className="rounded-md shadow-sm p-3"
                labelProps={{ className: "hidden" }}
              />
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-md shadow-sm p-3"
                labelProps={{ className: "hidden" }}
              />
              <Input
                placeholder="Subject or topic"
                className="rounded-md shadow-sm p-3 md:col-span-2"
                labelProps={{ className: "hidden" }}
              />
              <Textarea
                placeholder="Write your message here..."
                rows={5}
                className="rounded-md shadow-sm p-3 md:col-span-2"
                labelProps={{ className: "hidden" }}
              />

              <Button
                type="submit"
                className="font-semibold px-6 py-3 rounded-lg md:col-span-2 mx-auto"
              >
                Send Message
              </Button>
            </form>
     

        {/* Email Note */}
        <Typography variant="small" className="text-center mt-10">
          You can also email us directly at{" "}
          <span className="font-medium">support@bitelinks.com</span>
        </Typography>
      </div>
    </section>
  );
}
