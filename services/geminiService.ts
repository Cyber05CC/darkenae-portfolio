import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const getAIClient = (): GoogleGenAI => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error('API_KEY environment variable is missing');
    }
    return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): Chat => {
    if (chatSession) return chatSession;

    try {
        const ai = getAIClient();
        chatSession = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
            },
        });
        return chatSession;
    } catch (error) {
        console.error('Failed to initialize chat:', error);
        throw error;
    }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    if (!chatSession) {
        initializeChat();
    }

    if (!chatSession) {
        return 'Error: AI Service unavailable.';
    }

    try {
        const response: GenerateContentResponse = await chatSession.sendMessage({ message });
        return response.text || "I didn't quite catch that. Could you rephrase?";
    } catch (error) {
        console.error('Gemini API Error:', error);
        return "I'm having trouble connecting to the neural network right now. Please try again later.";
    }
};
