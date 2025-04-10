"use client";
import React, { useState, useEffect } from "react";
import CertCard from "./cert-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



interface Certification {
    company: string;
    description: string;
    certification: string;
    url?: string;
    date: string;
}

function CertificationGrid() {
  const [certification, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    const certificationData = [
      {
        company: "Udemy",
        description: "Next.js Dev to Deployment",
        certification: "Next.js 15 and react 18 course",
        url: "https://viy4y3c6s9.ufs.sh/f/idMii2sEyT639GFWIUkyDsVczP7I2LtvUi3yMKH1aXBOrF4A",
        date: "Febuary 2025",
      }
    ];
    
    setCertifications(certificationData);
  }, []);

  if (certification.length === 0) {
    return <div>
      <h1 className="text-2xl font-extrabold p-4 text-center items-center bg-black/10 rounded-3xl my-8">Loading projects...</h1>
          </div>;
  }



  return (
    <div className="flex flex-col items-center justify-center border-t-2 border-[#3b580c] pt-8 pb-16">
      <div className="flex flex-col items-center justify-center py-8 gap-2 p-2">
        <h1 className="text-4xl font-extrabold">Certifications</h1>
        <p className="text-lg text-gray-700 text-justify">
          These are the certifications that I have obtained up until now. 
        </p>
      </div>
      {/* This is for small displays because the carousel componnent is tricky on smaller displays */}
      <div className="flex flex-col gap-4 w-full px-4">
        {certification.map((certification, index) => (
          <CertCard
            key={index}
            {...certification}
          />
        ))}
      </div>

      {/* carousel view of the projects */}
      {/* <Carousel
        className="w-full lg:max-w-4xl md:max-w-2xl md:block hidden"
      >
        <CarouselContent>
          {certification.map((certification, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <CertCard
                  {...certification}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/45"/>
        <CarouselNext className="bg-white/45"/>
      </Carousel> */}
    </div>
  );
}

export default CertificationGrid;
