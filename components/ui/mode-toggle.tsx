"use client";

import { useState, useEffect } from "react";

import { MonitorIcon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      size="sm"
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
    >
      <ToggleGroupItem
        value="system"
        aria-label="Toggle system"
        onClick={() => setTheme("system")}
      >
        <MonitorIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle dark"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
