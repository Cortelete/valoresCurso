

import React, { useRef, useEffect, useMemo, useState } from 'react';
import { SectionRefs, Course, InfoModalData } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';
import WinkingLashes from './components/WinkingLashes';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Modal from './components/Modal';
import TopBar from './components/TopBar';
import GlobalMouseGlow from './components/GlobalMouseGlow';
import InfoModal from './components/InfoModal';
import Mascot from './components/Mascot';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const featureCategories = {
  'Plano Profissional': [
    'Aplicação dos cílios', 'Manutenção dos cílios', 'Remoção dos cílios', 'Saúde Ocular', 'Higienização Geral', 'Materiais necessários', 'Cola',
  ],
  'Plano Empreendedora': [
    'App Minha Agenda', 'Empreendedora Iniciante', 'Redes Sociais', 'Importância do Marketing', 'Fornecedores', 'Postura e Comunicação',
  ],
  'Plano Empresária VIP': [
    'Consultoria VIP InteligenciArte.IA (Bônus com 50% OFF)', 'Automação de mensagens e Chatbot', 'Inteligência Artificial em posts e Mídia Digital', 'Criação de site e Logotipo', 'Sobre o registro da marca', 'Bônus: Curiosidades Financeiras e Investimentos',
  ],
   'Bônus & Suporte': [
      'Apostila detalhada',
      'Mentoria exclusiva',
      'Grupo de WhatsApp geral (lashes e fornecedores)',
      'Grupo exclusivo de empreendedoras',
      'Grupo de networking de alto padrão (Inteligenciart.IA)'
    ]
};

const coursesData: Course[] = [
    { 
      id: 1, 
      title: 'Lash Profissional', 
      uniqueDescription: 'Domine a técnica fundamental que é a base de toda grande artista de cílios. Perfeição em cada fio.',
      motivationalPhrase: 'A precisão é a sua assinatura.',
      price: 'R$ 899', 
      highlight: 'DIRETO AO PONTO',
      includedCategories: ['Plano Profissional'], 
      includedFeatures: ['Apostila detalhada', 'Mentoria exclusiva', 'Grupo de WhatsApp geral (lashes e fornecedores)'],
      cta: 'QUERO COMEÇAR AGORA', 
      whatsappMessage: 'Olá! Tenho interesse no curso Lash Profissional. Pode dar-me mais informações?',
      difficulty: 'Iniciante',
      focus: 'Foco na técnica perfeita e nos fundamentos essenciais.',
      modalPhrases: [
        'Seu compromisso hoje é o alicerce do seu império amanhã. Comece com a base certa.',
        'A garantia do seu sucesso começa com a primeira pinça. Dê o primeiro passo com maestria.',
        'Transforme sua paixão em profissão. Exigimos dedicação, prometemos excelência.'
      ]
    },
    { 
      id: 2, 
      title: 'Lash Empreendedora', 
      uniqueDescription: 'Vá além da técnica. Aprenda a gerir, divulgar e construir uma marca de sucesso no universo da beleza.',
      motivationalPhrase: 'Transforme talento em negócio.',
      price: 'R$ 1099', 
      highlight: 'A MELHOR ESCOLHA', 
      includedCategories: ['Plano Profissional', 'Plano Empreendedora'], 
      includedFeatures: ['Apostila detalhada', 'Mentoria exclusiva', 'Grupo de WhatsApp geral (lashes e fornecedores)', 'Grupo exclusivo de empreendedoras'],
      cta: 'QUERO SER UMA EMPRESÁRIA', 
      whatsappMessage: 'Olá! Tenho interesse no curso Lash Empreendedora. Pode dar-me mais informações?',
      difficulty: 'Intermediário',
      focus: 'Da técnica à gestão do seu próprio estúdio de sucesso.',
      modalPhrases: [
        'Você não está apenas aprendendo uma técnica, está construindo um negócio. Comprometa-se com a sua visão.',
        'O sucesso ama a preparação. Este curso é a sua garantia de que estará pronta para gerir e crescer.',
        'Exigimos mentalidade de dona do negócio. Sua independência financeira começa com esta decisão.'
      ]
    },
    { 
      id: 3, 
      title: 'Lash Empresária VIP', 
      uniqueDescription: 'A elite da formação. Integre tecnologia de ponta, networking de alto nível e a consultoria InteligenciArte.IA com 50% de desconto exclusivo para escalar seu império.',
      motivationalPhrase: 'Lidere, inove, domine.',
      price: 'R$ 1499', 
      highlight: 'EXCLUSIVIDADE VIP',
      includedCategories: ['Plano Profissional', 'Plano Empreendedora', 'Plano Empresária VIP', 'Bônus & Suporte'], 
      includedFeatures: ['Apostila detalhada', 'Mentoria exclusiva', 'Grupo de WhatsApp geral (lashes e fornecedores)', 'Grupo exclusivo de empreendedoras', 'Grupo de networking de alto padrão (Inteligenciart.IA)'],
      cta: 'QUERO SER VIP', 
      whatsappMessage: 'Olá! Tenho interesse no curso Lash Empresária VIP. Pode dar-me mais informações?',
      difficulty: 'Avançado / VIP',
      focus: 'Domínio total: técnica, gestão e escala com inteligência artificial.',
      modalPhrases: [
        'Este não é um curso, é uma transformação. Exigimos visão de futuro para um sucesso inevitável.',
        'Comprometa-se com o extraordinário. Sua jornada para se tornar uma referência no mercado começa aqui.',
        'Garantimos as ferramentas e a rede de contatos. Seu império de beleza está a um clique de distância.'
      ]
    },
];


