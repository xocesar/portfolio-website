"use client"
import React from "react";
import ProjectGrid from "@/components/projects";
import AboutMe from "@/components/about-me";

export default function Home() {
  return (
    <div>
      <div className="bg-[#eedccd] text-[#3b580c]">
        {/* The header goes here */}
        
      </div>
      
      <div className="flex flex-col items-center bg-[#eedccd] text-[#3b580c]">
        {/* The other sections go here */}
        <AboutMe />
        <ProjectGrid />
      </div>
    </div>
  );
}
