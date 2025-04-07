import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CertificationProps {
  title: string;
  description: string;
  imageSrc?: string | null;
  linkCertification?: string;
}

function CertificationCard({ title, description, imageSrc, linkCertification,  }: CertificationProps) {
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
       
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="flex gap-4">
          {linkCertification && (
            <Link 
              href={linkCertification}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              <span>See certification</span>
            </Link>
          )}
        
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
