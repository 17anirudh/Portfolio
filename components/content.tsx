/*
Content for all sections which use partial rendering due to CSR headings 
*/
import { experience } from "@/lib/data";
import BtnStyled from "./button";
import { HeroHeading, ScrambleText, Skills } from "./client";
import Image from "next/image";
import { Skiper39 } from "./ui/crowd";

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

export function JourneySection() {
    return (
        <section id="journey" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-[4vw] italic font-light">Journey</h2>
            <ul className="list-item list-none justify-center items-center">
                {experience.map((item, index) => (
                    <li key={index} className="flex flex-wrap gap-3 items-center mt-9">
                        {/* Image container */}
                        <div className="relative w-[5vw] h-[5vw]">
                            <Image 
                                src={item.companyImage} 
                                alt={item.companyName + ' logo'} 
                                fill
                                loading="lazy" 
                                className="rounded-full hover:scale-125 transition-all duration-500"   
                            />
                        </div>
                        <div className="flex flex-col gap-2 min-w-[20vw]">
                            <h3 className="text-[1.5vw]">{item.companyName}</h3>
                            <ScrambleText text={item.designation} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="capitalize text-[1.25vw]">{item.type}</h4>
                            <h4 className="text-[1.25vw]">{item.duration}</h4>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export function ContactSection() {
    return (
      <section id="Contact" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-[4vw] italic font-light">Contact Me</h2>
            <Skiper39>
                
            </Skiper39>
        </section>  
    )
}