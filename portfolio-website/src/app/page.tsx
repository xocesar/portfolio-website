"use client"
import { motion } from "motion/react";
import React from "react";
import ProjectGrid from "@/components/projects";
import AboutMe from "@/components/about-me";
import Header from "@/components/page-header";
import { useRef } from "react";
export default function Home() {
  const scrollRef = useRef(null)
  return (
    <div className="bg-[#eedccd] text-[#3b580c]">
     

      {/* Fades it in when in view */}
      <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{type: "anticipate", duration: 1}}
      >
        <Header />
      </motion.div>

        <div className="flex flex-col items-center ">
          <AboutMe />
          <ProjectGrid />
        </div>
      
        
      
      
      
    </div>
  );
}
