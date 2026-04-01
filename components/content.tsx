/*
Content for all sections which use partial rendering due to CSR headings 
*/
import { HeroHeading } from "./headings";
import { MapPinHouseIcon } from "lucide-react";


export function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-center items-center min-h-screen w-full">
            <HeroHeading />
            <h2 className="text-[4vw] italic font-light">Software Engineer - I</h2>
            <h2 className="text-[2.5vw] font-light flex flex-wrap gap-2 items-center">
                <span className="italic text-[1.75vw]">from</span>Visakhapatnam, Andhra Pradesh
            </h2>
        </section>
    )
}