"use client";

import { useEffect, useState } from "react";

import { motion, useScroll, useTransform } from "motion/react";

export const ScrollIndicator = () => {
  const { scrollY } = useScroll();

  const [viewportHeight, setViewportHeight] = useState(0);
  const [pageEnd, setPageEnd] = useState(0);

  useEffect(() => {
    const getPageHeight = () => {
      const viewport = window.innerHeight;
      const totalScroll = document.documentElement.scrollHeight - viewport;

      setViewportHeight(viewport);
      setPageEnd(totalScroll);
    };

    window.addEventListener("load", getPageHeight);
    window.addEventListener("resize", getPageHeight);

    getPageHeight();

    return () => {
      window.removeEventListener("load", getPageHeight);
      window.removeEventListener("resize", getPageHeight);
    }
  }, []);

  // Animate only after scrolling 1 viewport height → until page bottom
  const progress = useTransform(scrollY, [viewportHeight, pageEnd], [0, 1], {
    clamp: true,
  });

  return (
    <motion.div
      id="scroll-indicator"
      className="bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)]"
      style={{
        scaleX: progress,
        position: "fixed",
        top: 68,
        left: 0,
        right: 0,
        height: 2,
        originX: 0,
        backgroundSize: "400% 400%",
        width: "100%",
        zIndex: 1000,
      }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
