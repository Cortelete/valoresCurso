import React from 'react';
import { InfoModalData } from '../types';
import XIcon from './icons/XIcon';

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: InfoModalData | null;
}

const InfoModal = ({ isOpen, onClose, data }: InfoModalProps) => {
    if (!isOpen || !data) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-opacity duration-300"
            aria-modal="true"
            role="dialog"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-[#1a1a1a] border border-[#EACD8C]/30 rounded-2xl shadow-2xl w-full max-w-md p-8 text-white transform transition-all duration-300 ease-out scale-95"
                style={{
                    boxShadow: '0 0 30px rgba(234, 205, 140, 0.15)',
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    aria-label="Fechar modal"
                >
                    <XIcon className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <h2 className="text-2xl font-playfair font-bold text-[#EACD8C]">{data.title}</h2>
                    <p className="mt-4 text-gray-300 leading-relaxed text-lg">
                        {data.hook}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;