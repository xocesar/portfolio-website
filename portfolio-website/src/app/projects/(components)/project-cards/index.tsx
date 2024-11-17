import React from "react";
import ProjectCard from "./cards";

function ProjectGrid() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
      imageSrc: "/projects/portfolio.png",
      githubUrl: "https://github.com/xocesar/portfolio-website",
      demoUrl: "https://cesarquesada.dev"
    },
    //todo: add when finished
    // {
    //   title: "The Four Brothers Home Care Website",
    //   description: "A website for a nursing home in Puerto Rico. Created with Next.js, TypeScript, and Tailwind CSS.",
    //   imageSrc: "/projects/project2.png",
    //   demoUrl: "https://demo-url.com"
    // },
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
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
