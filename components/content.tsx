/*
Content for all sections which use partial rendering due to CSR headings 
*/
import { experience, socials } from "@/lib/data";
import BtnStyled from "./button";
import { Description, HeroHeading, ScrambleText, Skills } from "./client";
import Image from "next/image";
import { CrowdCanvas } from "./ui/crowd";
import Redirect from "./ui/redirect";

export function HeroSection() {
    return (
        <section suppressHydrationWarning id="hero" className="flex flex-col justify-center items-center min-h-screen w-full">
            <HeroHeading />
            <h2 className="text-[4vw] font-light">Aspiring Software Engineer</h2>
            <Description />
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
        <section suppressHydrationWarning id="skills" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-[4vw] italic font-light">Skills</h2>
            <Skills />
        </section>
    )
}

export function JourneySection() {
    return (
        <section suppressHydrationWarning id="journey" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-[4vw] italic font-light">Journey</h2>
            <ul className="list-item list-none justify-center items-center">
                {experience.map((item, index) => (
                    <li key={index} className="p-3 flex flex-wrap gap-3 items-center mt-9">
                        {/* Image container */}
                        <div className="relative w-[5vw] h-[5vw]">
                            <Image 
                                src={item.companyImage} 
                                alt={item.companyName + ' logo'} 
                                fill
                                sizes="5vw"
                                loading="lazy" 
                                className="rounded-full hover:scale-125 transition-all duration-500"   
                            />
                        </div>
                        <div className="flex flex-col gap-2 min-w-[20vw]">
                            <h3 className="text-lg sm:text-[1.5vw]">{item.companyName}</h3>
                            <ScrambleText text={item.designation} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="capitalize text-lg sm:text-[1.5vw]">{item.type}</h4>
                            <h4 className="text-lg sm:text-[1.5vw]">{item.duration}</h4>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export function ContactSection() {
    return (
      <section suppressHydrationWarning id="Contact" className="flex flex-col justify-center items-center min-h-[90vh] w-full mt-9 relative">
            <h2 className="text-[4vw] italic font-light absolute top-0 mx-auto">Contact Me</h2>
                <div className="absolute top-30 z-30 flex flex-wrap gap-2 items-center justify-center"> 
                    {socials.map((item, index) => (
                        <Redirect
                            key={index}
                            redirectUrl={item.profileLink}
                            text={item.appName}
                        />
                    ))}
                </div>
            <CrowdCanvas src="/peeps.png" rows={15} cols={7} />
        </section>  
    )
}