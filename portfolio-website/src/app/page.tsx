"use client"
import React, { useState } from "react";
import ProjectGrid from "@/components/projects";
import AboutMe from "@/components/about-me";
import Header from "@/components/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div>
      {showAlert && (
        <div className="fixed top-12 md:right-4 right-0 z-50 max-w-lg">
          <Alert className="cursor-pointer bg-yellow-100 border-yellow-400 text-yellow-800 flex items-center justify-between" onClick={() => setShowAlert(false)}>
            <div className="flex items-center gap-2">
              
              <div className="max-w-md">
                <AlertTitle className="font-bold">Notice</AlertTitle>
                <AlertDescription>
                  This website is a work in progress. Some sections can change or be added to the website.
                </AlertDescription>
              </div>
            </div>
            <button 
              className="text-yellow-800 hover:text-yellow-600 font-bold text-xl"
              onClick={() => setShowAlert(false)}
            >
              ×
            </button>
          </Alert>
        </div>
      )}

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
