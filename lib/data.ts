import type { Social, Skill, Project, Experience } from "./types";

const socials: Social[] = [
    {
        brand: "GitHub",
        username: "17anirudh",
        link: "https://github.com/17anirudh"
    },
    {
        brand: "Instgram",
        username: "17veed",
        link: "https://instagram.com/17veed"
    },
    {
        brand: "LinkedIn",
        username: "vedala-anirudh",
        link: "https://linkedin.com/in/vedala-anirudh"
    },
    {
        brand: "Twitter",
        username: "17anirudh",
        link: "https://twitter.com/17anirudh"
    },
    {
        brand: "Email",
        username: "vedalaanirudh@gmail.com",
        link: "mailto:vedalaanirudh@gmail.com"
    },
    {
        brand: "Leetcode",
        username: "17anirudh",
        link: "https://leetcode.com/u/17anirudh"
    }
] as const

const skills: Skill = {
    framework: ["Next.js", "Spring Boot", "FastAPI", "Tensorflow"],
    cloud: ["GCP", "AWS", "Firebase", "Supabase"],
    devops: ["Docker", "GitHub Actions", "Nginx"],
    ai: ["Claude API", "Claude Code", "Claude Cowork", "Claude Agent SDK", "CrewAI", "Langchain"],
    languages: ["Python", "Java", "JavaScript", "TypeScript"],
    databases: ["PostgreSQL", "MongoDB", "Redis"]
} as const

const projects: Project[] = [
    {
        name: "Ledger",
        picture: "https://raw.githubusercontent.com/17anirudh/bird/main/assets/landing.png",
        overview: "Highly reliable and compliant ledger application for seamless wealth management and transfer",
        description: "Bird is a robust financial ledger system designed for high reliability and compliance, enabling secure and efficient wealth management and transfer operations.",
        tech: ["Spring Boot", "Spring Security", "Spring Data JPA", "Apache Kafka", "Gradle", "JUnit", "PostgreSQL", "Next.js", "React", "Biome", "Docker", "GitHub Actions"],
        git: "https://github.com/17anirudh/bird",
        focus: "Reliable, Tolerant and Event Driven Architecture"
    },
    {
        name: "Quirks",
        picture: "https://raw.githubusercontent.com/17anirudh/quirks/refs/heads/master/assets/Landing.png",
        overview: "Constraint driven Social Media Application",
        description: "Opinionated Social media application with enforced cooldowns for better phone usage, purposely disabled quick interactions like likes and comments for a meaningful experience",
        tech: ["Tanstack Router", "TypeScript", "TailwindCSS", "Shadcn/ui", "Supabase", "Elysia.js", "Bun.js"],
        git: "https://github.com/17anirudh/quirks",
        focus: "TypeScript Full Stack"
    },
    {
        name: "ATS Score",
        picture: "https://raw.githubusercontent.com/17anirudh/ATS-Score/refs/heads/main/ss.png",
        git: "https://github.com/17anirudh/ATS-Score",
        focus: "LLMs",
        tech: ["Ollama", "HTML", "CSS", "Flask", "PyPDF2", "python docx", "SSML"],
        description: "antardvara.ssl is a web application that helps you optimize your resume for ATS (Applicant Tracking Systems) It uses Ollama to generate a score for your resume based on how well it matches the job description It also provides suggestions to improve your resume",
        overview: "antardvara.ssl is ATS Score predictor"
    },
    {
        name: "Deepfake Detector",
        picture: "https://raw.githubusercontent.com/17anirudh/deepfake-detection/master/landing.png",
        git: "https://github.com/17anirudh/deepfake-detection",
        focus: "Computer Vision and RAG",
        tech: ["Next.js", "TypeScript", "SQLite", "FastAPI", "Bun.js", "ChromaDB", "SQLModel", "Pytorch", "Langchain", "ultralytics", "OpenCV", "Numpy", "tqdm", "5 DL models"],
        description: "Advanced web application designed to combat the spread of misinformation by detecting deepfakes",
        overview: "Advanced web application designed to combat the spread of misinformation by detecting deepfakes",
        special: "EfficientNetV2 gives near-Xception performance but with better scaling and training efficiency, so it’s a more balanced choice for practical deployment"
    },
    {
        name: "Hash Bytes",
        picture: "https://raw.githubusercontent.com/17anirudh/hash-bytes/master/Landing.png",
        git: "https://github.com/17anirudh/hash-bytes",
        focus: "Symmetric cryptography",
        tech: ["Next.js", "Shad-cn", "TailwindCSS", "FastAPI", "Pydantic", "SQLite", "SQLAlchemy", "pycryptodome", "REST API"],
        description: "Hash Bytes is a educational tool to quickly encrypt and decrypt any content using different cryptographic algorithms and revelant cipher modes along with explanations.",
        overview: "Hash Bytes is a educational tool to quickly encrypt and decrypt any content using different cryptographic algorithms and revelant cipher modes along with explanations.",
        special: "Visual learning makes any concept easy :)"
    }
] as const;

const experiences: Experience[] = [
    {
        type: "internship",
        picture: "https://play-lh.googleusercontent.com/OGgZaAeiZKigVObicUptFJoWvGs4pgpCfunMeR-QWYKhn0UvJSxcOZcFJMCEiYBfflGxTHlbz-Ad5158yno-2g=w480-h960-rw",
        company: "Grug.io",
        role: "Software Engineer Intern",
        description: [
            "Reduced S2S (Speech-to-Speech) voice jitter by 78% by engineering a unified synchronization logic using react hooks and genkit helper functions (model-specific and websockts)", 
            "Extended tool-calling framework to automate few business specific needs replacing manual form-entry with seamless automated extraction, improving operational UX efficiency by 76%."
        ],
        duration: "March 2026 - April 2026",
        tech: ["Expo (React Native)", "Firebase (Firestore, Cloud Functions)", "Genkit"]
    },
    {
        picture: "https://play-lh.googleusercontent.com/Fjga-fnKPNPSg1_3mVis70od3LrCSvrL1lmwl2123h_RJ4DxlUjCQLym05LqDapG2Q=w480-h960-rw",
        company: "Infosys Springboard",
        role: "AI Project Intern",
        type: "internship",
        description: ["Engineered a high-performance asynchronous storywriting platform that integrates genAI with a custom RAG and is optimized for non-blocking network I/O, reducing system latency by 20% while maintaining seamless real-time interactivity for writers."],
        duration: "December 2025 - March 2026",
        tech: ["Next.js", "FastAPI", "ChromaDB", "Ollama (qwen 2.5)"]
    },
    {
        picture: "https://www.ndimdelhi.org/wp-content/uploads/2023/10/All_India_Council_for_Technical_Education_logo.png",
        company: "AICTE",
        role: "Full Stack Developer",
        type: "internship",
        description: [
            "Developed an education blog for students to understand the importance of symmetric key encryption in cybersecurity.", 
            "Implemented a realtime and auditable fastapi backend with SQLite database where the actual encryption algorithm is stored and retrieved."
        ],
        duration: "May 2025 - September 2025",
        tech: ["Next.js", "FastAPI", "SQLite", "pycryptodome"]
    }
] as const;

export { socials, skills, projects, experiences };
