// src/app/about/(components)/work-card/index.tsx
import React from 'react';

interface SkillsEntryProps {
  title: string;
  description: string;
  logo: React.ElementType;
  backgroundColor?: string;
  textColor?: string;
}

const SkillsEntry: React.FC<SkillsEntryProps> = ({
  title,
  description,
  logo: Logo,
  backgroundColor = '#c6d6ab',
  textColor = 'black'
}) => {
  return (
   <div className={`flex flex-col gap-2 rounded-lg p-2 hover:shadow-xl transition-shadow duration-300`} style={{ backgroundColor, color: textColor }}>
    <div className="flex items-center gap-2">
      <Logo size={32} />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p>{description}</p>
   </div>
  );
};

export default SkillsEntry;