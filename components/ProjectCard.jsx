"use client";

import Image from "next/image";
import { ExternalLink, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  features,
  images,
  liveUrl,
  repositoryUrl,
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = images?.length || 0;

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!images?.length) return;

    images.forEach((src) => {
      const image = new window.Image();
      image.src = src;
    });
  }, [images]);

  const projectRef = useRef(null);

  useEffect(() => {
    const element = projectRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentImage(0);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (totalImages <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((current) =>
        current === totalImages - 1 ? 0 : current + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [totalImages, isPaused]);

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? totalImages - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setCurrentImage((current) =>
      current === totalImages - 1 ? 0 : current + 1,
    );
  };

  return (
    <article
      ref={projectRef}
      className="overflow-hidden rounded-3xl border border-white/50 bg-white/45 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(91,60,130,0.14)]"
    >
      {/* Project Images */}
      <div
        className="relative aspect-video overflow-hidden bg-violet-100/50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {totalImages > 0 ? (
          <>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: 25, scale: 1.03 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImage]}
                alt={`${title} screenshot ${currentImage + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {totalImages > 1 && (
              <>
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous project image"
                  className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/70 text-violet-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1/2 hover:bg-white hover:shadow-xl sm:left-3 sm:h-10 sm:w-10"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next project image"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/70 text-violet-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1/2 hover:bg-white hover:shadow-xl sm:right-3 sm:h-10 sm:w-10"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/40 bg-black/30 px-3 py-2 backdrop-blur-md">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentImage === index
                          ? "w-5 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-medium text-violet-500">
            Project Screenshot
          </div>
        )}
      </div>

      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-600">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#241B35]">{title}</h3>

        <p className="mt-4 text-sm leading-7 text-[#5f566d]">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-violet-200/70 bg-violet-50/70 px-3 py-1.5 text-xs font-medium text-violet-700"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#241B35]">Key Features</h4>

          <ul className="mt-3 space-y-2">
            {features.slice(0, 5).map((feature) => (
              <li key={feature} className="text-sm leading-6 text-[#6b6278]">
                • {feature}
              </li>
            ))}
          </ul>
        </div>

        {(liveUrl || repositoryUrl) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-300/40"
              >
                Live Project
                <ExternalLink size={16} />
              </a>
            )}

            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white/60 px-4 py-2.5 text-sm font-semibold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                Repository
                <Code2 size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
