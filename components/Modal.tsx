import React from 'react';
import { Course } from '../types';
import XIcon from './icons/XIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    course: Course | null;
    randomPhrase: string;
}

const Modal = ({ isOpen, onClose, course, randomPhrase }: ModalProps) => {
    if (!isOpen || !course) return null;

    const WHATSAPP_NUMBER = '5542999722042';
    const purchaseMessage = `Olá! Quero garantir minha vaga no curso ${course.title}. Podemos prosseguir com a inscrição?`;
    const whatsappPurchaseUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(purchaseMessage)}`;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            aria-modal="true"
            role="dialog"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-[#1e1e1e] border-2 border-[#EACD8C]/50 rounded-2xl shadow-2xl w-full max-w-lg p-8 m-4 text-white transform transition-all duration-300 ease-out scale-95 hover:scale-100"
                style={{
                    boxShadow: '0 0 20px rgba(234, 205, 140, 0.2), 0 0 40px rgba(234, 205, 140, 0.1)',
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Fechar modal"
                >
                    <XIcon className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <h2 className="text-3xl font-playfair font-bold text-[#EACD8C]">{course.title}</h2>
                    <div className="mt-4 flex justify-center gap-4 text-base">
                        <span className="bg-gray-700/50 px-3 py-1 rounded-full text-base">Dificuldade: <span className="font-semibold">{course.difficulty}</span></span>
                    </div>

                    <p className="mt-6 text-xl italic text-gray-300 leading-relaxed border-l-4 border-[#EACD8C] pl-4 text-left">
                        "{randomPhrase}"
                    </p>

                    <div className="mt-6 text-left">
                        <h4 className="font-bold text-white text-lg">Neste curso, o seu foco será:</h4>
                        <p className="text-gray-400 mt-1 text-base">{course.focus}</p>
                    </div>

                    <div className="mt-8">
                        <a
                            href={whatsappPurchaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 w-full px-10 py-4 bg-black text-[#EACD8C] border-2 border-[#EACD8C]/50 font-bold text-lg rounded-full shadow-lg transform hover:scale-105 hover:border-[#EACD8C] transition-all duration-300 ease-in-out"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            Garantir Minha Vaga
                        </a>
                         <button
                            onClick={onClose}
                            className="mt-3 text-base text-gray-500 hover:text-white transition-colors"
                        >
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;