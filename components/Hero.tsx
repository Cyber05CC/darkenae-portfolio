import React, { useRef, useEffect, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../types';
import { PROJECTS } from '../constants';

interface HeroProps {
    scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Physics & Animation Refs
    const scrollPos = useRef(0);
    const currentSpeed = useRef(0.5); // Increased default auto-scroll speed
    const isDraggingRef = useRef(false);
    const startX = useRef(0);
    const lastClientX = useRef(0);
    const lastTimestamp = useRef(0);
    const velocity = useRef(0);
    const clickPreventRef = useRef(false);

    // Robust infinite scrolling with smaller cards
    // Memoized to prevent recreation on every render
    const allProjects = useMemo(() => Array(12).fill(PROJECTS).flat(), []);

    useEffect(() => {
        let animationFrameId: number;
        const container = scrollContainerRef.current;

        const animate = () => {
            if (!container) return;

            const totalWidth = container.scrollWidth;
            const singleSetWidth = totalWidth / 12;

            // Initialize position to middle (Set 4) if at 0
            if (scrollPos.current === 0 && singleSetWidth > 0) {
                scrollPos.current = singleSetWidth * 4;
                container.scrollLeft = singleSetWidth * 4;
            }

            // Physics Loop
            if (!isDraggingRef.current) {
                // Friction/Decay: Smoothly return to base speed (0.5)
                currentSpeed.current = currentSpeed.current * 0.98 + 0.5 * 0.02;
                scrollPos.current += currentSpeed.current;
                container.scrollLeft = scrollPos.current;
            } else {
                // Sync ref with DOM during manual interactions
                scrollPos.current = container.scrollLeft;
            }

            // Infinite Loop Logic (Wrap around)
            if (singleSetWidth > 0) {
                // Right Boundary: If we reach Set 8, jump back to Set 4
                if (container.scrollLeft >= singleSetWidth * 8) {
                    const offset = container.scrollLeft - singleSetWidth * 8;
                    container.scrollLeft = singleSetWidth * 4 + offset;
                    scrollPos.current = container.scrollLeft;
                }
                // Left Boundary: If we reach Set 1, jump forward to Set 5
                else if (container.scrollLeft <= singleSetWidth) {
                    const offset = singleSetWidth - container.scrollLeft;
                    container.scrollLeft = singleSetWidth * 5 - offset;
                    scrollPos.current = container.scrollLeft;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [allProjects]);

    // --- MOUSE HANDLERS ---
    const handleMouseDown = (e: React.MouseEvent) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        clickPreventRef.current = false;

        startX.current = e.pageX;
        lastClientX.current = e.pageX;
        lastTimestamp.current = Date.now();

        velocity.current = 0;
        currentSpeed.current = 0; // Stop auto-scroll immediately
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current) return;
        e.preventDefault();

        const x = e.pageX;
        const dx = x - lastClientX.current;

        if (Math.abs(x - startX.current) > 5) {
            clickPreventRef.current = true;
        }

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= dx;
            scrollPos.current = scrollContainerRef.current.scrollLeft;
        }

        // Calculate Velocity
        const now = Date.now();
        const dt = now - lastTimestamp.current;
        if (dt > 0) {
            const instantVelocity = (-dx / dt) * 16;
            velocity.current = instantVelocity * 0.6 + velocity.current * 0.4;
        }

        lastClientX.current = x;
        lastTimestamp.current = now;
    };

    const handleMouseUp = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);
        // Apply momentum on release
        currentSpeed.current = velocity.current;
    };

    const handleMouseLeave = () => {
        if (isDraggingRef.current) handleMouseUp();
    };

    // --- TOUCH HANDLERS (Mobile) ---
    const handleTouchStart = (e: React.TouchEvent) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        clickPreventRef.current = false;

        // Use the first touch point
        const touch = e.touches[0];
        startX.current = touch.pageX;
        lastClientX.current = touch.pageX;
        lastTimestamp.current = Date.now();

        velocity.current = 0;
        currentSpeed.current = 0;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDraggingRef.current) return;

        const touch = e.touches[0];
        const x = touch.pageX;
        const dx = x - lastClientX.current;

        // Check if dragging significantly to prevent accidental clicks
        if (Math.abs(x - startX.current) > 5) {
            clickPreventRef.current = true;
        }

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= dx;
            scrollPos.current = scrollContainerRef.current.scrollLeft;
        }

        // Calculate Velocity
        const now = Date.now();
        const dt = now - lastTimestamp.current;
        if (dt > 0) {
            const instantVelocity = (-dx / dt) * 16;
            velocity.current = instantVelocity * 0.6 + velocity.current * 0.4;
        }

        lastClientX.current = x;
        lastTimestamp.current = now;
    };

    const handleTouchEnd = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);
        // Apply momentum
        currentSpeed.current = velocity.current;
    };

    const handleCardClick = () => {
        if (!clickPreventRef.current) {
            scrollToSection(Section.WORK);
        }
    };

    return (
        <section
            id="hero"
            className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-white/50 relative overflow-hidden flex flex-col justify-between min-h-[45vh]"
        >
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>

            {/* Content Container - Top Part */}
            <div className="relative z-10 w-full flex flex-col items-start text-left gap-4 pt-2 md:pt-4 px-2 md:px-4">
                {/* Text Content */}
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-black text-sm font-semibold mb-4 border border-indigo-100 w-fit">
                        <span>Hello 🖐🏻 I'm darken, and here's...</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-4 w-full">
                        Motion Designer - Video Editor{' '}
                        <span className="text-primary">AI Artist</span>
                    </h1>

                    <p className="text-lg text-gray-500 w-full mb-6 leading-relaxed font-medium max-w-none">
                        I craft high-impact motion design, mind-bending AI visuals, and custom
                        creative tools.
                    </p>

                    <div className="w-full mb-2">
                        <button
                            onClick={() => scrollToSection(Section.WORK)}
                            className="w-full px-8 py-3.5 bg-black text-white rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-500 ease-out flex items-center justify-center gap-2 active:scale-95 transform"
                        >
                            Check my work
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Container - Bottom Part */}
            <div className="relative z-10 w-full mt-4">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-3 overflow-x-hidden px-2 md:px-4 pb-2 select-none touch-pan-y"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ scrollbarWidth: 'none', cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    {allProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            onClick={handleCardClick}
                            className="min-w-[140px] w-[140px] md:min-w-[180px] md:w-[180px] flex-shrink-0 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm pointer-events-auto transition-transform duration-500 ease-out active:scale-95"
                        >
                            <div className="aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 relative pointer-events-none">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
