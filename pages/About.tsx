
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language, text } = useLanguage();

  const address = "Gram/Office – Saddopatti, Post – Gambhirpur, Tehsil – Lalganj, District – Azamgarh";

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.navAbout}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className={`text-3xl font-bold text-brand-blue-600 mb-4 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
                {text.ourMission}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our mission is to empower underprivileged communities through sustainable initiatives in education, healthcare, and livelihood. We believe in creating a world where every individual has the opportunity to live a life of dignity and purpose.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://picsum.photos/seed/mission/600/400" alt="Our Mission" className="rounded-lg shadow-xl"/>
            </div>
          </div>

          <div className="space-y-12 mb-16">
            <div>
              <h3 className={`text-2xl font-bold text-slate-800 mb-3 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>{text.ourVision}</h3>
              <p className="text-slate-600 leading-relaxed">
                We envision a self-reliant society free from poverty and discrimination, where every person has access to the resources they need to thrive, and communities live in harmony and mutual respect.
              </p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold text-slate-800 mb-3 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>{text.ourPurpose}</h3>
              <p className="text-slate-600 leading-relaxed">
                Our purpose is to act as a catalyst for positive social change. We work on the ground, directly with communities, to identify their needs and co-create solutions that are both effective and long-lasting.
              </p>
            </div>
          </div>
          
          <div className="bg-brand-blue-50 p-8 md:p-12 rounded-lg">
            <h2 className={`text-3xl font-bold text-center text-slate-800 mb-8 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>{text.founders}</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
              <div>
                <img src="https://picsum.photos/seed/founder1/150/150" alt="Vidya Devi" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
                <h4 className="text-xl font-semibold text-slate-800">Vidya Devi</h4>
                <p className="text-brand-blue-700">{text.manager}</p>
              </div>
              <div>
                <img src="https://picsum.photos/seed/founder2/150/150" alt="Umesh Chand" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
                <h4 className="text-xl font-semibold text-slate-800">Umesh Chand</h4>
                <p className="text-brand-blue-700">{text.assistantManager}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
              <h3 className={`text-2xl font-bold text-slate-800 mb-3 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>{text.address}</h3>
              <p className="text-slate-600 max-w-lg mx-auto">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
