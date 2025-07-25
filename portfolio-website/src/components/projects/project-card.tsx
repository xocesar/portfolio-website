import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string | null;
  githubUrl?: string;
  demoUrl?: string;
}

function ProjectCard({ title, description, tags, imageSrc, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <div className={`bg-[#c6d6ab] rounded-lg shadow-md overflow-hidden duration-300`}>
      <div className="relative w-full">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={450}
            className="object-cover w-full"
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm bg-[#A3B18A] text-gray-700 font-semibold py-1 px-2 rounded-xl">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="flex gap-4">
          {githubUrl && (
            <Link 
              href={githubUrl}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              <FaGithub/>
              <span>GitHub</span>
            </Link>
          )}
          
          {demoUrl && (
            <Link
              href={demoUrl}
              className="flex items-center gap-2 px-4 py-2 bg-[#3b580c] text-white rounded hover:bg-[#2a4009] transition-colors"
            >
              <HiExternalLink/>
              <span>Website Link</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
