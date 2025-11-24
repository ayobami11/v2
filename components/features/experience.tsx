"use client";

import { motion, easeInOut } from "motion/react";

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 min-h-screen">
      <motion.h2
        className="font-heading mb-6 tracking-tight pb-2 text-3xl font-semibold  bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)] bg-clip-text text-transparent"
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
        Experience
      </motion.h2>
      <div className="space-y-8">
        <section>
          <header className="mb-4">
            <motion.h3
              className="font-heading mb-2 text-2xl font-semibold tracking-tight bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)] bg-clip-text text-transparent"
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
              Cyberdata Foundation
            </motion.h3>
            <span className="text-muted-foreground">
              <time dateTime="2025-11">November 2025</time> — Present
            </span>
          </header>
          <p>
            At the CyberData Foundation, my responsibility is to develop and
            maintain responsive web interfaces using Next.js, TypeScript, and
            Tailwind CSS to deliver a smooth and accessible user experience. I
            integrate the {"organization's"}
            website with a Node.js and Firebase backend, enabling real-time data
            synchronization and secure user authentication. I also strengthen
            the frontend architecture by implementing Zod for reliable input
            validation and Shadcn UI for lightweight, maintainable components.
          </p>
        </section>
        <section>
          <header className="mb-4">
            <motion.h3
              className="font-heading mb-2 text-2xl font-semibold tracking-tight bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)] bg-clip-text text-transparent"
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
              MTN Nigeria
            </motion.h3>
            <span className="text-muted-foreground">
              <time dateTime="2025-04">April 2025</time> —{" "}
              <time dateTime="2025-04">October 2025</time>
            </span>
          </header>
          <p className="leading-7">
            During my time at MTN Nigeria, I led a team of frontend developers
            in building a scalable and responsive user interface using Next.js,
            Tailwind CSS, and TanStack Query, ensuring efficient data handling
            and smooth user interactions. I worked closely with a
            cross-functional software engineering team consisting of designers,
            developers and security engineers to design, develop, and deploy an
            intern onboarding platform that received executive approval from the
            acting CIO. In addition to development work, I prepared technical
            documentation and mentored team members, helping the team maintain
            consistent code quality and improve overall development efficiency.
          </p>
        </section>
      </div>
    </section>
  );
};
