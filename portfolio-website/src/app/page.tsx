import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-[#eedccd] text-[#3b580c] font-extrabold gap-6 ">
      <div className="">
      <Image src={"/logo.png"} alt={"Profile Image"} width={150} height={150}/>
      </div>
      
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl">Cesar A. Quesada</h1>
        <h2 className="text-2xl font-Bold">Fullstack developer</h2>
        {/* todo: add Bayamon google maps link, add map pin emoji to end */}
        <p className="text-base text-gray-600"><span className="text-[#3b580c]">Bayamon,</span> Puerto Rico </p>
        <div className="flex flex-row gap-2">
          {/* todo: change text into the icons */}
          <Link className="text-3xl hover:text-[#0077B5]" href={"/"}><FaLinkedin /></Link>
          <Link className="text-3xl hover:text-[#333]" href={"/"}><FaGithubSquare/></Link>
          <Link className="text-3xl hover:text-[#E4405F]" href={"/"}><FaSquareInstagram/></Link>
        </div>
      </div>
    </div>
  );
}
