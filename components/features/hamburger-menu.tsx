"use client";

import Link from "next/link";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { motion, AnimatePresence, easeInOut } from "motion/react";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface HamburgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const HamburgerMenu = ({ isOpen, closeMenu }: HamburgerMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeInOut,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
  };

  // Prevent user from scrolling when hamburger menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 top-16 min-h-[calc(100vh-64px)] overflow-y-auto border-b border-slate-700 md:hidden"
        >
          <motion.nav className="w-full max-w-7xl space-y-6 mx-auto bg-stone-500/95 backdrop-blur-3xl shadow-2xl px-4 sm:px-6 lg:px-8 py-8">
            <motion.ul className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-2xl font-semibold text-white hover:text-blue-400 transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <Button asChild>
                  <a
                    href="/assets/files/Ayobami_Tunwase_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </motion.li>
            </motion.ul>

            <ModeToggle />
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
