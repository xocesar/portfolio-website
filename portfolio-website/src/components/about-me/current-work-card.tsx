import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: string | null;
  url?: string;
  startDate: string;
  endDate: string;
}

function WorkCard({ title, description, tags, icon, url, startDate, endDate }: WorkCardProps) {
  return (
    <div className={`bg-[#c6d6ab] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full mt-4`}>
      <div className="p-6">
        <div className="flex flex-col items-start justify-center gap-2 mb-4">
          <div className="relative">
            {icon && (
              <Image
                src={icon}
                alt={title}
                width={100}
                height={100}
                className="object-cover object-center justify-center rounded-lg"
              />
            )}
          </div>
          <h3 className="text-2xl font-bold text-center">{title}</h3>
          <p className="text-md font-semibold text-black">{startDate} - {endDate}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm bg-[#A3B18A] text-gray-700 font-semibold py-1 px-2 rounded-xl">
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
    </div>
  );
}

export default WorkCard;
