import { FaReact } from "react-icons/fa";
import TechnologiesEntry from "@/components/technologies/skill_tag";

export function Technologies() {
  return (
    <div className="flex flex-col p-4 items-start max-w-4xl mx-auto w-full px-4">
      {/* Education and Experience */}
      <div className="py-4 grid grid-cols-3 md:grid-cols-5 gap-4">
          <TechnologiesEntry 
          title="React" 
          description="Framework" 
          logo={FaReact}
          backgroundColor="#61dbfb"
        />

        <TechnologiesEntry 
          title="Next.js" 
          description="Framework" 
          logo={FaReact}
          backgroundColor="#000000"
          textColor="#ffffff"
        />

        <TechnologiesEntry 
          title="Prisma" 
          description="ORM" 
          logo={FaReact}
          backgroundColor="#ffffff"
          textColor="#000000"
        />

        <TechnologiesEntry 
          title="Typescript" 
          description="Language" 
          logo={FaReact}
          backgroundColor="#007acc"
          textColor="#ffffff"
        />

        <TechnologiesEntry 
          title="Tailwind" 
          description="Framework" 
          logo={FaReact}
          backgroundColor="#A5F3FC"
          textColor="#000000"
        />

        <TechnologiesEntry 
          title="C#" 
          description="Language" 
          logo={FaReact}
          backgroundColor="#9b4993"
          textColor="#ffffff"
        />
      </div>
    </div>
  );
}

export default Technologies;