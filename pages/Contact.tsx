
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

const Contact: React.FC = () => {
  const { language, text } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate form submission
      setFormSubmitted(true);
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-slate-800 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.getInTouch}
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-lg">
            <h2 className={`text-2xl font-bold text-slate-800 mb-6 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>{text.contactFormTitle}</h2>
            {formSubmitted ? (
                <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                    <h3 className="font-bold text-lg">Thank You!</h3>
                    <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder={text.fullName} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500" />
                  <input type="email" placeholder={text.email} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500" />
                  <input type="tel" placeholder={text.phone} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500" />
                  <textarea placeholder={text.message} rows={5} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500"></textarea>
                  <button type="submit" className="w-full bg-brand-blue-500 text-white font-bold py-3 rounded-full hover:bg-brand-blue-600 transition-colors shadow-md">
                    {text.sendMessage}
                  </button>
                </form>
            )}
          </div>
          
          <div className="space-y-8">
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Contact Information</h3>
                 <ul className="space-y-4 text-slate-600">
                    <li className="flex items-center">
                        <PhoneIcon className="h-6 w-6 text-brand-blue-500 mr-4" />
                        <a href="tel:+911234567890" className="hover:text-brand-blue-600">+91-123-456-7890</a>
                    </li>
                    <li className="flex items-center">
                        <MailIcon className="h-6 w-6 text-brand-blue-500 mr-4" />
                        <a href="mailto:contact@trust.org" className="hover:text-brand-blue-600">contact@trust.org</a>
                    </li>
                </ul>
            </div>
            <div>
                 <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors shadow-md">
                    {text.quickMessage}
                 </a>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{text.address}</h3>
                <p className="text-slate-600">Gram/Office – Saddopatti, Post – Gambhirpur, Tehsil – Lalganj, District – Azamgarh</p>
                <div className="mt-4 h-64 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
                    Google Map Placeholder
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
