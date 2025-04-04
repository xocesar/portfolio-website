"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./project-card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string | null;
  githubUrl?: string;
  demoUrl: string;
}

function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectsData = [
      {
        title: "Personal Portfolio Website",
        description: "Designed and developed my personal portfolio website to showcase my projects and skills.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/projects/portfolio.png",
        githubUrl: "https://github.com/xocesar/portfolio-website",
        demoUrl: "https://cesarquesada.dev"
      },
      {
        title: "The Four Brothers Home Care Website", 
        description: "Designed and developed a website for a nursing home in Toa Baja, Puerto Rico.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/projects/4brothers.png",
        demoUrl: "https://4brothers.vercel.app/",
      },
    ];
    
    setProjects(projectsData);
  }, []);

  if (projects.length === 0) {
    return <div>No projects yet, I am working on it!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center border-t-2 border-[#3b580c] pt-8 pb-16">
      <div className="flex flex-col items-center justify-center py-8 gap-2 p-2">
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <p className="text-lg text-gray-700 text-justify">
          Here are some of the projects I have worked on. Feel free to check them out on GitHub or view the live demo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 py-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            isLastOdd={projects.length % 2 !== 0 && index === projects.length - 1}
          />
        ))}
      </div>
      {/* <button className="bg-black text-white px-4 py-2 rounded-md">View All Projects</button> */}
    </div>
    
  );
}

export default ProjectGrid;
