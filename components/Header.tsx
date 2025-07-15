import React, { useState, useEffect } from 'react';
import { SectionRefs } from '../types';
import InstagramIcon from './icons/InstagramIcon';

interface HeaderProps {
    scrollToSection: (key: keyof SectionRefs) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks: { name: string, key: keyof SectionRefs }[] = [
        { name: 'Início', key: 'home' },
        { name: 'Sobre', key: 'about' },
        { name: 'Cursos', key: 'courses' },
        { name: 'Contacto', key: 'contact' },
    ];
    
    const luxuryInstagramUrl = "https://www.instagram.com/luxury.joycialmeida/";

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (key: keyof SectionRefs) => {
        scrollToSection(key);
        setIsMenuOpen(false); // Close menu on click
    };

    return (
        <header className={`relative w-full transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-[#1e1e1e]/90 backdrop-blur-sm shadow-lg' : 'bg-[#1e1e1e]/80'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                 <a 
                    href={luxuryInstagramUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-playfair font-bold text-white transition-all duration-300 hover:text-[var(--color-primary)] hover:drop-shadow-[0_0_8px_var(--color-primary)]"
                >
                    Luxury Studio
                </a>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.key)}
                            className="text-[#F5F5F5] hover:text-[#EACD8C] transition-colors duration-300 font-medium text-lg"
                        >
                            {link.name}
                        </button>
                    ))}
                     <a href={luxuryInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#EACD8C] transition-colors duration-300 ml-4">
                        <InstagramIcon className="h-6 w-6" />
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-[#1e1e1e]/95 backdrop-blur-sm shadow-lg`}>
                <ul className="flex flex-col items-center py-4">
                    {navLinks.map((link) => (
                        <li key={link.name} className="w-full text-center">
                             <button
                                onClick={() => handleNavClick(link.key)}
                                className="w-full py-3 text-[#F5F5F5] hover:bg-black/20 hover:text-[#EACD8C] transition-colors duration-300 font-medium text-lg"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                    <li className="w-full text-center mt-2">
                         <a href={luxuryInstagramUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-white hover:text-[#EACD8C] transition-colors duration-300">
                            <InstagramIcon className="h-7 w-7" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;