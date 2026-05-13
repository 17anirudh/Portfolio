import PremiumButton from "./ui/premium-button"
import { skills, experiences, projects, socials } from "@/lib/data"
import Image from "next/image"
import Projects from "./projects"

export function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-center items-center min-h-screen w-full gap-3">
            <h1 className="font-heading text-4xl sm:text-7xl lg:text-9xl font-bold">Vedala <span className="underline text-destructive/75">Anirudh</span></h1>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl">Cloud AI Engineer</h2>
            <p className="text-lg sm:text-2xl lg:text-3xl italic wrap-break-word p-3">Loves to build resilient and scalable systems</p>
            <div className="relative w-48 aspect-video">
                <Image 
                    src="https://media1.tenor.com/m/tiSXRVM4lwoAAAAd/battle-ship-mjc-full-throttle.gif" 
                    alt="Docker ship" 
                    fill 
                    className="rounded-xl hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="flex flex-row gap-4 mt-4">
                <PremiumButton
                    component="a" 
                    href="https://www.linkedin.com/in/vedala-anirudh/"
                    target="_blank"
                    text="Let's talk" 
                />
                <PremiumButton 
                    component="a"
                    href="/Resume.pdf"
                    target="_blank"
                    text="View Resume" 
                />
            </div>
        </section>
    )
}

export function SkillsSection() {
    return (
        <section id="skills" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl italic font-light">Skills</h2>
            <div className="flex flex-wrap gap-4 w-full p-4 items-center justify-center">
                {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="p-6 rounded-xl border border-gray-200 min-w-72 sm:min-w-sm max-h-60">
                    <h3 className="font-bold capitalize mb-4 text-primary">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <p className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                        <span key={index} className="border p-2 text-sm rounded-full font-medium ">{item}</span>
                    ))}
                    </p>
                </div>
                ))}
            </div>
        </section>
    )
}

export function JourneySection() {
    return (
        <section id="journey" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl italic font-light">Journey</h2>
            <ul className="list-item list-none justify-center items-center">
                {experiences.map((item, index) => (
                    <li key={index} className="p-3 flex flex-wrap gap-3 items-center mt-9">
                        {/* Image container */}
                        <div className="relative w-[5vw] h-[5vw]">
                            {item.picture && (
                                <Image 
                                    src={item.picture} 
                                    alt={item.company + ' logo'} 
                                    fill
                                    sizes="5vw"
                                    loading="lazy" 
                                    className="rounded-full hover:scale-125 transition-all duration-500"
                                />
                            )}
                            
                        </div>
                        <div className="flex flex-col gap-2 min-w-[20vw]">
                            <h3 className="text-lg sm:text-[1.5vw]">{item.company}</h3>
                            <p>{item.role}</p>
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

export function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl italic font-light">Projects</h2>
            <div className="flex flex-wrap gap-4 w-full p-4 items-center justify-center">
            {projects.map((item, index) => (
                <Projects key={index} {...item} />
            ))}
            </div>
        </section>
    )
}

export function ContactSection() {
    return (
        <section id="contact" className="flex flex-col justify-center items-center min-h-screen w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl italic font-light">Contact</h2>
            <div className="flex flex-wrap items-center justify-center p-4 gap-5">
                {socials.map((item, index) => (
                    <PremiumButton key={index} component="a" href={item.link} target="_blank" rel="noopener noreferrer" text={item.brand}>
                        {item.brand_img && <Image src={item.brand_img} alt={item.brand} width={50} height={50} />}
                        <span title={item.username}>{item.brand}</span>
                    </PremiumButton>
                ))}
            </div>
        </section>
    )
}