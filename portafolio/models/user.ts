export interface TimeLineProfile {
    year: number;
    comment: string;
    title?:string;
    icon: string;
    profile: number;
}

export interface Profile {
    name: string;
    jobs: string;
    age: number;
    biography: string[];
    image: string;
    images_profile: string[];
    time_line_profile: TimeLineProfile[];
    last_login?: Date;
}

export interface SocialMedia {
    linkedin: string;
    github: string;
    gitlab: string;
    instagram: string;
    facebook: string;
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
    first_name: string;
    last_name: string;
    is_active: boolean;
    date_created: string;
    phone_number: string;
    profile: Profile;
    social_media: SocialMedia;
    education: string[];
    experiencie: Experiencie[];
    areas: Area[];
    is_client: boolean;
    user_created?: any;
}

export interface IUserState {
    user?: IUser;
    status: "loading" | "loaded" | "error";
}