/*
Static data for the application
*/

type socialsType = {
    appName: string;
    userName: string;
    avatar?: string;
    profileLink: string;
}

type skillType = {
    TypeScript: string[];
    Python: string[];
    Data: string[];
    Concepts: string[];
    Languages: string[];
}

export const socials: socialsType[] = [
    {
        appName: "GitHub",
        userName: "17anirudh",
        avatar: "https://avatars.githubusercontent.com/u/139898545?v=4",
        profileLink: "https://github.com/17anirudh"
    }
]

export const skills: skillType = {
    TypeScript: ["Next.js", "React", "Node.js", "Bun.js", "Prisma", "Nest.js", "Zod", "Tanstack Query"],
    Python: ["FastAPI", "Numpy", "Langgraph", "Pydantic", "Pandas"],
    Data: ["PostgreSQL", "SQLite"],
    Concepts: ["OOP", "APIs (REST, WS)", "Networking (HTTP, TCP/IP)", "DSA (basics)"],
    Languages: ["Typescript", "Python", "Java", "SQL"]
}
