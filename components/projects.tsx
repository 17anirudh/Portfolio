'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/data";
import type { projectType, projectKeyType } from "@/lib/data";
import { XIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import BtnStyled from "./button";
import { ScrollArea } from "./ui/scroll-area";

export default function ProjectSection() {
    const [img, setImg] = useState<string | null>(null);
    const [title, setTitle] = useState<projectKeyType | null>(null);

    useEffect(() => {
        title ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '' 
        return () => { document.body.style.overflow = ''; };
    }, [title]);

    return (
        <section suppressHydrationWarning id="projects" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-[4vw] italic font-light mb-27">Projects</h2>
            <div className="flex flex-col justify-between w-full">
                {projects.map((project, index) => (
                    <div key={index} className="cursor-pointer border flex justify-center items-center w-full h-27 relative">
                        <button
                            className="hover:underline border-none bg-transparent h-fit text-lg sm:text-[2vw] italic font-light cursor-none w-full relative"
                            onClick={() => setTitle(project.title)}
                            onMouseEnter={() => setImg(project.cursor)}
                            onMouseLeave={() => setImg(null)}
                        >
                            {project.title}
                        </button>
                    </div>
                    
                ))}
                {img && <Cursor img={img} />}
                {title && <Overlay title={title} onClose={() => setTitle(null)} />}
            </div>
        </section>
    );
}

function Cursor({ img }: {img: string}) {
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.8 });
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

        const moveCursor = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        gsap.to(cursor, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out"
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    });

    return (
        <div ref={cursorRef} className="pointer-events-none absolute left-100 top-2 z-100 w-[35vw] h-[35vh]">
            <Image
                src={img}
                alt="cursor"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    )
}

function Overlay({ title, onClose }: { title: projectKeyType; onClose: () => void }) {
    const data = projects.find((project) => project.title === title) as projectType;
    const overlayRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const overlay = overlayRef.current;
        if (!overlay) return;

        gsap.set(overlay, { opacity: 0, scale: 0.9 });
        gsap.to(overlay, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power3.out"
        });
    });

    const handleClose = () => {
        const overlay = overlayRef.current;
        if (!overlay) return;

        gsap.to(overlay, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power3.in",
            onComplete: onClose
        });
    };

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-200 h-screen w-screen flex flex-col items-center justify-center bg-inherit backdrop-blur-sm p-8"
            onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
        >
            <ScrollArea className="max-w-2xl w-full h-full">
                <div className="bg-inherit border rounded-lg p-6 shadow-lg flex flex-col justify-center">
                    <div className="w-full aspect-video relative mb-4 rounded overflow-hidden">
                        <Image src={data.cursor} alt={data.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover"/>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center justify-center">
                        <h3 className="text-2xl font-semibold">{data.title}</h3>
                        <button className="cursor-pointer bg-black rounded-full" onClick={handleClose}><XIcon color="red"/></button>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center mb-4">
                        <BtnStyled type="a" redirect={data.github} display="GitHub" />
                        {data.live && <BtnStyled type="a" redirect={data.live} display="Live" green pulse />}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {data.tech.split(", ").map((tech, index) => (
                            <span key={index} className="inline-block bg-sidebar-primary/80 text-sidebar-primary-foreground px-2 py-1 rounded text-sm">{tech}</span>
                        ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        {data.desc.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                    {data.special && <p className="text-chart-4 italic">{data.special}</p>}
                </div>
            </ScrollArea>
        </div>
    )
}