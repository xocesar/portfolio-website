"use client";
import React from 'react';
import { motion } from 'motion/react';
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
   <motion.div
   whileHover={{scale:1.10}}
   whileTap={{scale:0.95}}
    className={`flex flex-col gap-2 rounded-lg p-2 hover:shadow-2xl transition-shadow duration-300 w-30 md:w-36`} style={{ backgroundColor, color: textColor }}
    >
    <Logo size={32} />
    <div className="flex items-center gap-2">
      
      <h3 className="text-md md:text-lg font-bold">{title}</h3>
    </div>
    <p className='text-xs md:text-sm'>{description}</p>
   </motion.div>
  );
};

export default TechnologiesEntry;