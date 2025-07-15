
import React, { useState } from 'react';
import { Course } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import FireworksCanvas from './FireworksCanvas';

interface CourseCardProps {
    course: Course;
    featureCategories: Record<string, string[]>;
    onCtaClick: (course: Course) => void;
}

const CourseCard = ({ course, featureCategories, onCtaClick }: CourseCardProps) => {
    const isProfessional = course.id === 1;
    const isEmpreendedora = course.id === 2;
    const isVip = course.id === 3;

    const [isVipButtonHovered, setIsVipButtonHovered] = useState(false);

    const WHATSAPP_NUMBER = '5542999722042';
    const expertWhatsappMessage = `Olá! Gostaria de falar com a Joy sobre os cursos.`;
    const whatsappContactUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(expertWhatsappMessage)}`;
    
    const highlightTagColor = isProfessional ? 'bg-[var(--color-rose)]' : isVip ? 'bg-[var(--color-diamond)]' : 'bg-[var(--color-primary)]';
    const highlightTagTextColor = isVip ? 'text-gray-800' : 'text-[#121212]';
    const priceColor = isProfessional ? 'text-[var(--color-rose)]' : isVip ? 'text-[var(--color-diamond)]' : 'text-[var(--color-primary)]';
    const motivationalPhraseColor = isProfessional ? 'text-[var(--color-rose)]' : isVip ? 'text-[var(--color-diamond)]' : 'text-[var(--color-primary)]';
    
    const handleCtaClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onCtaClick(course);
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const cardContent = (
      <>
        {course.highlight && (
            <div className={`absolute -top-4 inset-x-0 flex justify-center z-20`}>
                <div className={`${highlightTagColor} ${highlightTagTextColor} px-3 md:px-4 py-1 rounded-full text-sm md:text-base font-bold shadow-md flex items-center justify-center`}>
                    {course.highlight}
                </div>
            </div>
        )}

        <div className="flex-grow flex flex-col overflow-hidden">
             {/* Non-scrolling part */}
             <div className="text-center px-1">
                <h3 className="font-montserrat font-bold text-xl md:text-3xl tracking-wide text-white mb-1 md:mb-2">{course.title}</h3>
                <p className={`font-playfair italic text-sm md:text-base mb-2 md:mb-4 ${motivationalPhraseColor}`}>"{course.motivationalPhrase}"</p>
                <p className={`text-3xl md:text-5xl font-bold mb-4 md:mb-8 ${priceColor}`}>{course.price}</p>
             </div>
             
             {/* Scrolling part */}
             <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                 <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 hidden lg:block">{course.uniqueDescription}</p>
                 
                 {/* Full feature list for medium screens and up */}
                <div className="space-y-4 mb-4 hidden md:block">
                    {Object.entries(featureCategories).map(([category, features]) => {
                        const isFullCategoryIncluded = course.includedCategories.includes(category);
                        
                        return (
                            <div key={category}>
                                <h5 className="font-bold text-lg mb-2 text-[#EACD8C] text-left">+ {category}</h5>
                                <ul className="space-y-1.5 text-base text-left">
                                    {features.map((feature) => {
                                        const isFeatureIncluded = isFullCategoryIncluded || (course.includedFeatures && course.includedFeatures.includes(feature));

                                        return (
                                          <li key={feature} className={`flex items-start ${isFeatureIncluded ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                                              {isFeatureIncluded 
                                                  ? <CheckIcon className="w-5 h-5 mr-3 mt-1 text-green-400 flex-shrink-0" /> 
                                                  : <XIcon className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" />
                                              }
                                              <span>{feature}</span>
                                          </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                {/* Summarized list for small screens */}
                <div className="space-y-2 text-left md:hidden mb-4">
                    {Object.keys(featureCategories).map((category) => {
                        const isIncluded = course.includedCategories.includes(category);
                        const shortName = {
                            'Plano Profissional': 'Técnica e Prática',
                            'Plano Empreendedora': 'Gestão e Marketing',
                            'Plano Empresária VIP': 'VIP com I.A.',
                            'Bônus & Suporte': 'Bônus e Suporte'
                        }[category] || category;

                        return (
                            <div key={category} className={`flex items-center gap-2 text-sm ${isIncluded ? 'text-gray-300' : 'text-gray-600'}`}>
                                {isIncluded 
                                    ? <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" /> 
                                    : <XIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                                }
                                <span className={`${!isIncluded && 'line-through'}`}>{shortName}</span>
                            </div>
                        )
                    })}
                </div>
             </div>
        </div>

        <div className="pt-4 md:pt-6">
            <div className="space-y-3 flex flex-col">
                 <div className="relative">
                    <button 
                        onClick={handleCtaClick}
                        onMouseEnter={() => isVip && setIsVipButtonHovered(true)}
                        onMouseLeave={() => isVip && setIsVipButtonHovered(false)}
                        className="w-full bg-[#EACD8C] text-[#121212] font-bold py-2.5 md:py-3 rounded-full hover:bg-[#f0d8a4] transition-colors text-base md:text-lg z-10 relative"
                    >
                        {course.cta}
                    </button>
                    {isVip && <FireworksCanvas isHovering={isVipButtonHovered} />}
                 </div>
                <a 
                    href={whatsappContactUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="w-full border-2 border-[#EACD8C] text-[#EACD8C] font-bold py-2 md:py-2.5 rounded-full hover:bg-[#EACD8C] hover:text-[#121212] transition-colors text-center text-base md:text-lg"
                >
                    Falar com a Joy
                </a>
            </div>
        </div>
      </>
    );

    if (isVip) {
      return (
        <div 
            onClick={() => onCtaClick(course)}
            className="relative rounded-xl p-0.5 animated-border-diamond h-full shadow-2xl transition-transform duration-300 ease-in-out hover:scale-[1.03] hover-brilliant cursor-pointer col-span-2 md:col-span-1">
            <div className="relative flex flex-col bg-[#121212] rounded-lg p-4 md:p-8 h-full">
              {cardContent}
            </div>
        </div>
      )
    }

    const professionalClass = 'border-[var(--color-rose)] hover:shadow-[0_0_25px_rgba(217,170,183,0.4)] hover:scale-[1.03]';
    const empreendedoraClass = 'border-[var(--color-primary)] hover:scale-105 hover:shadow-[0_0_25px_rgba(234,205,140,0.5)]';
    
    return (
        <div 
            onClick={() => onCtaClick(course)}
            className={`relative flex flex-col bg-[#121212] rounded-xl shadow-lg p-4 md:p-8 border-2 h-full transition-all duration-300 ease-in-out ${isProfessional ? professionalClass : empreendedoraClass} cursor-pointer`}>
            {cardContent}
        </div>
    );
};

export default CourseCard;
