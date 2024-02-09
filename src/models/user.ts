import { AxiosInstance } from "axios";
export interface IUser {
	id: number;
	userName: string;
	email: string;
	firstName: string;
	lastName: string;
	verified: boolean;
}

export interface Profile {
	first_name: string;
	last_name: string;
	telephone: string;
	jobs: string;
	age: number;
	biography: string[];
	image: string;
	images: string[];
	time_line_profile: TimeLineProfile[];
	last_login?: Date;

	website: string;
	linkedin: string;
	youtube: string;
	github: string;
	gitlab: string;
	instagram: string;
	facebook: string;
	twitter: string;
	discord: string;
}

export interface TimeLineProfile {
	year: number;
	comment: string;
	title?:string;
	icon: string;
	profile: number;
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


export interface IUserAuth{
		user: IUser;
		token: string;
}
export interface IOwnerSite{
		username: string;
		email: string;
		profile: Profile;
		education: string[];
		areas: Area[];
		courses: string[];
		projects: IProject[];
		specialties: string[];
	}
	export type ISiteStateStatus ="loading" | "loaded" | "error";
	export interface ISiteState {
		ownerSite?: IOwnerSite;
		visitor?: IUser;
		status: ISiteStateStatus;
		msgError?: any;
		axiosInstance?: AxiosInstance;
		header: boolean;
		footer: boolean;
}

export interface IProject {
		name: string;
		description: string;
		image: string;
		url: string;
}
