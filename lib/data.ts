/*
Static data for the application
*/

import { json } from "stream/consumers";

type socialsType = {
    appName: string;
    userName: string;
    profileLink: string;
}

type skillType = {
    TypeScript: string[];
    Python: string[];
    Data: string[];
    Concepts: string[];
    Languages: string[];
}

export type projectKeyType = "Quirks" | "ATS Score" | "Deepfake Detector" | "Hash Bytes";

export type projectType = {
    title: projectKeyType;
    cursor: string;
    live?: string;
    github: string;
    domain: string;
    tech: string;
    desc: string[];
    special?: string;
}


export const socials: socialsType[] = [
    {
        appName: "GitHub",
        userName: "17anirudh",
        profileLink: "https://github.com/17anirudh"
    },
    {
        appName: "Instgram",
        userName: "17veed",
        profileLink: "https://instagram.com/17veed"
    },
    {
        appName: "LinkedIn",
        userName: "vedala-anirudh",
        profileLink: "https://linkedin.com/in/vedala-anirudh"
    },
    {
        appName: "Twitter",
        userName: "17anirudh",
        profileLink: "https://twitter.com/17anirudh"
    },
    {
        appName: "Email",
        userName: "vedalaanirudh@gmail.com",
        profileLink: "mailto:vedalaanirudh@gmail.com"
    },
    {
        appName: "Leetcode",
        userName: "17anirudh",
        profileLink: "https://leetcode.com/u/17anirudh"
    }
] as const

export const skills: skillType = {
    TypeScript: ["Next.js", "React", "Node.js", "Bun.js", "Prisma", "Nest.js", "Zod", "Tanstack Query"],
    Python: ["FastAPI", "Numpy", "Langgraph", "Pydantic", "Pandas"],
    Data: ["PostgreSQL", "SQLite"],
    Concepts: ["OOP", "APIs (REST, WS)", "Networking (HTTP, TCP/IP)", "DSA (basics)"],
    Languages: ["Typescript", "Python", "Java", "SQL"]
} as const

export const projects: projectType[] = [
    {
        title: "Quirks",
        cursor: "https://raw.githubusercontent.com/17anirudh/quirks/refs/heads/master/assets/Landing.png",
        github: "https://github.com/17anirudh/quirks",
        domain: "Full Stack Development",
        tech: "Tanstack Router, TypeScript, TailwindCSS, Shadcn/ui, Supabase, Elysia.js, Bun.js",
        desc: [
            "Opinionated social media application encouraging networking and forced cooldowns",
            "Has a unique feature of server side enforced cooldowns for interactions",
            "No ads, No quick interactions (likes and comments)" 
        ],
        live: "https://quirks.vercel.app",
        special: "Deployed, currently publishing reserch paper"
    },
    {
        title: "ATS Score",
        cursor: "https://raw.githubusercontent.com/17anirudh/ATS-Score/refs/heads/main/ss.png",
        github: "https://github.com/17anirudh/ATS-Score",
        domain: "LLMs",
        tech: "Ollama, HTML, CSS, Flask, PyPDF2, python docx, SSML",
        desc: [
            "ATS Score is a web application that helps you optimize your resume for ATS (Applicant Tracking Systems)",
            "It uses Ollama to generate a score for your resume based on how well it matches the job description",
            "It also provides suggestions to improve your resume"
        ],
    },
    {
        title: "Deepfake Detector",
        cursor: "https://raw.githubusercontent.com/17anirudh/deepfake-detection/master/landing.png",
        github: "https://github.com/17anirudh/deepfake-detection",
        domain: "Computer Vision and RAG",
        tech: "Next.js, TypeScript, SQLite, FastAPI, Bun.js, ChromaDB, SQLModel, Pytorch, Langchain, ultralytics, OpenCV, Numpy, tqdm and 5 DL models",
        desc: [
            "Advanced web application designed to combat the spread of misinformation by detecting deepfakes",
            "News Verification: Analyze text input to detect unverified, speculative, or factually lacking claims using a RAG web search.",
            "Media Analysis: Detect deepfakes in videos and images",
        ],
        special: "EfficientNetV2 gives near-Xception performance but with better scaling and training efficiency, so it’s a more balanced choice for practical deployment"
    },
    {
        title: "Hash Bytes",
        cursor: "https://raw.githubusercontent.com/17anirudh/hash-bytes/master/Landing.png",
        github: "https://github.com/17anirudh/hash-bytes",
        domain: "Symmetric cryptography",
        tech: "Next.js, Shad-cn, TailwindCSS, FastAPI, Pydantic, SQLite, SQLAlchemy, pycryptodome, REST API",
        desc: [
            "Hash Bytes is a educational tool to quickly encrypt and decrypt any content using different cryptographic algorithms and revelant cipher modes along with explanations.",
            "Can quicky encrypt/decrypt plain text/file to quickly understand most common symmetric encryption algorithms"
        ],
        special: "Visual learning makes any concept easy :)"
    }
] as const;

