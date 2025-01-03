// src/app/about/(components)/work-card/index.tsx
import React from 'react';

interface WorkEntryProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
}

const WorkEntry: React.FC<WorkEntryProps> = ({
  title,
  company,
  duration,
  description,
  technologies,
}) => {
  return (
    <li className=" p-6 mb-4 bg-black/5 rounded-3xl shadow-sm hover:bg-black/10 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{company}</p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {duration}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 
                         text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default WorkEntry;