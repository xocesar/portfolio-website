"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "motion/react"

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  company: string;
  url?: string;
  startDate: string;
  endDate: string;
}

function WorkCard({ title, description, tags, company, url, startDate, endDate }: WorkCardProps) {
  return (
    <motion.div
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}
    className={`bg-[#c6d6ab] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full mt-4`}>
      <div className="p-6">
        <div className="flex flex-col items-start justify-center gap-2 mb-4">
          <h1 className="text-2xl font-extrabold">{company}</h1>
          <h3 className="text-xl font-bold text-gray-700">{title}</h3>
          <p className="text-md font-semibold text-gray-700">{startDate} - {endDate}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm bg-[#A3B18A] text-black font-semibold py-1 px-2 rounded-xl">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-black mb-4">{description}</p>
        
        <div className="flex gap-4">
          {url && (
            <Link 
              href={url}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              <span>Company website</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default WorkCard;
