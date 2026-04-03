/*
Content for all sections which use partial rendering due to CSR headings 
*/
import BtnStyled from "./button-styled";
import { HeroHeading, Skills } from "./client";

export function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-center items-center min-h-screen w-full">
            <HeroHeading />
            <h2 className="text-[4vw] italic font-light">Software Engineer - I</h2>
            <h2 className="text-[2.5vw] font-light flex flex-wrap gap-2 items-center">
                <span className="italic text-[1.75vw]">from</span>Visakhapatnam, Andhra Pradesh
            </h2>
            <div className="flex flex-row gap-4">
                <BtnStyled 
                    type="a" 
                    redirect="https://www.linkedin.com/in/vedala-anirudh/" 
                    display="Let's talk" 
                />
                <BtnStyled 
                    type="a" 
                    redirect="/Resume.pdf" 
                    display="View Resume" 
                />
            </div>
        </section>
    )
}

export function SkillsSection() {
    return (
        <section id="skills" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-[4vw] italic font-light">Skills</h2>
            <Skills />
        </section>
    )
}