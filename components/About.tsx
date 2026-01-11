import React from 'react';
import { Layers, Aperture, Film, Sparkles, Cpu, Code2 } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="bg-white rounded-[32px] p-8 md:p-16 shadow-sm border border-white/50 min-h-[85vh] flex flex-col justify-center"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="lg:sticky lg:top-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                        Video Editor & Motion Designer{' '}
                    </h2>
                    <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
                        <p>
                            With 2 years of intensive experience in Video Editing and Motion Design,
                            I create dynamic visual narratives that captivate and engage.
                        </p>
                        <p>
                            I push the boundaries of creativity by leveraging Generative AI to
                            produce crazy images and videos. Beyond the timeline, I'm a technical
                            creator—I've built custom Plugins for Adobe After Effects and write
                            complex expressions to automate animation workflows.
                        </p>
                        <p>
                            When I'm not rendering pixels, I'm exploring my passion for Frontend
                            development, bridging the gap between motion and interactive web
                            experiences.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-100">
                        <div>
                            <span className="block text-3xl font-bold text-gray-900">2+</span>
                            <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                                Years Exp.
                            </span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-gray-900">45+</span>
                            <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                                Projects
                            </span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-gray-900">1</span>
                            <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                                Plugin Launched
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-[24px] p-8 border border-gray-100 h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        Expertise & Tools
                        <span className="px-2 py-0.5 rounded-full bg-white border border-gray-200 text-xs text-gray-400 font-normal">
                            Updated 2025
                        </span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Item 1 */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-500 ease-out group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary group-hover:scale-100 transition-transform duration-500 ease-out flex-shrink-0">
                                <Layers size={24} />
                                <img src="../assets/aeLogo.png" alt="" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">After Effects</h4>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    Motion Design / Video Edit
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-500 ease-out group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary group-hover:scale-100 transition-transform duration-500 ease-out flex-shrink-0">
                                <Film size={24} />
                                <img src="../assets/ppLogo.png" alt="" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Premiere Pro</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Cuts / Sound Design</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-500 ease-out group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary group-hover:scale-100 transition-transform duration-500 ease-out flex-shrink-0">
                                <Sparkles size={24} />
                                <img src="../assets/davinciLogo.png" alt="" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">DaVinci Resolve</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Color Grading</p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-500 ease-out group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary group-hover:scale-100 transition-transform duration-500 ease-out flex-shrink-0">
                                <Code2 size={24} />
                                <img src="../assets/veoLogo.jpg" alt="" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Veo 3.1</h4>
                                <p className="text-xs text-gray-500 mt-0.5">AI Video Generation</p>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-500 ease-out group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary group-hover:scale-100 transition-transform duration-500 ease-out flex-shrink-0">
                                <Cpu size={24} />
                                <img src="../assets/bananaLogo.png" alt="" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Nano Banana</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Image Generation</p>
                            </div>
                        </div>

                        {/* Item 6 */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-500 ease-out group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary group-hover:scale-100 transition-transform duration-500 ease-out flex-shrink-0">
                                <Aperture size={24} />
                                <img src="../assets/vsLogo.png" alt="" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Vs Code</h4>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    Plugin / Expression (Just my hobby)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-primary/80 leading-relaxed">
                        <strong>Note:</strong> I combine technical skills in coding with artistic
                        vision to build unique tools and visuals.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
