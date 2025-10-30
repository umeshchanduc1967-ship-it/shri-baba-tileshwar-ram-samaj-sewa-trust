
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GALLERY_DATA, TESTIMONIALS_DATA } from '../constants';
import TestimonialCard from '../components/TestimonialCard';

const Gallery: React.FC = () => {
  const { language, text } = useLanguage();

  return (
    <div className="bg-white">
      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className={`text-4xl md:text-5xl font-bold text-slate-800 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
              {text.galleryTitle}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A glimpse into the lives we've touched and the moments that inspire us to keep going.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_DATA.map(item => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md">
                <img src={item.imageUrl} alt={item.caption[language]} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white font-semibold">{item.caption[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.testimonials}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
