"use client"
import React from "react";
import { useState, useEffect } from "react";

interface Education {
  title: string;
  institution: string;
  duration: string;
  description: string;
  tags?: string[];
}

export default function EducationCard() {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    const educationData = [
      {
        title: "Computer Engineering",
        institution: "Universidad Politecnica de Puerto Rico",
        duration: "2018 - 2024",
        description: "I graduated from the University Politecnica de Puerto Rico with a Bachelor of Science in Computer Engineering.",
      },
    ];
    
    setEducation(educationData);
  }, []);

  return (
    <div className="flex flex-col pt-4 w-full bg-[#eedccd] text-[#3b580c]">
      <div className="flex flex-col items-start max-w-4xl mx-auto w-full px-4">
        <div className="flex flex-col w-full">
          <h1 className="font-extrabold text-3xl">Education</h1>
          <ul className="list-inside pt-4 space-y-4">
            {education.map((edu, index) => (
              <li key={index} className="p-6 bg-[#c6d6ab] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{edu.title}</h3>
                      <p className="text-gray-700">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-600">{edu.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{edu.description}</p>
                  
                  {edu.tags && (
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-sm bg-[#A3B18A] text-gray-700 font-semibold py-1 px-2 rounded-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
