'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState, useEffect } from "react"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { XIcon } from "lucide-react"

gsap.registerPlugin(ScrollSmoother)

const navItems = [
    { label: "Home", target: "hero" },
    { label: "Skills", target: "skills" },
    { label: "Journey", target: "journey" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "Contact" },
] as const;

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const navOverlayRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => { setIsOpen(true) }
    const closeNav = () => { setIsOpen(false) }

    const scrollTo = (target: string) => {
        closeNav();
        setTimeout(() => {
            const smoother = ScrollSmoother.get();
            if (smoother) {
                smoother.scrollTo(`#${target}`, true, "center center");
            }
        }, 50);
    }

    // Animate nav overlay open/close
    useGSAP(() => {
        if (!navOverlayRef.current) return;

        if (isOpen) {
            gsap.fromTo(navOverlayRef.current,
                { clipPath: "circle(0% at 50% 0%)", opacity: 0 },
                { clipPath: "circle(150% at 50% 0%)", opacity: 1, duration: 0.6, ease: "power3.inOut" }
            );
            // Animate nav items
            gsap.fromTo(".nav-item",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.2, ease: "power2.out" }
            );
        }
    }, { dependencies: [isOpen], scope: navOverlayRef });

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                closeNav();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    // Prevent body scroll when nav is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <header ref={headerRef} className="sticky top-0 left-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
                    <button
                        onClick={openNav}
                        className="font-heading font-bold text-xl cursor-pointer hover:opacity-70 transition-opacity mx-auto"
                    >
                        Anirudh
                    </button>
                </div>
            </header>

            {/* Full Viewport Nav Overlay */}
            <div
                ref={navOverlayRef}
                className={`fixed inset-0 z-100 bg-transparent backdrop-blur-xl ${isOpen ? 'visible' : 'invisible'}`}
            >
                {/* Close Button */}
                <button
                    onClick={closeNav}
                    className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity cursor-pointer"
                    aria-label="Close menu"
                >
                    <XIcon />
                </button>

                {/* Nav Items */}
                <nav className="h-full flex flex-col items-center justify-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => scrollTo(item.target)}
                            className="nav-item text-3xl md:text-5xl font-heading font-bold hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    )
}