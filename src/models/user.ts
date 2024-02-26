import { AxiosInstance } from "axios";
import { Telephone } from "./telephone";
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
	photo: string;
	bio: string[];

	jobs: string;

	linkedin: string;
	github: string;
// pending
	gitlab: string;
	discord: string;
//
	twitter: string;
	facebook: string;
	instagram: string;
	youtube: string;
	website: string;

// pending delete
	images: string[];
	time_line_profile: TimeLineProfile[];
//
  specialties: string;
  skills: string;
  Languages: string;
  Hobbies: string;

	telephone: Telephone[];

}

export interface TimeLineProfile {
	year: number;
	comment: string;
	title?:string;
	icon: string;
	profile: number;
}


export interface IUserAuth{
		user: IUser;
		token: string;
}
export interface IOwnerSite{
		username: string;
		email: string;
		profile: Profile;
		courses: string[];
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

