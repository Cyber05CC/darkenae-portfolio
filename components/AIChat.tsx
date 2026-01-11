import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome',
            role: 'model',
            text: "Hi there! I'm darken Ai, your virtual studio assistant. Ask me about rates, availability, or specific skills!",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const responseText = await sendMessageToGemini(userMessage.text);

            const botMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: responseText,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Chat error', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-primary p-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 ease-out hover:scale-110 group animate-float"
            >
                <Sparkles
                    className="text-white group-hover:rotate-12 transition-transform duration-500 ease-out"
                    size={24}
                />
            </button>
        );
    }

    return (
        <div
            className={`fixed z-50 transition-all duration-500 ease-out shadow-2xl border border-primary/20 dark:border-white/10 overflow-hidden flex flex-col
      ${
          isMinimized
              ? 'bottom-6 right-6 w-72 h-14 rounded-t-lg rounded-b-lg bg-surface dark:bg-surface'
              : 'bottom-6 right-6 w-[90vw] md:w-96 h-[500px] rounded-2xl bg-surface dark:bg-surface'
      }`}
        >
            {/* Header */}
            <div
                className="bg-primary p-4 border-b border-primary/10 dark:border-white/10 flex justify-between items-center cursor-pointer"
                onClick={() => !isMinimized && setIsMinimized(true)}
            >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <h3 className="font-bold text-sm tracking-wide text-white">
                        darken Ai{' '}
                        <span className="text-xs font-normal text-white/70 ml-1">BETA</span>
                    </h3>
                </div>
                <div className="flex gap-2 text-white/80">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMinimized(!isMinimized);
                        }}
                        className="hover:text-white transition-colors duration-300"
                    >
                        {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                        className="hover:text-white transition-colors duration-300"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Body */}
            {!isMinimized && (
                <>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background dark:bg-[#1a1a1a]">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${
                                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                                        msg.role === 'user'
                                            ? 'bg-primary text-white rounded-br-none shadow-sm'
                                            : 'bg-white dark:bg-white/10 text-primary dark:text-gray-200 rounded-bl-none border border-primary/10 dark:border-white/5 shadow-sm'
                                    }`}
                                >
                                    {msg.role === 'model' && (
                                        <div className="flex items-center gap-2 mb-1 text-xs text-primary dark:text-gray-400 font-bold uppercase tracking-wider opacity-50">
                                            <Bot size={12} /> Darken Ae
                                        </div>
                                    )}
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-white/10 rounded-2xl rounded-bl-none p-3 border border-primary/10 dark:border-white/5 shadow-sm">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-primary/40 dark:bg-white/40 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-primary/40 dark:bg-white/40 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-primary/40 dark:bg-white/40 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-surface dark:bg-surface border-t border-primary/10 dark:border-white/10">
                        <div className="flex items-center gap-2 bg-background dark:bg-white/5 rounded-full px-4 py-2 border border-primary/10 dark:border-white/10 focus-within:border-primary/50 dark:focus-within:border-white/30 transition-colors duration-300 ease-out">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about rates or skills..."
                                className="flex-1 bg-transparent text-sm text-primary dark:text-white focus:outline-none placeholder-primary/40 dark:placeholder-gray-500 transition-colors duration-300"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className={`p-2 rounded-full transition-all duration-300 ease-out ${
                                    input.trim()
                                        ? 'bg-primary text-white hover:bg-primary/90'
                                        : 'bg-primary/5 dark:bg-white/5 text-primary/30 dark:text-white/20 cursor-not-allowed'
                                }`}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AIChat;
