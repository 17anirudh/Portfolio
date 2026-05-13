"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

const navItems = [
    { label: "Home", target: "hero" },
    { label: "Skills", target: "skills" },
    { label: "Journey", target: "journey" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
] as const;

export default function Header() {

    function scrollToSection(target: string) {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className="sticky top-0 left-0 w-full z-50">
            <Dialog modal>
            <DialogTrigger className="flex items-center justify-center text-2xl mb-9 p-2 cursor-pointer">Menu</DialogTrigger>
            <DialogContent className="bg-transparent text-background" closeBtnClassName="text-destructive hover:text-destructive hover:bg-transparent duration-200 transition-all cursor-pointer">
                <DialogHeader>
                    <DialogTitle className="text-2xl mb-9 p-2 cursor-pointer">Menu</DialogTitle>
                </DialogHeader>
                {navItems.map((item) => (
                    <div key={item.target}>
                        <DialogClose 
                            className="block w-full text-left px-4 py-2 hover:underline text-background text-xl font-bold cursor-pointer hover:text-primary"
                            onClick={() => scrollToSection(item.target)}
                        >
                            {item.label}
                        </DialogClose>
                    </div>
                ))}
            </DialogContent>
            </Dialog>
        </header>
    )
}