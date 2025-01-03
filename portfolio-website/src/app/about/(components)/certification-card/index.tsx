"use client"
import React from "react";
import { useState, useEffect } from "react";

interface Certification {
  title: string;
  organization: string;
  issueDate: string;
  description: string;
  credentialUrl?: string;
  tags: string[];
}

export default function CertificationCard() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    const certificationsData = [
      {
        title: "Next.js 15 & React - The Complete Guide",
        organization: "Udemy",
        issueDate: "2024",
        description: "Fundamental understanding of Next.js 15 & React.",
        credentialUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-453d789e-dd40-4b2e-a07b-8bb4b241ed15.pdf",
        tags: ["Next.js", "React", "JavaScript"]
      },
      // Add more certifications as needed
    ];
    
    setCertifications(certificationsData);
  }, []);

  return (
    <div className="flex flex-col pt-4 pb-10 w-full bg-[#eedccd] text-[#3b580c]">
      <div className="flex flex-col items-start max-w-4xl mx-auto w-full px-4">
        <div className="flex flex-col w-full">
          <h1 className="font-extrabold text-3xl">Certifications</h1>
          <ul className="list-inside pt-4 space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="p-6 bg-[#c6d6ab] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-gray-700">{cert.organization}</p>
                    </div>
                    <span className="text-sm text-gray-600">{cert.issueDate}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-sm bg-[#A3B18A] text-gray-700 font-semibold py-1 px-2 rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#3b580c] text-white rounded hover:bg-[#2a4009] transition-colors w-fit"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
