import axios, { AxiosInstance } from "axios";
import getConfig from "next/config";
import { IUser, IUserAuth } from "../models";

const { publicRuntimeConfig } = getConfig();
const baseURL = publicRuntimeConfig.API_URL;

export  interface IService<T> {
    axios: AxiosInstance;
    list(): Promise<T[]>;
    detail(id:number): Promise<T>;
    create(data:T): Promise<T>;
    update(id:number, data:T): Promise<T>;
    delete(id:number): Promise<T>;
    listFilter?(slug:string): Promise<T[]>;
}
export interface IServiceAuth{
    axios: AxiosInstance;
    login(username: string,password: string):Promise<IUserAuth>;
    getData():Promise<IUser>;
    signUp(data:IUser):Promise<IUserAuth>;
}