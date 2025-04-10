"use client"
import { motion } from "motion/react";
import React from "react";
import ProjectGrid from "@/components/projects";
import CertificationGrid from "@/components/certification";
import AboutMe from "@/components/about-me";
import Header from "@/components/page-header";
import { useRef } from "react";


export default function Home() {
  const scrollRef = useRef(null)
  return (
    <div className="bg-[#eedccd] text-[#3b580c]">
     

      {/* Fades it in when in view and slided from top*/}
      <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{type: "anticipate", duration: 1}}
      >
        <Header />
      </motion.div>
        {/* Makes it fade into view */}
        <motion.div className="flex flex-col items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
        >
          <AboutMe /> 
          <CertificationGrid /> 
          <ProjectGrid />
          

        </motion.div>
      
      
      
    </div>
  );
}
