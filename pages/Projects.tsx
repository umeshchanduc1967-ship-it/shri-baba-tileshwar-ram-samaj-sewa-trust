
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const { language, text } = useLanguage();

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-slate-800 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.ourProjects}
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {text.missionStatement}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
