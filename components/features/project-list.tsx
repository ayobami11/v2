"use client";

import { motion } from "motion/react";

import { ProjectItem } from "@/components/features/project-item";

import projects from "@/app/projects.json";

export const ProjectList = () => {
  return (
    <section id="projects" className="scroll-mt-20 min-h-screen">
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
        Projects
      </motion.h2>

      <ul className="grid gap-x-4 gap-y-6 auto-rows-fr sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectItem {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
