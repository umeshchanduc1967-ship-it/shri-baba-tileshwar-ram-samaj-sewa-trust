
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, text } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-2">
      <div className="relative">
        <img src={project.imageUrl} alt={project.title[language]} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-brand-blue-600 font-semibold text-sm mb-2">{project.category[language]}</p>
        <h3 className={`text-xl font-bold mb-3 text-slate-800 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
          {project.title[language]}
        </h3>
        <p className="text-slate-600 mb-4 flex-grow">{project.description[language]}</p>
        <Link 
          to="/donate"
          className="mt-auto self-start bg-brand-blue-100 text-brand-blue-700 font-semibold py-2 px-5 rounded-full hover:bg-brand-blue-200 transition-colors"
        >
          {text.donateForCause}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
