import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Plugins from './components/Plugins';
import About from './components/About';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import PurchaseWindow from './components/PurchaseWindow';
import { Section, Theme } from './types';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
    const [theme, setTheme] = useState<Theme>('light');
    const [isPurchaseMode, setIsPurchaseMode] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (section: Section) => {
        if (isPurchaseMode) {
            setIsPurchaseMode(false);
            // Allow state update to propagate before scrolling
            setTimeout(() => {
                const element = document.getElementById(section);
                const container = mainRef.current;
                if (element && container) {
                    const offset = 16;
                    const elementTop = element.getBoundingClientRect().top;
                    const containerTop = container.getBoundingClientRect().top;
                    const currentScroll = container.scrollTop;
                    const targetPosition = currentScroll + elementTop - containerTop - offset;
                    container.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    setActiveSection(section);
                }
            }, 100);
            return;
        }

        const element = document.getElementById(section);
        const container = mainRef.current;

        if (element && container) {
            const offset = 16;
            const elementTop = element.getBoundingClientRect().top;
            const containerTop = container.getBoundingClientRect().top;
            const currentScroll = container.scrollTop;
            const targetPosition = currentScroll + elementTop - containerTop - offset;
            container.scrollTo({ top: targetPosition, behavior: 'smooth' });
            setActiveSection(section);
        }
    };

    // Scroll spy
    useEffect(() => {
        const container = mainRef.current;
        if (!container || isPurchaseMode) return;

        const handleScroll = () => {
            const sections = Object.values(Section).filter((s) => s !== Section.CHAT);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 300 && rect.bottom >= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isPurchaseMode]);

    return (
        <div className="bg-[#F2F4F7] h-screen text-gray-900 selection:bg-primary selection:text-white flex flex-col md:flex-row overflow-hidden relative">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-80 flex-shrink-0 z-50 p-3 md:h-full transition-all duration-500">
                <Navbar
                    activeSection={activeSection}
                    scrollToSection={scrollToSection}
                    theme={theme}
                    setTheme={setTheme}
                    isPurchaseMode={isPurchaseMode}
                    onClosePurchase={() => setIsPurchaseMode(false)}
                />
            </aside>

            {/* Main Content Area Wrapper */}
            <main className="flex-1 relative h-full w-full overflow-hidden p-3 md:pl-0">
                {/* Feed Container - Slides Left when Purchase Mode is Active */}
                <div
                    ref={mainRef}
                    className={`absolute inset-0 p-3 md:pl-0 overflow-y-auto scroll-smooth transition-all duration-500 ease-in-out transform ${
                        isPurchaseMode
                            ? 'opacity-0 -translate-x-10 pointer-events-none'
                            : 'opacity-100 translate-x-0'
                    }`}
                >
                    <div className="space-y-3 pb-8">
                        <Hero scrollToSection={scrollToSection} />
                        <Portfolio />
                        <Plugins onOpenPurchase={() => setIsPurchaseMode(true)} />
                        <About />
                        <Contact />
                        <footer className="py-8 text-center text-gray-400 text-sm">
                            <p>&copy; {new Date().getFullYear()} darken_ae</p>
                        </footer>
                    </div>
                </div>

                {/* Purchase Window Container - Slides In From Right */}
                <div
                    className={`absolute inset-0 p-3 md:pl-0 overflow-y-auto transition-all duration-500 ease-in-out transform ${
                        isPurchaseMode
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-10 pointer-events-none'
                    }`}
                >
                    <div className="h-full">
                        <PurchaseWindow onClose={() => setIsPurchaseMode(false)} />
                    </div>
                </div>
            </main>

            {/* Chat is outside main content to float above everything */}
            <AIChat />
        </div>
    );
};

export default App;
