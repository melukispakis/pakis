import { ArrowBack, Loader, dataArticleMedika } from "@/components";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function ArticleMedika({ href }: any) {
  const data = dataArticleMedika[href];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loading) {
    return (
      <div className="bg-neutral-100 flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-red-600 flex min-h-screen items-center justify-center text-center text-xl font-semibold">
        Artikel tidak ditemukan.
      </div>
    );
  }

  return (
    <section className="text-neutral-800 px-4 py-6 sm:px-6 md:px-12 lg:px-24 xl:px-36">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <div className="mb-6">
          <ArrowBack />
        </div>

        {/* Title */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-neutral-900 mb-10 mt-4 text-center font-alatsi text-[22px] leading-[32px] tracking-tight sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[56px]">
            {data.title}
          </h1>
        </div>

        {/* Image */}
        <div
          className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-[24px] shadow-md"
          data-aos="fade-up"
        >
          <Image
            src={data.image}
            alt={data.title || "Article Image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 80vw,
                   100vw"
            priority
          />
        </div>

        {/* Location Badge */}
        <div className="mb-8 mt-4" data-aos="fade-up" data-aos-delay="600">
          <span className="bg-red-100 text-red-800 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs shadow-sm sm:text-sm md:text-base lg:text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c-4.418 0-8 1.79-8 4v3h16v-3c0-2.21-3.582-4-8-4z"
              />
            </svg>
            {data.location}
          </span>
        </div>

        {/* Article Text */}
        <article
          className="text-neutral-700 mb-32 text-justify font-jakarta text-[17px] leading-8 tracking-wide sm:text-[18px] lg:text-[20px]"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {data.text}
        </article>
      </div>
    </section>
  );
}
