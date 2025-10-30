
import React from 'react';
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

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const Footer: React.FC = () => {
    const { language, text } = useLanguage();
    const currentYear = new Date().getFullYear();

    const address = "Gram/Office – Saddopatti, Post – Gambhirpur, Tehsil – Lalganj, District – Azamgarh";

    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className={`text-xl font-bold text-white mb-4 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>{text.mainTitle}</h3>
                        <p className="text-slate-400">{text.tagline}</p>
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold text-white mb-4 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>{text.getInTouch}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <LocationIcon className="h-6 w-6 text-brand-blue-400 mt-1 mr-3 flex-shrink-0" />
                                <span>{address}</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="h-5 w-5 text-brand-blue-400 mr-3 flex-shrink-0" />
                                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91-123-456-7890</a>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="h-5 w-5 text-brand-blue-400 mr-3 flex-shrink-0" />
                                <a href="mailto:contact@trust.org" className="hover:text-white transition-colors">contact@trust.org</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <h3 className={`text-lg font-semibold text-white mb-4 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>Follow Us</h3>
                         {/* Placeholder for social media icons */}
                         <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Facebook</span>...</a>
                            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Instagram</span>...</a>
                            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">WhatsApp</span>...</a>
                         </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
                    <p>&copy; {currentYear} {text.mainTitle}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
