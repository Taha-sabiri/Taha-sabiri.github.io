
export interface Root {
    info: Info[]
    skills: Skill[]
    familerWith: FamilerWith[]
    experience: Experience[]
    project: Project[]
    licenses: License[]
    social: Social[]
}

export interface Info {
    id: number
    desc: string
    linkedin: string
    git: string
    email: string
    message: string
}

export interface Skill {
    id: number
    name: string
}
export interface FamilerWith {
    id: number
    name: string
}

export interface Experience {
    id: number
    title: string
    sub: string
    desc: string
}

export interface Project {
    id: number
    title: string
    date: string
    link: string
}

export interface License {
    id: number
    title: string
    education: string
    date?: string
}
export interface Social {
    id: number
    title: string
    link: string
}

