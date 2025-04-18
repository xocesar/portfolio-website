"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



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
        imageSrc: "https://viy4y3c6s9.ufs.sh/f/idMii2sEyT63PgQM0YUuBr0gXyntoi8qJkL2DblVKIefSOap",
        githubUrl: "https://github.com/xocesar/portfolio-website",
        demoUrl: "https://cesarquesada.dev"
      },
      {
        title: "The Four Brothers Home Care Website", 
        description: "Designed and developed a website for a nursing home in Toa Baja, Puerto Rico.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "https://viy4y3c6s9.ufs.sh/f/idMii2sEyT63tmfoWjKYPzHK5iARhbesocCVj4TLm1lF9WIE",
        demoUrl: "https://4brothers.vercel.app/",
      },
    ];
    
    setProjects(projectsData);
  }, []);



  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16">
      <div className="flex flex-col items-center justify-center py-8 gap-2 p-2">
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <p className="text-lg text-gray-700 text-justify">
          Here are some of the projects I have worked on. Feel free to check them out on GitHub or view the live demo.
        </p>
      </div>
      {/* This is for small displays because the carousel componnent is tricky on smaller displays */}
      <div className="flex flex-col gap-4 w-full px-4 md:hidden">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>

      {/* carousel view of the projects */}
      <Carousel
        className="w-full lg:max-w-4xl md:max-w-2xl md:block hidden"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <ProjectCard
                  {...project}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/45"/>
        <CarouselNext className="bg-white/45"/>
      </Carousel>
    </div>
  );
}

export default ProjectGrid;
