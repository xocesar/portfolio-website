"use client"
import React from "react";
import { useState, useEffect } from "react";

interface Work {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export default function WorkCard() {
  const [work, setWork] = useState<Work[]>([]);

  useEffect(() => {
    const workData = [
      {
        title: "Fullstack Developer",
        company: "Enalca",
        duration: "2024 - Present",
        description: "I am currently working at Enalca as a Fullstack developer working on websites built on Next.js framework on the frontend and backend side",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
      },
    ];
    
    setWork(workData);
  }, []);

  return (
    <div className="flex flex-col pt-2 w-full bg-[#eedccd] text-[#3b580c]">
      <div className="flex flex-col items-start max-w-4xl mx-auto w-full px-4">
        <div className="flex flex-col w-full">
          <h1 className="font-extrabold text-3xl">Work Experience</h1>
          <ul className="list-inside pt-4 space-y-4">
            {work.map((job, index) => (
              <li key={index} className="p-6 bg-[#c6d6ab] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-700">{job.company}</p>
                    </div>
                    <span className="text-sm text-gray-600">{job.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-sm bg-[#A3B18A] text-gray-700 font-semibold py-1 px-2 rounded-xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
