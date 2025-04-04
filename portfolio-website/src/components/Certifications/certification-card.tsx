
import React from "react";
import Image from "next/image";
import Link from "next/link";


interface CertificationCardProps {
  certification: string;
  description: string;
  company: string;
  url?: string;
  date: string;
}

function CertificationCard({ certification, description, company, url, date }: CertificationCardProps) {
  return (
    <div className={`bg-[#c6d6ab] rounded-lg overflow-hidden shadow-md duration-300 w-full mt-4`}>
      <div className="p-6">
        <div className="flex flex-col items-start justify-center gap-2 mb-4">
            <h1 className="text-2xl font-extrabold">{certification}</h1>
            <h3 className="text-xl font-bold text-gray-700">{company}</h3>
            <p className="text-md font-semibold text-gray-700">{date}</p>
        </div>

        <p className="text-black mb-4">{description}</p>
        
        <div className="flex gap-4">
          {url && (
            <Link 
              href={url}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              <span>Certification link</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
