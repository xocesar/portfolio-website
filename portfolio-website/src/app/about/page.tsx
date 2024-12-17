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
        <div className="flex flex-wrap gap-2">
          
          <SkillsEntry 
          title="React" 
          description="Framework" 
          logo={FaReact}
          backgroundColor="#5be376"
          />
         
        </div>
         
        <h1 className="font-extrabold text-3xl">Education:</h1>
        <ul>
          <li>
            {/* Education Card */}
          </li>
        </ul>

      </div>

       {/*more sections can be added in the future if needed */}
      
    </div>
  );
}
