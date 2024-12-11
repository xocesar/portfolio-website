import React from "react";
import ProjectsHeader from "./(components)/Header/index";
import ProjectGrid from "../../components/projects/index";

export default function MyProjects() {
  return (
    <div className="flex flex-col min-h-screen bg-[#eedccd] text-[#3b580c]">
      <div className="pt-28">
        <ProjectsHeader />
      </div>
    </div>
  );
}
