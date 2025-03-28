"use client"
import { motion } from "motion/react";
import React from "react";
import ProjectGrid from "@/components/projects";
import AboutMe from "@/components/about-me";
import Header from "@/components/page-header";

export default function Home() {

  return (
    <div className="bg-[#eedccd] text-[#3b580c]">
      

      
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}
      
      >
        <Header />

        <div className="flex flex-col items-center ">
          <AboutMe />
          <ProjectGrid />
        </div>
      </motion.div>
        
      
      
      
    </div>
  );
}
