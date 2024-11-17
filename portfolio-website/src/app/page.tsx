import React from "react";
import PageHeader from "@/components/Header/index";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#eedccd] text-[#3b580c]">
        {/* here goes the header */}
        
          <PageHeader />
          
        
      </div>
      <div className="flex flex-col items-center bg-[#eedccd] text-[#3b580c]">
        {/* The other sections go here */}
        
      </div>
    </div>
    
  );
}
