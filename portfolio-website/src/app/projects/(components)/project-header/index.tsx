import React from "react";

function ProjectHeader() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold mb-4">My Projects</h1>
      <p className="text-xl">
        A collection of projects I&apos;ve built using various technologies and frameworks. Some may be in progress or not available to the public.
      </p>
    </div>
  );
}

export default ProjectHeader;
