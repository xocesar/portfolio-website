"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./cards";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  githubUrl?: string;
  demoUrl: string;
}

function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Initialize projects after component mounts (client-side only)
    const projectsData = [
      {
        title: "Personal Portfolio Website",
        description: "Designed and developed my personal portfolio website to showcase my projects and skills.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc:"/projects/portfolio.png",
        githubUrl: "https://github.com/xocesar/portfolio-website",
        demoUrl: "https://cesarquesada.dev"
      },
      // {
      //   title: "The Four Brothers Home Care Website", 
      //   description: "Designed and developed a website for a nursing home in Toa Baja, Puerto Rico.",
      //   tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      //   imageSrc: "",
      //   demoUrl: "https://4brothers.vercel.app/",
      // },
    ];
    
    setProjects(projectsData);
  }, []);

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          isLastOdd={projects.length % 2 !== 0 && index === projects.length - 1}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
