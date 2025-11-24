"use client";

import Image from "next/image";

import { easeInOut, motion, spring } from "motion/react";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const logos = [
  { src: "next.svg", alt: "Next.js icon", label: "Next.js" },
  { src: "react.svg", alt: "React.js icon", label: "React.js" },
  { src: "typescript.svg", alt: "TypeScript icon", label: "TypeScript" },
  { src: "javascript.svg", alt: "JavaScript icon", label: "JavaScript" },
  { src: "tailwind.svg", alt: "Tailwind CSS icon", label: "Tailwind CSS" },
  { src: "html5.svg", alt: "HTML5 icon", label: "HTML5" },
  { src: "css3.svg", alt: "CSS3 icon", label: "CSS3" },
  { src: "node.svg", alt: "Node.js icon", label: "Node.js" },
  { src: "mongodb.svg", alt: "MongoDB icon", label: "MongoDB" },
  { src: "git.svg", alt: "Git icon", label: "Git" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: spring, stiffness: 100, damping: 12 },
  },
  hover: {
    scale: 1.15,
    y: -5,
    rotate: 2,
    transition: { type: spring, stiffness: 250, damping: 20 },
  },
};

export const About = () => {
  return (
    <section id="about" className="scroll-mt-20 min-h-screen">
      <motion.h2
        className="font-heading mb-6 tracking-tight pb-2 text-3xl font-semibold bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)] bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: easeInOut,
        }}
        style={{ backgroundSize: "200% 200%" }}
      >
        About
      </motion.h2>

      <p className="leading-7 mb-6">
        {"I'm"} a frontend developer passionate about crafting intuitive,
        accessible, and visually refined user interfaces that blend thoughtful
        design with robust engineering. My focus is on creating web experiences
        that are not only aesthetically pleasing but also performant,
        responsive, and user-friendly.
      </p>
      <p className="leading-7">
        I enjoy exploring modern frontend technologies, experimenting with
        design patterns, and building interfaces that feel seamless and
        engaging. My approach is guided by clarity, precision, and attention to
        detail—ensuring every interaction is smooth and every layout is
        intentional.
      </p>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-8 gap-y-16 items-center mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {logos.map((logo, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <motion.div
                variants={logoVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4 + i * 0.2,
                  repeat: Infinity,
                  ease: easeInOut,
                }}
                className="mx-auto"
              >
                <Image
                  src={`/assets/icons/${logo.src}`}
                  alt={logo.alt}
                  width="60"
                  height="60"
                  className={`w-12 h-12 grayscale transition duration-300 ease-in-out hover:-rotate-6 hover:scale-105 hover:grayscale-0 ${cn(
                    logo.src === "next.svg" && "dark:invert"
                  )}`}
                />
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="pb-0.5">{logo.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </section>
  );
};
