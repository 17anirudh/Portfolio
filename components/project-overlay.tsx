'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects, type projectType } from "@/lib/data";
import { ArrowUpRight, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ProjectOverlay() {
    const [activeProject, setActiveProject] = useState<projectType | null>(null);
    const [hoveredProject, setHoveredProject] = useState<projectType | null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const overlayRef = useRef<HTMLDivElement>(null);
    const overlayContentRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    // Animate overlay open/close
    useGSAP(() => {
        if (activeProject && overlayRef.current && overlayContentRef.current) {
            // Open animation
            gsap.fromTo(overlayRef.current,
                { opacity: 0, visibility: "hidden" },
                { opacity: 1, visibility: "visible", duration: 0.3, ease: "power2.out" }
            );
            gsap.fromTo(overlayContentRef.current,
                { opacity: 0, y: 20, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out", delay: 0.1 }
            );
        } else if (!activeProject && overlayRef.current) {
            // Close animation
            gsap.to(overlayRef.current, {
                opacity: 0,
                visibility: "hidden",
                duration: 0.25,
                ease: "power2.in"
            });
        }
    }, { dependencies: [activeProject] });

    // Animate cursor
    useGSAP(() => {
        if (cursorRef.current && hoveredProject) {
            gsap.to(cursorRef.current, {
                x: cursorPos.x,
                y: cursorPos.y,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    }, { dependencies: [cursorPos, hoveredProject] });

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const openOverlay = (project: projectType) => {
        setActiveProject(project);
    };

    const closeOverlay = () => {
        setActiveProject(null);
    };

    return (
        <>
            {/* Custom cursor image */}
            {hoveredProject && (
                <div
                    ref={cursorRef}
                    className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 opacity-0"
                    style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        animation: "fadeIn 0.2s ease forwards"
                    }}
                    suppressHydrationWarning
                >
                    <div className="relative w-48 h-32 overflow-hidden rounded-lg shadow-2xl border border-white/20">
                        <Image
                            src={hoveredProject.cursor}
                            alt={hoveredProject.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Project list */}
            <div className="flex flex-col w-full" suppressHydrationWarning>
                {projects.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredProject(item)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onMouseMove={handleMouseMove}
                        onClick={() => openOverlay(item)}
                        className="group relative border-b border-dashed border-neutral-700/50 py-6 px-2 sm:px-5 lg:px-9 cursor-none hover:bg-neutral-900/30 transition-colors duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-tight">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-3 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                                <span className="text-sm hidden sm:block opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    View Project
                                </span>
                                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>
                        </div>
                        <p className="text-neutral-500 text-sm mt-1">{item.domain}</p>
                    </div>
                ))}
            </div>

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-40 opacity-0 invisible"
                style={{ visibility: "hidden" }}
                suppressHydrationWarning
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={closeOverlay}
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                    <div
                        ref={overlayContentRef}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800"
                    >
                        {/* Close button */}
                        <button
                            onClick={closeOverlay}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-all duration-200"
                        >
                            <XIcon className="w-6 h-6" />
                        </button>

                        {/* Scrollable content */}
                        <div className="overflow-y-auto max-h-[90vh]">
                            {/* Project Image */}
                            {activeProject && (
                                <div className="relative w-full h-48 sm:h-64 lg:h-80">
                                    <Image
                                        src={activeProject.cursor}
                                        alt={activeProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                                </div>
                            )}

                            {/* Project Details */}
                            <div className="p-6 sm:p-8 space-y-6">
                                {activeProject && (
                                    <>
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2">
                                                {activeProject.title}
                                            </h2>
                                            <p className="text-neutral-400">{activeProject.domain}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Tech Stack</h3>
                                            <p className="text-neutral-300">{activeProject.tech}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">Description</h3>
                                            <ul className="space-y-2">
                                                {activeProject.desc.map((desc, i) => (
                                                    <li key={i} className="text-neutral-300 flex items-start gap-2">
                                                        <span className="text-neutral-500 mt-1.5">•</span>
                                                        <span>{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {activeProject.special && (
                                            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg p-4">
                                                <p className="text-sm text-neutral-400 italic">{activeProject.special}</p>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <a
                                                href={activeProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors duration-200"
                                            >
                                                View on GitHub
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                            {activeProject.live && (
                                                <a
                                                    href={activeProject.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 rounded-full font-medium hover:bg-neutral-800 transition-colors duration-200"
                                                >
                                                    Live Demo
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
            `}</style>
        </>
    );
}
