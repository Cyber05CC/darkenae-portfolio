import React, { useState } from 'react';
import { ExternalLink, Instagram, Play } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
    const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

    return (
        <section id="work">
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-white/50 mb-3">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Selected Projects
                </h2>
                <p className="text-gray-500 text-lg w-full">
                    A collection of motion, direction, and design work created for clients
                    worldwide.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
                {PROJECTS.map((project) => {
                    const isPlaying = playingVideoId === project.id;

                    return (
                        <div
                            key={project.id}
                            className="bg-white rounded-[32px] p-3 shadow-sm border border-white/50 hover:shadow-xl transition-all duration-500 ease-out group flex flex-col h-full hover:-translate-y-1"
                        >
                            {/* Media Container */}
                            <div
                                className="relative aspect-[4/7] rounded-[24px] overflow-hidden bg-gray-100 mb-4"
                                onClick={() => setPlayingVideoId(isPlaying ? null : project.id)}
                            >
                                {isPlaying ? (
                                    <video
                                        src={project.videoUrl}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-cover"
                                        onEnded={() => setPlayingVideoId(null)}
                                        playsInline
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 ease-out"></div>

                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-gray-900 uppercase tracking-wide transition-opacity duration-500 ease-out">
                                            {project.category}
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-90 group-hover:scale-100">
                                            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 shadow-lg">
                                                <Play
                                                    size={28}
                                                    fill="currentColor"
                                                    className="ml-1 cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-2 flex-1 flex flex-col">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300 ease-out">
                                        {project.title}
                                    </h3>
                                    <a
                                        href="https://www.instagram.com/darken_ae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                        className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-primary hover:bg-indigo-50 transition-all duration-300 ease-out"
                                        target="_blank"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
