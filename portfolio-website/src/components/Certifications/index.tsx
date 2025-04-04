
import React, { useState, useEffect } from "react";
import CertificationCard from "./certification-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



interface Certification {
    certification: string;
    description: string;
    company: string;
    url?: string;
    date: string;
}

function CertificationGrid() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    const certificationData = [
      {
        certification: "Next.js 15 and React Course",
        description: "This certification is for completing the Next.js 15 and React course on Udemy.",
        company: "Udemy",
        date: "Febuary 2025",
        url: "https://viy4y3c6s9.ufs.sh/f/idMii2sEyT639GFWIUkyDsVczP7I2LtvUi3yMKH1aXBOrF4A",
        }
    ];
    
    setCertifications(certificationData);
  }, []);

  if (certifications.length === 0) {
    return <div>
      <h1 className="text-2xl font-extrabold p-4 text-center items-center bg-black/10 rounded-3xl my-8">Loading Certifications...</h1>
          </div>;
  }



  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-16 max-w-4xl">
      <div className="flex flex-col justify-center py-8 gap-2 p-2">
        <h1 className="text-4xl font-extrabold ">Certifications</h1>
        <p className="text-lg text-gray-700 text-justify">
          Here are all the certifications I have completed. I am always striving to learn and improve my skills, 
          so I will be adding more certifications in the future.
        </p>
      </div>


      <div className="flex flex-col gap-4 w-full">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={index}
            {...certification}
          />
        ))}
      </div>

      {/* TODO: add carousel view of the projects when more than one is present

      <Carousel
        className="w-full lg:max-w-4xl md:max-w-2xl md:block hidden"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <ProjectCard
                  {...project}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/45"/>
        <CarouselNext className="bg-white/45"/>
      </Carousel>
      */}

    </div> 
  );
}

export default CertificationGrid;
