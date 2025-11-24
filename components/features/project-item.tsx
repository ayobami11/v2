"use client";

import Image from "next/image";

import { motion } from "motion/react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ExternalLinkIcon } from "lucide-react";

export interface ProjectItemProps {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  websiteLink: string;
  tools: string[];
}

export const ProjectItem = ({
  title,
  description,
  githubLink,
  websiteLink,
  tools,
}: ProjectItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative h-full bg-white/30 flex flex-col transition duration-500 ease-in-out hover:-translate-y-2 dark:bg-muted/30"
    >
      <span className="absolute left-0 top-0 h-0.5 w-0 transition-all bg-primary duration-500 ease-in-out group-hover:w-full"></span>
      <Card className="h-full flex flex-col rounded-none border-0 bg-transparent">
        <CardHeader className="flex justify-between items-center gap-4">
          <CardTitle>
            <h3 className="font-heading text-xl font-semibold tracking-tight">
              {title}
            </h3>
          </CardTitle>
          <CardAction>
            <Button variant="ghost" size="icon" asChild>
              <a href={githubLink} target="_blank">
                <Image
                  src="/assets/icons/github.svg"
                  alt="Github icon"
                  width={20}
                  height={20}
                  className="dark:invert size-5"
                />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={websiteLink} target="_blank">
                <ExternalLinkIcon className="size-5" />
              </a>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="leading-7">{description}</p>
        </CardContent>
        <CardFooter className="flex-1">
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <li key={i} className="whitespace-nowrap">
                <Badge variant="secondary">{tool}</Badge>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
