


import React, { forwardRef } from 'react';
import { InfoModalData } from '../types';
import UsersIcon from './icons/UsersIcon';
import CertificateIcon from './icons/CertificateIcon';
import BriefcaseIcon from './icons/BriefcaseIcon';
import MiniMascot from './MiniMascot';
import GoldenDustCanvas from './GoldenDustCanvas';

interface AboutProps {
    onStatClick: (data: InfoModalData) => void;
}

const About = forwardRef<HTMLElement, AboutProps>(({ onStatClick }, ref) => {
    
    const stats = [
        {
            icon: <UsersIcon className="h-12 w-12 text-[#EACD8C] mb-3" />,
            value: "+1000",
            label: "Atendimentos",
            hook: "Ao longo de mais de um ano de trajetória, transformando olhares com a técnica e arte que definem a Luxury."
        },
        {
            icon: <CertificateIcon className="h-12 w-12 text-[#EACD8C] mb-3" />,
            value: "+10",
            label: "Certificações",
            hook: "Com mais de 10 certificações exclusivas na área da estética facial, garantindo conhecimento de ponta."
        },
        {
            icon: <BriefcaseIcon className="h-12 w-12 text-[#EACD8C] mb-3" />,
            value: "Gestão & Negócios",
            label: "Formada em Adm.",
            hook: "Formada em Administração com especialização em Gestão de Pessoas, unindo arte e estratégia para construir negócios de sucesso."
        }
    ];

    const mentorBio = {
        title: 'Joyci Almeida: A Visionária por Trás da Luxury',
        hook: 'Com uma paixão por transformar não apenas olhares, mas vidas, Joyci Almeida fundou a Luxury Studio. Formada em Administração e especialista em estética facial com mais de 10 certificações, ela combina arte, técnica e visão de negócios para empoderar mulheres, guiando-as para a independência financeira e o sucesso no competitivo mercado da beleza.'
    };

    return (
        <section ref={ref} id="sobre" className="py-20 md:py-32 bg-[#1e1e1e]/85 fade-in-section">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                    <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
                         <div className="relative group rounded-lg shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 border-8 border-[#1e1e1e] ring-4 ring-[#EACD8C] transition-all duration-500 ease-in-out hover:ring-offset-4 hover:ring-offset-[#121212] hover:shadow-[0_0_45px_rgba(234,205,140,0.5)] overflow-hidden">
                            <GoldenDustCanvas />
                            <img 
                                src="./image.png"
                                alt="Joyci Almeida" 
                                className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 z-20 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <button
                                    onClick={() => onStatClick(mentorBio)}
                                    className="text-white font-bold text-lg px-6 py-3 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/40 backdrop-blur-sm transition-all transform group-hover:scale-100 scale-90"
                                >
                                    Conheça a Mentora
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left relative">
                        <div className="absolute -top-16 -right-10 w-24 h-24 z-0 hidden md:block animate-float" aria-hidden="true">
                           <MiniMascot />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-primary)] mb-4" style={{textShadow: '0 2px 8px rgba(176, 141, 87, 0.4)'}}>A sua Mentora nesta Jornada</h2>
                        <p className="text-lg text-[#F5F5F5] leading-relaxed max-w-3xl mb-12">
                            Joyci Almeida não é apenas uma especialista, é uma visionária. Com uma metodologia que une técnica impecável, visão de negócio e paixão por elevar a autoestima, ela está pronta para guiar você ao sucesso.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-gray-800 pt-8">
                          {stats.map((stat, index) => (
                              <button 
                                key={index} 
                                className="relative group text-center"
                                onClick={() => onStatClick({ title: stat.label, hook: stat.hook })}
                              >
                                  <div className="flex flex-col items-center p-4 rounded-lg transition-transform duration-300 group-hover:scale-110">
                                      {stat.icon}
                                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                                      <span className="text-gray-400">{stat.label}</span>
                                  </div>
                              </button>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;