'use client';
/* 
Headings for all sections which are CSR because of gsap animations
*/

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { annotate } from "rough-notation";
import { skills } from "@/lib/data";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export function HeroHeading() {
    const nameRef = useRef<HTMLHeadingElement | null>(null);
    const tl = gsap.timeline({defaults: { ease: "none" }})

    useGSAP(() => {
        const name = nameRef.current;
        if(!name) return;

        const annotation = annotate(name, { type: "highlight", color: "#061369", animationDuration: 3000 });
        tl.to(name, {
            scrambleText: {
                text: "vedala anirudh",
                chars: "upperCase"
            },
            duration: 1,
            onComplete: () => { annotation.show(); }
        })
    })

    return (
        <h1 ref={nameRef} className="whitespace-pre-wrap wrap-break-words uppercase text-[8vw] font-serif" />
    )
}

export function Skills() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current.children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    const handleMouseEnter = (index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;
        const items = card.querySelectorAll(".skill-item");
        gsap.to(items, {
            y: -3,
            duration: 0.2,
            stagger: 0.03,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;
        const items = card.querySelectorAll(".skill-item");
        gsap.to(items, {
            y: 0,
            duration: 0.3,
            stagger: 0.02,
            ease: "power2.out",
        });
    };

    return (
        <div ref={containerRef} className="flex flex-wrap mt-9 gap-6 w-full justify-center items-stretch px-4">
            {Object.entries(skills).map(([key, value], index) => (
                <div
                    key={key}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className="group flex flex-col items-center bg-muted-foreground border border-border rounded-2xl p-6 w-full sm:w-[calc(50%-12px)] lg:w-[280px] hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    <h3 className="text-xl sm:text-2xl font-semibold mb-5 capitalize text-foreground">{key}</h3>
                    <ul className="flex flex-wrap gap-2.5 justify-center">
                        {value.map((skill) => (
                            <li
                                key={skill}
                                className="skill-item px-3 py-1.5 bg-muted border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-pointer"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}