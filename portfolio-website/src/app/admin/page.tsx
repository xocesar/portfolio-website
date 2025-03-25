"use client"
import React from "react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex justify-center h-screen bg-[#eedccd] text-[#3b580c]">
      {/* Placeholder until i work with login page and auth */}
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-bold">You are not supposed to be here!</p>
            <Link href={"/"} className="p-3 rounded-2xl bg-green-700 hover:bg-green-950 text-white">Go back</Link>
        </div>
    </div>
  );
}
