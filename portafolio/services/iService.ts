import axios, { AxiosInstance } from "axios";
import getConfig from "next/config";
import { env } from "process";
export  interface IService<T> {
    axios: AxiosInstance;
    list(): Promise<T[]>;
    detail(id:number): Promise<T>;
    create(data:T): Promise<T>;
    update(id:number, data:T): Promise<T>;
    delete(id:number): Promise<T>;
    listFilter?(slug:string): Promise<T[]>;
}
export const AxiosBase = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});