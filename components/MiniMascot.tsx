import React from 'react';

const MiniMascot = () => {
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
                {/* Dourado delicado para gradientes */}
                <linearGradient id="miniGoldenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FDF5E6" /> {/* Old Lace - muito claro, dourado sutil */}
                    <stop offset="50%" stopColor="#F0E68C" /> {/* Khaki - dourado suave */}
                    <stop offset="100%" stopColor="#DAA520" /> {/* Goldenrod - ainda adiciona profundidade */}
                </linearGradient>
                {/* Degradê para a bola de lã */}
                <linearGradient id="miniYarnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDF5E6" />
                    <stop offset="100%" stopColor="#F0E68C" />
                </linearGradient>
                {/* Filtro para brilho sutil nas asas */}
                <filter id="miniWingGlow">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.1" result="blur" />
                    <feFlood floodColor="#F0E68C" floodOpacity="0.3" result="glowColor" />
                    <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic"/>
                        <feMergeNode in="glow"/>
                    </feMerge>
                </filter>
            </defs>

            {/* Asas Angelicaiis e Mais Baixo com Gomos de Borboleta (MINI) */}
            <g className="mini-mascot-wings" filter="url(#miniWingGlow)">
                {/* Asa Direita (Superior e Inferior) */}
                <path d="M 65 65 Q 73 55, 80 58 C 82 62, 76 67, 72 65 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.4" />
                <path d="M 65 68 Q 69 73, 76 70 C 78 73, 70 76, 65 68 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.4" />
                {/* Asa Esquerda (Superior e Inferior) */}
                <path d="M 35 65 Q 27 55, 20 58 C 18 62, 24 67, 28 65 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.4" />
                <path d="M 35 68 Q 31 73, 24 70 C 22 73, 30 76, 35 68 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.4" />
            </g>

            {/* Corpo do Gato (MINI) */}
            <path d="M 38 55 C 30 65, 30 75, 50 80 C 70 75, 70 65, 62 55 Z" fill="#F8F8F0" stroke="#333333" strokeWidth="0.8" />

            {/* Patas Dianteiras (MINI) */}
            <circle cx="45" cy="70" r="3.5" fill="#F8F8F0" stroke="#333333" strokeWidth="0.8" />
            <circle cx="55" cy="70" r="3.5" fill="#F8F8F0" stroke="#333333" strokeWidth="0.8" />

            {/* Bola de Lã (MINI) */}
            <circle cx="50" cy="65" r="5" fill="url(#miniYarnGradient)" stroke="#333333" strokeWidth="0.8" />
            <path d="M 46 63 Q 48 65, 49 66.5" stroke="#333333" strokeWidth="0.5" fill="none" />
            <path d="M 54 63 Q 52 65, 51 66.5" stroke="#333333" strokeWidth="0.5" fill="none" />
            <path d="M 47 67 Q 50 66, 53 67" stroke="#333333" strokeWidth="0.5" fill="none" />

            {/* Cauda (MINI) */}
            <path d="M 68 60 Q 72 68, 66 70 C 64 71, 60 70, 60 68 Q 64 60, 68 60 Z" fill="#F8F8F0" stroke="#333333" strokeWidth="0.8" />
            <circle cx="60" cy="68" r="2" fill="#333333" /> {/* Ponta da cauda */}

            {/* Cabeça do Gato (MINI) */}
            <circle cx="50" cy="45" r="12" fill="#F8F8F0" stroke="#333333" strokeWidth="0.8" />

            {/* Orelhas (MINI) */}
            <path d="M 35 38 L 43 30 Q 45 29, 46 30 L 35 38 Z" fill="#F8F8F0" stroke="#333333" strokeWidth="0.8" />
            <path d="M 65 38 L 57 30 Q 55 29, 54 30 L 65 38 Z" fill="#F8F8F0" stroke="#333333" strokeWidth="0.8" />
            {/* Dentro das Orelhas (MINI) */}
            <path d="M 39 38.5 L 42 33 L 43 37 Z" fill="#333333" />
            <path d="M 61 38.5 L 58 33 L 57 37 Z" fill="#333333" />

            {/* Coroa Dourada (MINI) */}
            <g>
                {/* Base da coroa */}
                <path d="M 45 27 H 55 V 28 H 45 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.5" />
                {/* Pontas da coroa */}
                <path d="M 46 27 L 47 25 L 48 27 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.5" />
                <path d="M 49 27 L 50 24 L 51 27 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.5" />
                <path d="M 52 27 L 53 25 L 54 27 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.5" />
                {/* Pequenos brilhos/gemas */}
                <circle cx="47" cy="25.5" r="0.3" fill="white" />
                <circle cx="50" cy="24.5" r="0.4" fill="white" />
                <circle cx="53" cy="25.5" r="0.3" fill="white" />
            </g>

            {/* Chifre de Unicórnio (MINI) */}
            <path d="M 49 26 L 51 26 L 50 21 Z" fill="url(#miniGoldenGradient)" stroke="#333333" strokeWidth="0.8" />
            <path d="M 49.5 25.5 L 49.8 24.5 M 49.8 24.5 L 50 23.5 M 50 23.5 L 50.2 22.5" stroke="#333333" strokeWidth="0.3" strokeLinecap="round" />

            {/* Olhos (MINI) */}
            <g>
                <circle cx="40" cy="43" r="4" fill="#333333" />
                <circle cx="60" cy="43" r="4" fill="#333333" />
                <g>
                    <circle cx="39" cy="42" r="1" fill="white" />
                    <circle cx="41" cy="42" r="0.5" fill="white" />
                    <circle cx="59" cy="42" r="1" fill="white" />
                    <circle cx="61" cy="42" r="0.5" fill="white" />
                </g>
            </g>

            {/* Cílios (MINI) */}
            <path d="M 36 41 Q 35 40, 36 39 M 37 41 Q 36 40, 37 39 M 38 41 Q 37 40, 38 39" stroke="#333333" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M 64 41 Q 65 40, 64 39 M 63 41 Q 64 40, 63 39 M 62 41 Q 63 40, 62 39" stroke="#333333" strokeWidth="0.5" strokeLinecap="round" />

            {/* Nariz (MINI) */}
            <path d="M 50 47 L 49 48 Q 50 49, 51 48 Z" fill="#333333" />

            {/* Boca (MINI) */}
            <path d="M 49 48 Q 48 49, 47 48.5" stroke="#333333" strokeWidth="0.5" fill="none" strokeLinecap="round" />
            <path d="M 51 48 Q 52 49, 53 48.5" stroke="#333333" strokeWidth="0.5" fill="none" strokeLinecap="round" />

            {/* Bigodes (MINI) */}
            <path d="M 30 46 L 38 46" stroke="#333333" strokeWidth="0.3" strokeLinecap="round" />
            <path d="M 30 47 L 38 47" stroke="#333333" strokeWidth="0.3" strokeLinecap="round" />
            <path d="M 70 46 L 62 46" stroke="#333333" strokeWidth="0.3" strokeLinecap="round" />
            <path d="M 70 47 L 62 47" stroke="#333333" strokeWidth="0.3" strokeLinecap="round" />

            {/* Glitter/Faíscas sutis (MINI) */}
            <circle cx="25" cy="50" r="0.4" fill="#F0E68C" opacity="0.6" />
            <circle cx="75" cy="52" r="0.3" fill="#F0E68C" opacity="0.5" />
        </svg>
    );
}

export default MiniMascot;