import React, { useState } from 'react';
import { Copy, Check, ShoppingBag, Box, Sparkles, Terminal } from 'lucide-react';
import { TOOLS } from '../constants';

interface PluginsProps {
    onOpenPurchase: () => void;
}

const Plugins: React.FC<PluginsProps> = ({ onOpenPurchase }) => {
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const handleCopy = (code: string, id: number) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const mainPlugin = TOOLS.find((t) => t.category === 'Plugin');
    const otherTools = TOOLS.filter((t) => t.category !== 'Plugin');

    return (
        <section
            id="plugins"
            className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-white/50 min-h-[50vh] relative"
        >
            <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    Expression <span className="text-primary">& Plugin</span>
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl">
                    A selection of plugins, scripts, and expressions I've built to speed up my
                    workflow. Available for the motion design community.
                </p>
            </div>

            {/* Featured Plugin - Large Card */}
            {mainPlugin && (
                <div className="mb-8 group relative overflow-hidden rounded-[32px] bg-[#000000] text-white p-8 md:p-12 shadow-2xl shadow-indigo-900/20 transition-all duration-500 border border-gray-800">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                    <div className="relative z-10 grid lg:grid-cols-5 gap-10 items-center">
                        {/* Text Content - Spans 3 cols */}
                        <div className="lg:col-span-3 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider">
                                <Sparkles size={12} className="text-indigo-400" />
                                Featured Product
                            </div>

                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                    {mainPlugin.title}
                                </h3>
                                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                                    {mainPlugin.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <button
                                    onClick={onOpenPurchase}
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-colors duration-500 ease-out flex items-center gap-2 transform active:scale-95 transition-transform"
                                >
                                    <ShoppingBag size={20} />
                                    Get {mainPlugin.title} — {mainPlugin.price}
                                </button>
                                <div className="flex items-center gap-2 text-sm text-gray-500 px-4">
                                    <Box size={16} />
                                    <span>Native AE Plugin</span>
                                </div>
                            </div>
                        </div>

                        {/* Preview - Spans 2 cols */}
                        <div className="lg:col-span-2 w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-white/10 shadow-2xl relative group-hover:shadow-indigo-500/10 transition-shadow duration-500 ease-out">
                            <video
                                src={mainPlugin.previewUrl}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Other Tools - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherTools.map((tool) => (
                    <div
                        key={tool.id}
                        className="group bg-gray-50 rounded-[24px] p-6 border border-gray-100 hover:bg-white hover:shadow-xl transition-shadow duration-500 ease-out flex flex-col h-full"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md ${
                                        tool.category === 'Script'
                                            ? 'bg-emerald-500'
                                            : 'bg-gray-700'
                                    }`}
                                >
                                    {tool.category === 'Script' ? (
                                        <Terminal size={20} />
                                    ) : (
                                        <span className="text-sm font-mono">fx</span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                        {tool.title}
                                    </h3>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                        {tool.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content: Video & Code Only */}
                        <div className="flex-1 flex flex-col gap-4">
                            {/* Preview Area */}
                            <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-900 relative shadow-inner border border-black/5 group-hover:border-primary/20 transition-colors shrink-0">
                                <video
                                    src={tool.previewUrl}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>

                            {/* Code Snippet (if available) */}
                            {tool.codeSnippet && (
                                <div className="relative group/code flex-1">
                                    <div className="absolute -top-3 left-3 px-2 py-0.5 bg-gray-800 rounded text-[10px] text-gray-400 font-mono z-10">
                                        expression.js
                                    </div>
                                    <pre className="bg-gray-900 rounded-xl p-3 pt-4 overflow-x-hidden text-[10px] text-gray-300 font-mono border border-gray-800 h-full min-h-[120px] relative">
                                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
                                        <code>{tool.codeSnippet}</code>
                                    </pre>
                                    <button
                                        onClick={() => handleCopy(tool.codeSnippet!, tool.id)}
                                        className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 backdrop-blur rounded-md text-white transition-opacity duration-500 ease-out opacity-0 group-hover/code:opacity-100 z-20"
                                        title="Copy Code"
                                    >
                                        {copiedId === tool.id ? (
                                            <Check size={12} />
                                        ) : (
                                            <Copy size={12} />
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Plugins;
