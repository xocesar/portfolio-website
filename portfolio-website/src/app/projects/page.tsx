import React from "react";
import ProjectHeader from "@/app/projects/(components)/project-header/index";

export default function MyProjects() {
  return (
    <div className="flex flex-col min-h-screen bg-[#eedccd] text-[#3b580c]">
      <div className="pt-28">
        <ProjectHeader />
      </div>
    </div>
  );
}
