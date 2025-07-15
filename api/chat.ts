import { GoogleGenAI, Chat } from '@google/genai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// As informações dos cursos são movidas para o backend para construir o system prompt
const coursesData = [
    { 
      id: 1, 
      title: 'Lash Profissional', 
      uniqueDescription: 'Domine a técnica fundamental que é a base de toda grande artista de cílios. Perfeição em cada fio.',
      price: 'R$ 899', 
      includedCategories: ['Plano Profissional'], 
      includedFeatures: ['Apostila detalhada', 'Mentoria exclusiva', 'Grupo de WhatsApp geral (lashes e fornecedores)'],
      difficulty: 'Iniciante',
    },
    { 
      id: 2, 
      title: 'Lash Empreendedora', 
      uniqueDescription: 'Vá além da técnica. Aprenda a gerir, divulgar e construir uma marca de sucesso no universo da beleza.',
      price: 'R$ 1099', 
      includedCategories: ['Plano Profissional', 'Plano Empreendedora'], 
      includedFeatures: ['Apostila detalhada', 'Mentoria exclusiva', 'Grupo de WhatsApp geral (lashes e fornecedores)', 'Grupo exclusivo de empreendedoras'],
      difficulty: 'Intermediário',
    },
    { 
      id: 3, 
      title: 'Lash Empresária VIP', 
      uniqueDescription: 'A elite da formação. Integre tecnologia de ponta, networking de alto nível e a consultoria InteligenciArte.IA com 50% de desconto exclusivo para escalar seu império.',
      price: 'R$ 1499', 
      includedCategories: ['Plano Profissional', 'Plano Empreendedora', 'Plano Empresária VIP', 'Bônus & Suporte'], 
      includedFeatures: ['Apostila detalhada', 'Mentoria exclusiva', 'Grupo de WhatsApp geral (lashes e fornecedores)', 'Grupo exclusivo de empreendedoras', 'Grupo de networking de alto padrão (Inteligenciart.IA)'],
      difficulty: 'Avançado / VIP',
    },
];

const courseInfoForAI = JSON.stringify(coursesData.map(c => ({
    title: c.title,
    description: c.uniqueDescription,
    price: c.price,
    features: c.includedCategories.concat(c.includedFeatures || []),
    target_audience: c.difficulty
})));

// A chave de API é lida de forma segura das variáveis de ambiente do servidor Vercel
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const chatConfig = {
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction: `Você é 'Luxy', a assistente virtual da Luxury Studio de Beleza. Você é amigável, elegante e especialista nos cursos de lash designer de Joyci Almeida. 
        Sua missão é tirar dúvidas e inspirar futuras alunas. Use as informações a seguir para basear suas respostas.
        
        **Informações dos Cursos:**
        ${courseInfoForAI}

        **Instruções:**
        1. Seja sempre cordial e motivadora. Use emojis de brilho ✨ e coração 💖 com moderação para manter um tom sofisticado.
        2. Responda perguntas sobre os cursos, preços, conteúdo e para quem cada um é indicado, usando os dados fornecidos.
        3. NÃO invente informações. Se não souber a resposta, diga "Essa é uma excelente pergunta! Para detalhes específicos, recomendo falar diretamente com a Joyci pelo WhatsApp. Ela terá o maior prazer em ajudar."
        4. Ao final de cada resposta útil, incentive a ação, por exemplo: "Ficou interessada? Clicar no botão 'Quero Ser VIP' é o próximo passo para transformar sua carreira!".
        5. Se perguntarem como se inscrever, instrua a pessoa a clicar no botão de CTA do curso desejado na página ou a entrar em contato pelo WhatsApp.
        6. Mantenha as respostas concisas e fáceis de ler. Se a primeira mensagem for 'Olá', responda com a sua saudação inicial.`,
    },
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const chat: Chat = ai.chats.create({
      ...chatConfig,
      history: history || [], // Usa o histórico recebido ou um array vazio
    });

    const response = await chat.sendMessage({ message });

    // Enviamos de volta a resposta e o histórico atualizado
    res.status(200).json({ 
        text: response.text,
        history: await chat.getHistory() 
    });

  } catch (error: any) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
