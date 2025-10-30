
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC = () => {
    const { language, toggleLanguage, text } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: text.navHome },
        { path: '/about', label: text.navAbout },
        { path: '/projects', label: text.navProjects },
        { path: '/gallery', label: text.navGallery },
        { path: '/contact', label: text.navContact },
    ];

    const activeLinkClass = "text-brand-blue-600 font-semibold";
    const inactiveLinkClass = "text-slate-600 hover:text-brand-blue-600 transition-colors";

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                           <HeartIcon className="h-8 w-8 text-brand-blue-500" />
                            <span className={`font-bold text-lg ${language === 'hi' ? 'font-hindi' : 'font-sans'} text-slate-800`}>{text.mainTitle.split(' ')[0]} Trust</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button onClick={toggleLanguage} className="hidden md:block px-3 py-1.5 text-sm font-semibold border-2 border-slate-300 rounded-full hover:bg-slate-100 transition-colors">
                           {language === 'en' ? 'हिंदी' : 'English'}
                        </button>
                        <Link to="/donate" className="hidden sm:inline-block bg-brand-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-brand-blue-600 transition-transform hover:scale-105 shadow-md">
                           {text.donateNow}
                        </Link>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800">
                                {isMenuOpen ? <CloseIcon className="h-7 w-7"/> : <MenuIcon className="h-7 w-7"/>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
                <nav className="flex flex-col items-center p-4 space-y-4">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={closeMenu}
                            className={({ isActive }) => `text-lg w-full text-center py-2 rounded-md ${isActive ? 'bg-brand-blue-100 text-brand-blue-700 font-semibold' : 'text-slate-700'} ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <button onClick={toggleLanguage} className="px-4 py-2 text-sm font-semibold border-2 border-slate-300 rounded-full hover:bg-slate-100 transition-colors">
                        {language === 'en' ? 'हिंदी' : 'English'}
                    </button>
                    <Link to="/donate" onClick={closeMenu} className="w-full bg-brand-blue-500 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-brand-blue-600 transition-transform hover:scale-105 shadow-md">
                        {text.donateNow}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
