import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import TechnologiesEntry from "@/components/technologies/skill_tag";

export function Technologies() {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
      {/* Education and Experience */}
      <div className="py-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          <TechnologiesEntry 
          title="React" 
          description="JavaScript Library" 
          logo={FaReact}
          backgroundColor="#61dbfb"
        />

        <TechnologiesEntry 
          title="Next.js" 
          description="Framework" 
          logo={SiNextdotjs}
          backgroundColor="#000000"
          textColor="#ffffff"
        />

        <TechnologiesEntry 
          title="Prisma" 
          description="ORM" 
          logo={SiPrisma}
          backgroundColor="#ffffff"
          textColor="#000000"
        />

        <TechnologiesEntry 
          title="Typescript" 
          description="Language" 
          logo={SiTypescript}
          backgroundColor="#007acc"
          textColor="#ffffff"
        />

        <TechnologiesEntry 
          title="Tailwind" 
          description="Framework" 
          logo={SiTailwindcss}
          backgroundColor="#A5F3FC"
          textColor="#000000"
        />

        <TechnologiesEntry 
          title="C#" 
          description="Language" 
          logo={SiCsharp}
          backgroundColor="#9b4993"
          textColor="#ffffff"
        />
      </div>
    </div>
  );
}

export default Technologies;