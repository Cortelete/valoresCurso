

import React from 'react';
import { SectionRefs } from '../types';
import InstagramIcon from './icons/InstagramIcon';

interface FooterProps {
    scrollToSection: (key: keyof SectionRefs) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
    const instagramUrl = "https://www.instagram.com/luxury.joycialmeida/";
    const iaInstagramUrl = "https://www.instagram.com/inteligenciarte.ia/";

    return (
        <footer className="bg-[#121212]/85 text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Column 1: Brand */}
                    <div className="flex flex-col items-center md:items-start">
                         <h3 className="font-bold text-xl font-playfair text-[var(--color-primary)] mb-4">
                            Luxury Studio
                         </h3>
                         <p className="text-base text-amber-200/50 max-w-xs text-center md:text-left">
                            Transformando olhares e construindo impérios no mundo da beleza.
                         </p>
                    </div>

                    {/* Column 2: Navigation */}
                     <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl font-playfair text-[var(--color-primary)] mb-4">Navegação</h3>
                        <ul className="space-y-2 text-base">
                            <li><button onClick={() => scrollToSection('home')} className="hover:text-[#EACD8C] transition-colors text-amber-100/80">Início</button></li>
                            <li><button onClick={() => scrollToSection('about')} className="hover:text-[#EACD8C] transition-colors text-amber-100/80">Sobre</button></li>
                            <li><button onClick={() => scrollToSection('courses')} className="hover:text-[#EACD8C] transition-colors text-amber-100/80">Cursos</button></li>
                             <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#EACD8C] transition-colors text-amber-100/80">Contato</button></li>
                        </ul>
                    </div>

                    {/* Column 3: Social */}
                     <div className="flex flex-col items-center md:items-end">
                        <h3 className="font-bold text-xl font-playfair text-[var(--color-primary)] mb-4">Siga-nos</h3>
                        <div className="space-y-2">
                             <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-end gap-2 hover:text-[#EACD8C] transition-colors text-amber-100/80" aria-label="Instagram Luxury Studio">
                                <InstagramIcon className="w-5 h-5" />
                                <span>@luxury.joycialmeida</span>
                            </a>
                            <a href={iaInstagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-end gap-2 hover:text-[#EACD8C] transition-colors text-amber-100/80" aria-label="Instagram InteligenciArte.IA">
                               <InstagramIcon className="w-5 h-5" />
                               <span>@InteligenciArte.IA</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 text-center border-t border-white/5">
                     <p className="text-base text-amber-200/50">
                        © {new Date().getFullYear()} Luxury Studio de Beleza - Joyci Almeida. Todos os Direitos Reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;