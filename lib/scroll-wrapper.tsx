'use client';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "./utils";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
type Props = {
    children: ReactNode;
    className?: ComponentProps<"div">["className"]
}

export default function ScrollWrapper({...props}: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    let smoother = useRef<ScrollSmoother | null>(null);

    useGSAP(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        if(!ScrollSmoother.get() || !smoother.current) {
            smoother.current = ScrollSmoother.create({
                wrapper: container,
                content: content,
                smooth: 1,
                effects: true,
            });
        }

        const elements = gsap.utils.toArray<HTMLElement>(':scope > *', content);

        elements.forEach((element) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom+=100',
                        end: 'bottom top-=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full min-h-screen">
            <main ref={contentRef} className={cn(props.className)}>
                {props.children}
            </main>
        </div>
    );
}