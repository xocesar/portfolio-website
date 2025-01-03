import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col w-full bg-[#eedccd] pb-2">
      <div className="flex md:flex-row flex-col items-start max-w-4xl mx-auto w-full px-4">
      <div className="flex flex-col pt-4">
            <img src="/PROFILE IMAGE.jpg" alt="Profile" className="w-auto h-auto object-cover rounded-3xl" />
        </div>
        
        <div className="flex flex-col pt-4 px-0 md:px-4 max-w-lg">
            <h1 className="font-extrabold text-4xl">About Me</h1>
            <p className="text-lg pt-4 text-gray-800 text-justify">
            I am a dedicated full-stack developer based in Puerto Rico, passionate about creating innovative web applications. I specialize in both frontend and backend development, using modern tools and frameworks to build intuitive user interfaces and robust server systems. As a quick learner, I'm always eager to take on new challenges and expand my technical expertise. I thrive in collaborative environments and am committed to delivering high-quality solutions while continuously growing as a developer.
              </p>
        </div>
        

      </div>
    </div>
  );
}