const App = () => {
    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const coursesRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [randomModalPhrase, setRandomModalPhrase] = useState('');

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [infoModalData, setInfoModalData] = useState<InfoModalData | null>(null);

    const handleOpenCourseModal = (course: Course) => {
        const phrases = course.modalPhrases;
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        setRandomModalPhrase(randomPhrase);
        setSelectedCourse(course);
        setIsCourseModalOpen(true);
    };

    const handleCloseCourseModal = () => {
        setIsCourseModalOpen(false);
        setSelectedCourse(null);
    };
    
    const handleOpenInfoModal = (data: InfoModalData) => {
        setInfoModalData(data);
        setIsInfoModalOpen(true);
    };

    const handleCloseInfoModal = () => {
        setIsInfoModalOpen(false);
        setInfoModalData(null);
    };

    const sectionRefs = useMemo<SectionRefs>(() => ({
        home: homeRef,
        about: aboutRef,
        courses: coursesRef,
        contact: contactRef,
    }), []);
    
    const scrollToSection = (key: keyof SectionRefs) => {
        sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const refsToObserve = Object.values(sectionRefs);
        refsToObserve.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refsToObserve.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [sectionRefs]);
    
    return (
        <div className="font-montserrat text-[#F5F5F5]">
            <GlobalMouseGlow />
            <div className='relative z-50'>
              <TopBar />
              <Header scrollToSection={scrollToSection} />
            </div>
            <WinkingLashes />
            <FloatingWhatsApp />
            <AIChat courses={coursesData} />
            <Mascot />
            
            <main className="relative z-10">
                <Hero ref={homeRef} scrollToSection={() => scrollToSection('courses')} />
                <About ref={aboutRef} onStatClick={handleOpenInfoModal} />
                <Courses ref={coursesRef} courses={coursesData} featureCategories={featureCategories} onCtaClick={handleOpenCourseModal} />
                <Contact ref={contactRef} />
            </main>

            <Footer scrollToSection={scrollToSection} />

            <Modal isOpen={isCourseModalOpen} onClose={handleCloseCourseModal} course={selectedCourse} randomPhrase={randomModalPhrase} />
            <InfoModal isOpen={isInfoModalOpen} onClose={handleCloseInfoModal} data={infoModalData} />
        </div>
    );
};

export default App;