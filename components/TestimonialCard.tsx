
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const QuoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className={className}>
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
    </svg>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-brand-blue-50 p-8 rounded-lg text-center shadow-sm">
        <QuoteIcon className="text-brand-blue-300 w-8 h-8 mx-auto mb-4"/>
        <p className="text-slate-700 italic mb-6">"{testimonial.quote[language]}"</p>
        <div className="flex items-center justify-center">
            <img src={testimonial.imageUrl} alt={testimonial.name[language]} className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
                <p className="font-bold text-slate-800">{testimonial.name[language]}</p>
                <p className="text-sm text-slate-500">{testimonial.role[language]}</p>
            </div>
        </div>
    </div>
  );
};

export default TestimonialCard;
