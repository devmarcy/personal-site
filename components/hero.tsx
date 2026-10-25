"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const socialIconClass =
  "flex size-[42px] items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-bayside hover:text-bayside hover:shadow-[0_8px_20px_rgba(74,158,184,0.15)]";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-end px-6 pb-10 pt-20 md:px-10">
        <div className="grid w-full grid-cols-1 items-end gap-8 md:grid-cols-[1fr_1.35fr_1fr] md:gap-4 lg:gap-6">
          <motion.div
            className="flex flex-col justify-end md:pb-8"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            <h1 className="font-[family-name:var(--font-display)] text-6xl leading-[0.9] tracking-wide text-foreground sm:text-7xl lg:text-8xl">
              {t.hero.nameLine1}
              <br />
              {t.hero.nameLine2}
              <span className="text-bayside">{t.hero.nameAccent}</span>
            </h1>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-bayside to-bayside-bright" />

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/devmarcy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={socialIconClass}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/marcelmendes17/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialIconClass}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto flex h-[min(78vh,820px)] w-full items-end justify-center"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.25 }}
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-full bg-bayside/[0.025] blur-3xl" />
            <Image
              src="/marcyHomepagePic-v4.png"
              alt={`${t.hero.nameLine1} ${t.hero.nameLine2}`}
              width={1200}
              height={1500}
              priority
              className="relative z-10 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(74,158,184,0.25)] [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-end md:pb-8"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              {t.hero.titleLine1}
              <br />
              <span className="text-bayside">{t.hero.titleLine2}</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.hero.description}
            </p>
            <a
              href="#contact"
              className="group relative mt-8 w-fit text-base font-medium text-foreground"
            >
              {t.hero.cta}
              <span className="text-bayside">.</span>
              <motion.span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-bayside"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease, delay: 0.95 }}
              />
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#work"
          className="mt-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-bayside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {t.hero.scroll}
          <ArrowDown size={15} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
