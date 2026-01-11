import React from 'react';
import {
    X,
    Check,
    ShoppingBag,
    Box,
    Star,
    Shield,
    Zap,
    Sparkles,
    CreditCard,
    ArrowLeft,
} from 'lucide-react';
import { TOOLS } from '../constants';

interface PurchaseWindowProps {
    onClose: () => void;
}

const PurchaseWindow: React.FC<PurchaseWindowProps> = ({ onClose }) => {
    const mainPlugin = TOOLS.find((t) => t.category === 'Plugin');

    if (!mainPlugin) return null;

    return (
        <div className="w-full min-h-full bg-white rounded-[32px] shadow-sm border border-white/50 overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-500">
            {/* Mobile Close/Back Button (visible only on small screens if needed, mostly handled by sidebar on desktop) */}
            <div className="md:hidden absolute top-4 left-4 z-20">
                <button
                    onClick={onClose}
                    className="p-2 bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg"
                >
                    <ArrowLeft size={24} />
                </button>
            </div>

            {/* Hero Header */}
            <div className="relative h-64 md:h-96 bg-gray-900 shrink-0">
                <video
                    src={mainPlugin.previewUrl}
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
                        <Sparkles size={12} className="text-indigo-400" />
                        Version 1.0 Available
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-2 shadow-black drop-shadow-lg">
                        {mainPlugin.title}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                        The ultimate text animations and transitions tool for professional motion
                        designers.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 p-8 md:p-12 bg-white">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
                    {/* Left Col: Details */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                About the tool
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {mainPlugin.description} 15+ ready-made trending text animations,
                                constantly added transitions and effects, and ready-made Speed
                                ​​Graph curves, all in one place.
                            </p>
                            {/* <p className="text-gray-600 text-lg leading-relaxed mt-4">
                                Used by artists at top studios including ManvsMachine, Buck, and
                                Giant Ant.
                            </p> */}
                        </div>

                        {/* Features Grid */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Core Capabilities
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary shrink-0">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">GPU Accelerated</h4>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Blazing fast render times even at 4K resolution.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary shrink-0">
                                        <Box size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Native Plugin</h4>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Not a script. A true JS plugin for maximum stability.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary shrink-0">
                                        <Check size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">32bpc Color</h4>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Full HDR support for high-end compositing workflows.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary shrink-0">
                                        <Sparkles size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Easing Controls</h4>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Custom easing curves for channel separation distance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Checkout Card */}
                    <div className="relative">
                        <div className="sticky top-8 rounded-3xl bg-gray-900 text-white p-8 shadow-2xl shadow-gray-900/20">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-gray-400 font-medium">Standard License</p>
                                    <h2 className="text-4xl font-bold text-white mt-2">
                                        {mainPlugin.price}
                                    </h2>
                                </div>
                                <div className="flex gap-1 text-amber-400">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                            </div>

                            <button className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 hover:bg-indigo-500 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mb-6">
                                <ShoppingBag size={20} />
                                Add to Cart
                            </button>

                            <div className="space-y-4 border-t border-gray-800 pt-6">
                                <div className="flex items-center gap-3 text-gray-300 text-sm">
                                    <Check size={16} className="text-green-400" />
                                    <span>Instant Download</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300 text-sm">
                                    <Check size={16} className="text-green-400" />
                                    <span>Compatible with CS6 - 2024</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300 text-sm">
                                    <Check size={16} className="text-green-400" />
                                    <span>Free Updates Forever</span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
                                <Shield size={12} />
                                SECURE CHECKOUT POWERED BY GUMROAD
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseWindow;
