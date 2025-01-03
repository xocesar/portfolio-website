import React from "react";
import WorkCard from "@/app/about/(components)/work-card/index";
import EducationCard from "@/app/about/(components)/education-card/index";
import CertificationCard from "@/app/about/(components)/certification-card/index";
import Technologies from "@/components/technologies";
import Header from "@/app/about/(components)/header/index";

export default function AboutMe() {
  return (
    <div className="flex flex-col pt-20 w-full bg-[#eedccd] text-[#3b580c]">
      <Header/>
      <WorkCard/>
      <EducationCard/>
      
      
      <div className="flex flex-col items-start max-w-4xl mx-auto w-full p-4">
      <h2 className="font-extrabold text-3xl">Technologies used</h2>
     <Technologies/>
    </div>

    <CertificationCard/>
    </div>
  );
}
