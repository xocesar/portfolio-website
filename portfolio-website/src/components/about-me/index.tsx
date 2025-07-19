import React from "react";
import Link from "next/link";
import WorkCard from "@/components/about-me/work-card";
import Technologies from "@/components/technologies";

export default function AboutMe() {
  return (
    <div id="about-me" className="flex flex-col items-center justify-center border-t-2 border-[#3b580c] py-8 max-w-4xl">
      <div className="flex flex-col items-center justify-center py-8 gap-2 p-2">
        <h1 className="text-4xl font-extrabold">About Me</h1>
        <p className="text-lg text-gray-700 text-justify">
          Fullstack developer with a focus on frontend development. Currently residing in Bayamon, Puerto Rico. This is brief overview of my skills and my current work as a web developer.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center py-8 gap-2 p-2">
        <h1 className="text-4xl font-extrabold">Technologies used</h1>
        <Technologies/>
        <h1 className="text-4xl font-extrabold">Experience</h1>
        <WorkCard
         title="Fullstack Developer" 
         description="I am currently working at Enalca as a Fullstack developer working on websites built on Next.js framework on the frontend and backend side" 
         tags={["Next.js", "React", ".NET", "Prisma"]} 
         company="Enalca LLC." 
         url="https://www.enalca.com"
         startDate="Oct 2024"
         endDate="May 2025"
          />

        <WorkCard
         title="I.T. Helpdesk" 
         description="I am currently working at Intelligent Solutions as an I.T. Helpdesk technician in HealthProMed in Santurce, Puerto Rico. I am responsible for providing technical support to the employees of the company and ensuring that all systems are running smoothly." 
         tags={["Windows", "Troubleshooting", "Customer Service"]} 
         company="Intelligent Solutions" 
         url="https://intelligentsolutionspr.com/"
         startDate="June 2025"
         endDate="Present"
          />
      </div>
      
    </div>
    )
}