"use client";

import Link from "next/link";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { BarChart, Menu, X } from "lucide-react";
import { HamburgerMenu } from "./hamburger-menu";
import { header } from "motion/react-client";
import { ScrollIndicator } from "./scroll-indicator";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenuVisibility = () => {
    // ensures the header is at the top of viewport when the user opens/closes the menu
    if (headerRef.current) {
      headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen((prevState) => !prevState);
  };

  return (
    <header
      ref={headerRef}
      className="font-heading sticky top-0 border-b-2 w-full backdrop-blur-md bg-background/80 py-4 px-[5%] z-50 flex gap-4 justify-between items-center"
    >
      <Link
        href="#"
        className="text-3xl font-bold tracking-tight font-logo bg-[linear-gradient(45deg,#1e3a8a,#1e40af,#4338ca,#4f46e5,#6366f1)] dark:bg-[linear-gradient(45deg,#f5f3ff,#e0e7ff,#c7d2fe,#a5b4fc,#818cf8)] bg-clip-text text-transparent"
      >
        AT
      </Link>
      <div>
        <div className="hidden md:flex md:items-center md:gap-8">
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <Button asChild>
                  <a
                    href="/assets/files/Ayobami_Tunwase_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
          <ModeToggle />
        </div>

        <div className="flex gap-6 md:hidden">
          <Button asChild>
            <a href="#">Resume</a>
          </Button>
          <Button
            variant="ghost"
            onClick={toggleMenuVisibility}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      <HamburgerMenu isOpen={isOpen} closeMenu={closeMenu} />

      {!isOpen ? <ScrollIndicator /> : null}
    </header>
  );
};
