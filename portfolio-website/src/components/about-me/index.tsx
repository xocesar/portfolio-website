import React from "react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div id="about-me" className="flex flex-col items-center justify-center border-t-2 border-[#3b580c] py-8">
      <div className="flex flex-col items-center justify-center py-8 gap-2 p-2">
        <h1 className="text-4xl font-extrabold">About Me</h1>
        <p className="text-lg text-gray-600 text-justify">I&apos;m a software engineer with a passion for creating innovative solutions and a strong work ethic.</p>
      </div>
      
      <button className="bg-black text-white px-4 py-2 rounded-md">View more</button>
    </div>
    )
}