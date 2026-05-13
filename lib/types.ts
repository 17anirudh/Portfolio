type Social = {
    brand: string;
    brand_img?: string;
    link: string;
    username: string;
    user_img?: string;
}

type Skill = {
    framework: string[]
    languages: string[]
    cloud: string[]
    ai: string[]
    devops: string[]
    databases: string[]
}

type Project = {
    name: string
    picture: string
    overview: string
    description: string
    tech: string[]
    git: string
    live?: string
    focus?: string
    special?: string
}

type Experience = {
    type: 'internship' | 'full-time' | 'part-time' | 'contract'
    company: string
    picture?: string
    role: string
    duration: string
    description: string[]
    tech: string[]
}

export type { Social, Skill, Project, Experience }