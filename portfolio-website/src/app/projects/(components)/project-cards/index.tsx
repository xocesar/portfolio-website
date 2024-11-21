import React from "react";
import ProjectCard from "./cards";
import { getScreenshot } from "@/utils/screenshot";

function ProjectGrid() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed my personal portfolio website to showcase my projects and skills.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      imageSrc: getScreenshot("https://cesarquesada.dev"),
      githubUrl: "https://github.com/xocesar/portfolio-website",
      demoUrl: "https://cesarquesada.dev"
    },
    {
      title: "The Four Brothers Home Care Website", 
      description: "Designed and developed a website for a nursing home in Toa Baja, Puerto Rico.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      imageSrc: getScreenshot("https://4brothers.vercel.app"),
      demoUrl: "https://4brothers.vercel.app/",
    },
    // TODO: Add more projects
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          imageSrc={project.imageSrc}
          githubUrl={project.githubUrl}
          demoUrl={project.demoUrl}
          isLastOdd={projects.length % 2 !== 0 && index === projects.length - 1}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;