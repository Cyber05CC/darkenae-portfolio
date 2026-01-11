import React, { useState } from 'react';
import {
    Menu,
    X,
    Home,
    Briefcase,
    User,
    Mail,
    Instagram,
    Send,
    Box,
    ArrowLeft,
} from 'lucide-react';
import { Section, Theme } from '../types';

import logo from '../assets/logo.png';
import goodLuck from '../assets/goodLuck.png';

interface NavbarProps {
    activeSection: Section;
    scrollToSection: (section: Section) => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isPurchaseMode?: boolean;
    onClosePurchase?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    activeSection,
    scrollToSection,
    isPurchaseMode = false,
    onClosePurchase,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { id: Section.HERO, label: 'Home', icon: Home },
        { id: Section.WORK, label: 'Projects', icon: Briefcase },
        { id: Section.PLUGINS, label: 'Tools', icon: Box },
        { id: Section.ABOUT, label: 'About', icon: User },
        { id: Section.CONTACT, label: 'Contact', icon: Mail },
    ];

    return (
        <>
            {/* Desktop Sidebar Card */}
            <div className="hidden md:flex flex-col h-full bg-white rounded-[32px] p-8 shadow-sm border border-white/50 relative overflow-hidden">
                {/* Header / Logo - Always visible but might animate */}
                <div
                    className="flex items-center gap-3 mb-10 cursor-pointer group z-20"
                    onClick={() => {
                        if (isPurchaseMode && onClosePurchase) onClosePurchase();
                        scrollToSection(Section.HERO);
                    }}
                >
                    <img
                        src={logo}
                        alt="Darken Ae Logo"
                        className="w-12 h-12 rounded-xl shadow-lg shadow-primary/30 object-cover"
                    />
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 leading-none">
                            Arslon Boysinov
                        </h1>
                        <span className="text-xs text-gray-400 font-medium">@darken_ae</span>
                    </div>
                </div>

                {/* Main Navigation - Fades out in Purchase Mode */}
                <div
                    className={`flex-1 flex flex-col justify-between transition-all duration-500 ease-in-out ${
                        isPurchaseMode
                            ? 'opacity-0 translate-x-[-20px] pointer-events-none absolute inset-0 top-28 left-8 right-8 bottom-8'
                            : 'opacity-100 translate-x-0'
                    }`}
                >
                    <nav className="space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-500 ease-out group ${
                                    activeSection === link.id
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <link.icon
                                    size={20}
                                    className={`transition-colors duration-500 ease-out ${
                                        activeSection === link.id
                                            ? 'text-primary'
                                            : 'text-gray-400 group-hover:text-gray-600'
                                    }`}
                                />
                                {link.label}
                                <span
                                    className={`ml-auto w-1.5 h-1.5 rounded-full bg-primary transition-all duration-500 ease-out ${
                                        activeSection === link.id
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-0'
                                    }`}
                                ></span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto">
                        <div className="p-4 bg-gray-50 rounded-2xl mb-6">
                            <p className="text-xs text-gray-500 mb-3 font-medium">
                                Connect with me
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.instagram.com/darken_ae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    className="flex-1 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-500 ease-out shadow-sm group"
                                    title="Instagram"
                                    target="_blank"
                                >
                                    <Instagram
                                        size={28}
                                        className="group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </a>
                                <a
                                    href="https://t.me/darken_edit"
                                    className="flex-1 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-500 ease-out shadow-sm group"
                                    title="Telegram"
                                    target="_blank"
                                >
                                    <Send
                                        size={28}
                                        className="group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={() => scrollToSection(Section.CONTACT)}
                            className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-500 ease-out"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>

                {/* Back Button - Fades in during Purchase Mode */}
                <div
                    className={`absolute top-28 left-8 right-8 bottom-8 flex flex-col transition-all duration-500 ease-in-out ${
                        isPurchaseMode
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-[20px] pointer-events-none'
                    }`}
                >
                    <div className="flex-1">
                        <button
                            onClick={onClosePurchase}
                            className="group flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-primary transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                                <ArrowLeft
                                    size={20}
                                    className="group-hover:-translate-x-1 transition-transform duration-500 ease-out"
                                />
                            </div>
                            Back to Tools
                        </button>

                        <p className="mt-8 text-gray-500 leading-relaxed flex items-center gap-1">
                            <img className="w-8" src={goodLuck} alt="" />
                            Good luck bro!
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Darken Ae Logo"
                        className="w-12 h-12 rounded-xl shadow-lg shadow-primary/30 object-cover"
                    />
                    <span className="font-bold text-gray-900">Arslon</span>
                </div>

                {isPurchaseMode ? (
                    <button
                        onClick={onClosePurchase}
                        className="p-2 bg-gray-100 rounded-lg text-gray-900"
                    >
                        <ArrowLeft size={24} />
                    </button>
                ) : (
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && !isPurchaseMode && (
                <div className="md:hidden absolute top-30 left-4 right-4 bg-white rounded-2xl shadow-xl z-50 p-4 border border-gray-100">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    scrollToSection(link.id);
                                    setIsOpen(false);
                                }}
                                className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors duration-300 ease-out ${
                                    activeSection === link.id
                                        ? 'bg-gray-100 text-primary'
                                        : 'text-gray-600'
                                }`}
                            >
                                <link.icon size={18} />
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
