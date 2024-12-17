// src/app/about/(components)/work-card/index.tsx
import React from 'react';

interface SkillsEntryProps {
  title: string;
  description: string;
  logo: React.ElementType;
  backgroundColor?: string;
}

const SkillsEntry: React.FC<SkillsEntryProps> = ({
  title,
  description,
  logo: Logo,
  backgroundColor = '#c6d6ab'
}) => {
  return (
   <div className={`flex flex-col gap-2 w-[120px] rounded-lg p-2`} style={{ backgroundColor }}>
    <div className="flex items-center gap-2">
      <Logo size={32} />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-700">{description}</p>
   </div>
  );
};

export default SkillsEntry;