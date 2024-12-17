"use client"
import React, { useState } from "react";
import ProjectGrid from "@/components/projects";
import AboutMe from "@/components/about-me";
import Header from "@/components/page-header";

export default function Home() {

  return (
    <div>
      

      <div className="bg-[#eedccd] text-[#3b580c]">
        <Header />
      </div>
      
      <div className="flex flex-col items-center bg-[#eedccd] text-[#3b580c]">
        <AboutMe />
        <ProjectGrid />
      </div>
    </div>
  );
}
