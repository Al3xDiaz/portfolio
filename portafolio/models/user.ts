export interface TimeLineProfile {
    year: number;
    comment: string;
    title?:string;
    icon: string;
    profile: number;
}

export interface Profile {
    first_name: string;
    last_name: string;
    jobs: string;
    age: number;
    biography: string[];
    image: string;
    images: string[];
    time_line_profile: TimeLineProfile[];
    last_login?: Date;
}

export interface SocialMedia {
    linkedin: string;
    github: string;
    gitlab: string;
    instagram: string;
    facebook: string;
    twitter: string;
}

export interface Experiencie {
    title: string;
    company: string;
    date_from: string;
    date_to: string;
    description: string;
}

export interface Area {
    title: string;
    badges: string[];
}

export interface IUser {
    username: string;
    email: string;
    profile: Profile;
    social_media: SocialMedia;
    education: string[];
    areas: Area[];
    courses: ICourse[];
}

export interface IUserState {
    user?: IUser;
    status: "loading" | "loaded" | "error";
}

export interface ICourse {
    id: number;
    name: string;
    image: string;
}