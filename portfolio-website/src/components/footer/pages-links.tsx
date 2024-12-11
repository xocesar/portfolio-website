import React from "react";
import Link from "next/link";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

function PagesLinks() {
  return (
    <div className="flex flex-col space-y-6 p-4">
      <h1 className="text-lg md:text-2xl font-bold">Site Navigation</h1>
      <ul className="flex flex-col gap-4">
        <li>
            <Link 
              className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-300 text-md" 
              href={"/"}
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
        </li>
        <li>
            <Link 
              className="flex items-center gap-3 hover:text-purple-600 transition-colors duration-300 text-md" 
              href={"/projects"}
            >
              <FaProjectDiagram className="text-lg" />
              <span>Projects</span>
            </Link>
        </li>
        <li>
            <Link 
              className="flex items-center gap-3 hover:text-green-600 transition-colors duration-300 text-md" 
              href={"/about"}
            >
              <FaUser className="text-lg" />
              <span>About me</span>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default PagesLinks;
