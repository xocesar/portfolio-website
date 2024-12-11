import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

function SocialLinks() {
  return (
    <div className="flex flex-col space-y-6 p-4">
      <h1 className="text-lg md:text-2xl font-bold">Connect With Me</h1>
      <ul className="flex flex-col gap-4">
        <li>
            <Link 
              className="flex items-center gap-3  hover:text-blue-600 transition-colors duration-300 text-md" 
              href={"https://www.linkedin.com/in/cesaraquesada/"}
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </Link>
        </li>
        <li>
            <Link 
              className="flex items-center gap-3 hover:text-gray-900 transition-colors duration-300 text-md" 
              href={"https://github.com/xocesar"}
            >
              <FaGithubSquare className="text-lg" />
              <span>Github</span>
            </Link>
        </li>
        <li>
            <Link 
              className="flex items-center gap-3 hover:text-green-600 transition-colors duration-300 text-md" 
              href="mailto:cquesada1611@outlook.com"
            >
              <ImMail className="text-lg" />
              <span>Email Me</span>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks;
