
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { PROJECTS_DATA, TESTIMONIALS_DATA } from '../constants';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const { language, text } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hope/1600/900')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.mainTitle}
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl drop-shadow-md">{text.subheading}</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/donate" className="bg-brand-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-brand-blue-600 transition-transform hover:scale-105 shadow-lg">
              {text.donateNow}
            </Link>
            <Link to="/about" className="bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-colors shadow-lg">
              {text.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 lg:py-24 bg-brand-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{text.ourMission}</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">{text.missionStatement}</p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.ourProjects}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS_DATA.slice(0, 4).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="text-brand-blue-600 font-semibold hover:underline">
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.testimonials}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
