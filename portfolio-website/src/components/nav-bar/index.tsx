"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Tracks visibility of navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down or up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#eedccd] text-[#3b580c] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4 flex justify-center items-center font-semibold">
        <ul className="flex gap-10">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Me
            </Link>
          </li>
          {/* <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
