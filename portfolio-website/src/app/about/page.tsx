import React from "react";
import WorkEntry from "@/app/about/(components)/work-card";
import SkillsEntry from "@/app/about/(components)/skills";
import { FaReact } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="flex flex-col pt-20 w-full bg-[#eedccd] text-[#3b580c]">
      <div className="flex flex-col items-start max-w-4xl mx-auto w-full px-4">
        {/* Personal Information */}
        <div className="flex flex-col w-full">
        <h1 className="font-extrabold text-3xl">Education:</h1>
        <ul>
              <WorkEntry 
              title="Computer Engineering" 
              company="Universidad Politecnica de Puerto Rico" 
              duration="2018 - 2024" 
              description="I graduated from the University Politecnica de Puerto Rico with a Bachelor of Science in Computer Engineering." />
        </ul>

          <h1 className="font-extrabold text-3xl">Work Experience:</h1>
          <ul className="list-inside">
              {/* Work Card */}
              <WorkEntry 
              title="Fullstack Developer" 
              company="Enalca" 
              duration="2024 - Present" 
              description="I am currently working at Enalca as a Fullstack developer working on websites built on Next.js framework on the frontend and backend side" />

              
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start max-w-4xl mx-auto w-full px-4">
        {/* Education and Experience */}
        <h2 className="font-extrabold text-3xl">Skills:</h2>
        <div className="py-4 grid grid-cols-3 md:grid-cols-5 gap-4">
          
          <SkillsEntry 
          title="React" 
          description="Framework" 
          logo={FaReact}
          backgroundColor="#61dbfb"
          />

          <SkillsEntry 
          title="Next.js" 
          description="Framework" 
          logo={FaReact}
          backgroundColor="#000000"
          textColor="#ffffff"
          />

          <SkillsEntry 
          title="Prisma" 
          description="ORM" 
          logo={FaReact}
          backgroundColor="#ffffff"
          textColor="#000000"
          />

          <SkillsEntry 
          title="Typescript" 
          description="Language" 
          logo={FaReact}
          backgroundColor="#007acc"
          textColor="#ffffff"
          />

          <SkillsEntry 
          title="Tailwind" 
          description="Framework" 
          logo={FaReact}
          backgroundColor="#A5F3FC"
          textColor="#000000"
          />

          <SkillsEntry 
          title="C#" 
          description="Language" 
          logo={FaReact}
          backgroundColor="#9b4993"
          textColor="#ffffff"
          />
         
        </div>
         
        

      </div>

       {/*more sections can be added in the future if needed */}
      
    </div>
  );
}
