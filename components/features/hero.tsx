"use client";

import { motion, easeInOut } from "motion/react";

import { ArrowDownIcon } from "lucide-react";

import Link from "next/link";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative w-screen h-screen max-w-full">
      <div className="relative size-full z-10 flex flex-col items-center justify-center">
        <motion.h1
          className="font-heading mt-8 text-6xl font-extrabold pb-2 bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)] bg-clip-text text-transparent"
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
          Ayobami Tunwase
        </motion.h1>
        <h2>Frontend Web Developer</h2>
        <p>
          I build websites with a focus on responsive design and accessibility.
        </p>
        <Button
          variant="outline"
          asChild
          className="group rounded-full animate-bounce absolute bottom-8 left-8 max-w-10.5 flex items-center justify-start transition-all duration-300 ease-in-out hover:max-w-40 hover:animate-none"
        >
          <Link href="#about" className="flex items-center overflow-hidden">
            <ArrowDownIcon />
            <span className="opacity-0 group-hover:opacity-100">
              Scroll down
            </span>
          </Link>
        </Button>
      </div>
      {/* <div className="absolute inset-0 bg-linear-to-b from-stone-200 via-stone-200/50 to-slate-200" /> */}

      <div className="absolute top-0 size-full flex flex-col bg-background">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="flex-1/2 bg-slate-200 dark:bg-zinc-800"
        />
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="flex-1/2 bg-stone-200 dark:bg-neutral-900"
        />
      </div>
    </section>
  );
};
