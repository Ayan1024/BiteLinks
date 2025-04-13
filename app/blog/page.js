"use client";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Power of Link Shortening: Why It Matters",
      excerpt:
        "Learn how URL shorteners can transform your digital strategy, boost engagement, and improve tracking for your marketing campaigns.",
      date: "March 22, 2025",
    },
    {
      title: "Best Practices for Sharing Short Links",
      excerpt:
        "Avoid common pitfalls and ensure your short links remain trustworthy and click-worthy with these essential tips.",
      date: "April 5, 2025",
    },
    {
      title: "A Behind-the-Scenes Look at BiteLinks",
      excerpt:
        "Meet the team and discover the tech that powers one of the fastest-growing link management platforms on the web.",
      date: "April 10, 2025",
    },
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Typography variant="h2" className="text-center font-bold mb-4">
          Our Blog
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-gray-600 dark:text-gray-400 mb-10"
        >
          Explore our latest articles, updates, and insights into the world of digital links, branding, and web analytics.
        </Typography>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-gray-100 dark:bg-gray-800 dark:text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <CardBody>
                <Typography variant="h4" className="mb-2 font-semibold">
                  {post.title}
                </Typography>
                <Typography className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {post.date}
                </Typography>
                <Typography className="mb-4 text-gray-700 dark:text-gray-300">
                  {post.excerpt}
                </Typography>
                <Button
                  variant="outlined"
                  className="text-blue-500 border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
