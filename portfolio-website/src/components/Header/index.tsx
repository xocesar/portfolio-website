import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";



function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl md:space-x-6 md:space-y-0 space-y-10">
      {/* Profile image */}
        <Image src={"/logo.png"} alt={"Profile Image"} width={150} height={150} />

        <div className="max-w-72">
          {/* Text */}
          <h1 className="text-3xl text-center md:text-justify font-bold">Cesar A. Quesada</h1>
          <h2 className="text-xl text-center md:text-justify font-medium">Fullstack developer with a focus on frontend development</h2>
          <p className="text-base text-center md:text-justify text-gray-700">Bayamon, Puerto Rico</p>

          {/* Links */}
          <div className="flex gap-2 md:justify-start justify-center mt-2 ">
          <Link className="text-3xl hover:text-[#0077B5]" href={"https://www.linkedin.com/in/cesaraquesada/"}>
            <FaLinkedin />
          </Link>
          <Link className="text-3xl hover:text-[#333]" href={"https://github.com/xocesar"}>
            <FaGithubSquare />
          </Link>
          <Link className="flex gap-2 text-3xl hover:text-black" href="mailto:cquesada1611@outlook.com">
          <ImMail />
          </Link>
          
          </div>
        </div>
        


    </div>
  )
}

export default PageHeader;
