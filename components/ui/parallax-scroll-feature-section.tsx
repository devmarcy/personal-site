"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";
import type { ProjectLabel } from "@/lib/i18n/labels";

const ProjectRow = ({
  project,
  index,
}: {
  project: ProjectLabel;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const galleryOpacity = useTransform(scrollYProgress, [0.92, 1], [0, 1]);
  const hasGallery = Boolean(project.gallery?.length);

  return (
    <div
      ref={ref}
      className="flex min-h-screen flex-col justify-center gap-10 px-6 pt-20 md:px-10"
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16 lg:gap-24",
          project.reverse && "md:flex-row-reverse",
        )}
      >
        <motion.div style={{ y: translateY }} className="max-w-md">
          <p className="mb-3 text-sm tracking-widest text-bayside">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-foreground md:text-5xl lg:text-6xl">
            {project.title}
          </h3>
          <motion.p
            style={{ y: translateY }}
            className="mt-6 text-base leading-relaxed text-muted-foreground"
          >
            {project.description}
          </motion.p>
        </motion.div>

        <motion.div
          style={{ opacity, clipPath }}
          className="relative w-full max-w-xl overflow-hidden rounded-sm"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </div>
        </motion.div>
      </div>

      {hasGallery && project.gallery ? (
        <motion.div
          style={{ opacity: galleryOpacity }}
          className="grid w-full grid-cols-3 gap-3 md:gap-4"
        >
          {project.gallery.map((src, galleryIndex) => (
            <div
              key={src}
              className="relative aspect-video overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt={`${project.title} ${galleryIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
            </div>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};

export const ParallaxScrollFeatureSection = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative w-full">
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 pt-24">
        <h2 className="font-[family-name:var(--font-display)] text-center text-5xl tracking-wide text-foreground md:text-6xl">
          {t.work.heading}
        </h2>
        <p className="mt-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          {t.work.scrollHint} <ArrowDown size={15} className="animate-bounce" />
        </p>
      </div>

      <div className="flex flex-col">
        {t.work.projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
