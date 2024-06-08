import { AxiosInstance } from "axios";
import { IUser, IUserAuth } from "../models";

export	interface IService<T> {
		axios?: AxiosInstance;
		baseUrl?: string;
		list(): Promise<T[]>;
		detail(id:number): Promise<T>;
		create(data:T): Promise<T>;
		update(id:number, data:T): Promise<T>;
		delete(id:number): Promise<void>;
		listFilter?(slug:string): Promise<T[]>;
}
export interface IServiceAuth{
		axios: AxiosInstance;
		getData():Promise<IUser>;
    validatecredetial(token:string): Promise<void>;
    logout(): Promise<void>;
}
