import { AxiosInstance } from "axios";

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
		discord: string;
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
		id: number;
		userName: string;
		email: string;
		firstName: string;
		lastName: string;
		verified: boolean;
}
export interface IUserAuth{
		user: IUser;
		token: string;
}
export interface IOwnerSite{
		username: string;
		email: string;
		profile: Profile;
		social_media: SocialMedia;
		education: string[];
		areas: Area[];
		courses: string[];
		projects: IProject[];
		specialties: string[];
}

export interface ISiteState {
		ownerSite?: IOwnerSite;
		visitor?: IUser;
		status: "loading" | "loaded" | "error";
		msgError?: any;
		axiosInstance?: AxiosInstance;
}

export interface IProject {
		name: string;
		description: string;
		image: string;
		url: string;
}
