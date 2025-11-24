"use client";

import Image from "next/image";

import { easeInOut, motion, spring } from "motion/react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

const socialLinks = [
  {
    src: "github.svg",
    label: "Github",
    link: "https://github.com/ayobami11",
  },
  {
    src: "twitter-x.svg",
    label: "Twitter (X)",
    link: "https://x.com/TunwaseAyobami",
  },
  {
    src: "linkedin.svg",
    label: "LinkedIn",
    link: "https://linkedin.com/in/ayobami-tunwase",
  },
  {
    src: "mail.svg",
    label: "Email",
    link: "mailto:ayobami.tunwase@gmail.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
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

export const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 min-h-screen">
      <motion.h2
        className="font-heading mb-6 tracking-tight pb-2 text-3xl font-semibold bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)] bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundSize: "200% 200%" }}
      >
        Contact
      </motion.h2>

      <div className="mb-20">
        <p className="leading-7 text-xl">
          I'm always happy to hear from you — whether you have a project idea,
          want to collaborate, or just want to say hi.
        </p>

        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-8 gap-y-16 items-center mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((item, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <motion.a
                  href={item.link}
                  target="_blank"
                  variants={itemVariants}
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
                    src={`/assets/icons/${item.src}`}
                    alt={`${item.label} icon`}
                    width="60"
                    height="60"
                    className={
                      "size-12 transition duration-300 ease-in-out dark:invert hover:-rotate-6 hover:scale-105"
                    }
                  />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="pb-0.5">{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </div>

      <div>
        <p className="leading-7 text-xl mb-4">
          Feel free to drop me a message, and I'll get back to you as soon as I
          can. Let's get in touch:
        </p>

        <motion.div className="group relative transition duration-500 ease-in-out w-fit">
          <motion.a
            href="mailto:ayobami.tunwase@gmail.com"
            whileHover={{ y: -2 }}
            className="relative inline-block text-3xl"
          >
            ayobami.tunwase@gmail.com
            <span className="absolute left-0 bottom-0 h-0.5 w-0 transition-all bg-primary duration-500 ease-in-out group-hover:w-full"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
