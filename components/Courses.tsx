

import React, { forwardRef, useState } from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';
import PixIcon from './icons/PixIcon';
import MoneyIcon from './icons/MoneyIcon';
import CreditCardIcon from './icons/CreditCardIcon';
import CryptoIcon from './icons/CryptoIcon';
import MiniMascot from './MiniMascot';


interface CoursesProps {
  courses: Course[];
  featureCategories: Record<string, string[]>;
  onCtaClick: (course: Course) => void;
}

const Courses = forwardRef<HTMLElement, CoursesProps>(({ courses, featureCategories, onCtaClick }, ref) => {
  const [openPaymentMethod, setOpenPaymentMethod] = useState<string | null>(null);

  const paymentMethods = [
    { 
      name: 'PIX', 
      icon: PixIcon, 
      hook: 'Rápido e fácil', 
      explanation: 'O PIX é o sistema de pagamentos instantâneos do Brasil, funcionando 24/7.',
      curiosity: 'Em seu primeiro ano, mais de 100 milhões de chaves foram cadastradas, mostrando sua rápida adesão.'
    },
    { 
      name: 'Dinheiro', 
      icon: MoneyIcon, 
      hook: 'Controle total', 
      explanation: 'O pagamento em dinheiro físico oferece privacidade e controle imediato de gastos.',
      curiosity: 'A nota de maior valor em circulação no Brasil é a de R$200, com o lobo-guará.'
    },
    { 
      name: 'Cartões', 
      icon: CreditCardIcon, 
      hook: 'Conveniente e seguro', 
      explanation: 'Aceitamos os principais cartões de crédito e débito, proporcionando conveniência e segurança.',
      curiosity: 'O primeiro cartão de crédito, o Diners Club, foi criado em 1950 após um empresário esquecer a carteira.'
    },
    { 
      name: 'Criptomoedas', 
      icon: CryptoIcon, 
      hook: 'Inovador e global', 
      explanation: 'Abraçando a inovação, aceitamos pagamentos com as principais criptomoedas como Bitcoin e Ethereum.',
      curiosity: 'A primeira transação comercial com Bitcoin foi a compra de duas pizzas por 10.000 BTC em 2010.'
    },
  ];
  
  const handlePaymentClick = (name: string) => {
    setOpenPaymentMethod(openPaymentMethod === name ? null : name);
  };
  
  const logoWhatsappMessage = 'Olá! Tenho interesse em adicionar a criação de logotipo ao meu curso.';
  const WHATSAPP_NUMBER = '5542999722042';
  const logoWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(logoWhatsappMessage)}`;

  return (
    <section ref={ref} id="cursos" className="pt-12 md:pt-16 pb-20 md:pb-32 bg-[#1e1e1e]/85 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
           <div className="absolute -top-12 -left-4 w-24 h-24 z-0 hidden xl:block animate-float opacity-80" style={{animationDelay: '0.5s'}} aria-hidden="true">
             <MiniMascot />
           </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-primary)]" style={{textShadow: '0 2px 8px rgba(176, 141, 87, 0.4)'}}>Nossos Cursos</h2>
          <p className="text-lg text-gray-400 mt-4">Escolha o plano ideal para transformar a sua carreira.</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
              {courses.map(course => (
                  <CourseCard key={course.id} course={course} featureCategories={featureCategories} onCtaClick={onCtaClick} />
              ))}
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-800 flex justify-center">
            <div className="bg-[#1e1e1e] border-2 border-dashed border-[var(--color-primary)] rounded-xl p-8 max-w-lg text-center transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 text-[var(--color-primary)] opacity-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-1 4v3h-3v2h3v3h2v-3h3v-2h-3V8h-2z"></path></svg>
                </div>
                <div className="relative z-10">
                    <span className="bg-[var(--color-primary)] text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-md">ADICIONAL EXCLUSIVO</span>
                    <h3 className="text-3xl font-playfair font-bold text-white mt-5">Criação de Logotipo</h3>
                    <p className="text-gray-300 mt-2 mb-4">Dê uma cara profissional à sua marca com um logotipo exclusivo, criado pela InteligenciArte.IA.</p>
                    <p className="text-4xl font-bold text-[var(--color-primary)] my-4">R$ 150</p>
                    <p className="text-sm text-gray-500 mb-6">Pode ser adicionado aos planos Profissional ou Empreendedora.</p>
                    <a 
                        href={logoWhatsappUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full max-w-xs mx-auto block bg-[#EACD8C] text-[#121212] font-bold py-3 rounded-full hover:bg-[#f0d8a4] transition-colors text-lg"
                    >
                        Adicionar ao meu Plano
                    </a>
                </div>
            </div>
        </div>

        <div className="text-center mt-20 pt-16 border-t border-gray-800">
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-primary)]" style={{textShadow: '0 2px 8px rgba(176, 141, 87, 0.4)'}}>Pagamento Facilitado</h3>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Aceitamos diversas formas de pagamento para sua comodidade. Escolha a que melhor se adapta a você.</p>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                {paymentMethods.map((method) => (
                    <div 
                      key={method.name}
                      onClick={() => handlePaymentClick(method.name)}
                      className="relative bg-[#121212] p-6 rounded-xl border border-white/10 cursor-pointer transition-all duration-300 hover:border-[var(--color-primary)]/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-primary)]/10"
                    >
                        <method.icon className="h-12 w-12 mx-auto text-[var(--color-primary)] mb-4" />
                        <h4 className="text-xl font-bold text-white">{method.name}</h4>
                        <p className="text-sm text-gray-500">{method.hook}</p>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openPaymentMethod === method.name ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                            <p className="text-gray-400 text-sm">{method.explanation}</p>
                            <p className="text-xs text-amber-300/50 mt-2 italic">Curiosidade: {method.curiosity}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-300 text-base md:text-lg bg-[#121212] border border-dashed border-gray-700 rounded-lg p-4 inline-block">
                    Oferecemos flexibilidade: pague com uma <span className="text-[var(--color-primary)] font-semibold">entrada e parcele o restante em até 2x no cartão</span> (com acréscimo de juros da operadora).
                </p>
            </div>
        </div>

      </div>
    </section>
  );
});

export default Courses;