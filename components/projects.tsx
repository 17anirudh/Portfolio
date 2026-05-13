import type { Project } from "@/lib/types";
import type { Key } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import PremiumButton from "./ui/premium-button";

type T = Project & { key: Key }

export default function Projects({ ...project }: T) {
    return (
        <Dialog modal key={project.key}>
        <DialogTrigger className="border p-2 cursor-pointer flex flex-col gap-1 hover:scale-125 hover:bg-foreground duration-200 transition-all">
            <Image src={project.picture} alt={project.name + 'photo'} width={400} height={400} />
            <h3 className="text-lg sm:text-xl lg:text-2xl">{project.name}</h3>
            <p className="max-w-sm sm:max-w-[400px]">{project.overview}</p>
        </DialogTrigger>
        <DialogContent className="bg-foreground text-background w-[90vw] max-w-[90vw]" closeBtnClassName="text-destructive hover:text-destructive/80 cursor-pointer hover:bg-transparent">
            <DialogHeader>
                <DialogTitle>{project.name}</DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-[40vh] overflow-hidden">
                <Image src={project.picture} alt={project.name + 'photo'} fill />
            </div>
            <DialogDescription>
                <p className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="p-1 border rounded-md text-background text-xs">{tech}</span>
                    ))}
                </p>
                <p className="mt-4">{project.description}</p>
                <div id="cta" className="flex gap-2 mt-4">
                    <PremiumButton component="a" text="Git" href={project.git} target="_blank" className="border" />
                    {project.live && <PremiumButton component="a" text="Live" href={project.live} target="_blank" />}
                </div>
                {project.focus && <p className="mt-4">{project.focus}</p>}
                {project.special && <p className="mt-4">{project.special}</p>}
            </DialogDescription>
        </DialogContent>
        </Dialog>
    );
}