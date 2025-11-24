import { About } from "@/components/features/about";
import { Experience } from "@/components/features/experience";
import { ProjectList } from "@/components/features/project-list";
import { Contact } from "@/components/features/contact";

export const Main = () => {
  return (
    <main className="w-9/10 mx-auto mt-10 space-y-10">
      <About />
      <Experience />
      <ProjectList />
      <Contact />
    </main>
  );
};
