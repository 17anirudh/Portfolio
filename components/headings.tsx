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
        <h1 ref={nameRef} className="whitespace-pre-wrap break-words uppercase text-[8vw] font-serif" />
    )
}