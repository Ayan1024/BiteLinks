import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col-reverse md:grid md:grid-cols-2 h-auto md:h-[80vh] p-6 gap-6">
        <div className="flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left">
          <h1 className=" text-3xl md:text-4xl font-bold">
            The Best URL Shortener
          </h1>
          <p className=" text-base md:text-lg max-w-xl">
            Simplify your links and supercharge your productivity with <strong>BiteLinks</strong> — 
            the ultimate URL shortener built for speed, reliability, and a seamless experience. 
            Whether you are sharing content, analyzing traffic, or managing campaigns, 
            BiteLinks makes it effortless with real-time analytics, customizable slugs, 
            and total control over your links.
          </p>
          <Link href="/shorten">
            <button className="bg-blue-400 text-black  font-semibold px-6 py-2 rounded-md shadow-md transition duration-300">
              Try Now
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="vector image"
            src="/vector.jpg"
            width={550}
            height={500}
            className="rounded-2xl object-contain max-w-full h-auto"
            priority
          />
        </div>
      </section>


    </main>
  );
}
