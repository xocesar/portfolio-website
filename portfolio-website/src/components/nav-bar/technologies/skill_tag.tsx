import React from 'react';

  interface TechnologiesEntryProps {
  title: string;
  description: string;
  logo: React.ElementType;
  backgroundColor?: string;
  textColor?: string;
}

const TechnologiesEntry: React.FC<TechnologiesEntryProps> = ({
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

export default TechnologiesEntry;