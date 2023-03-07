import { AxiosInstance } from "axios";

export  interface IService<T> {
    axios: AxiosInstance;
    list(): Promise<T[]>;
    detail(id:number): Promise<T>;
    create(data:T): Promise<T>;
    update(id:number, data:T): Promise<T>;
    delete(id:number): Promise<T>;
    listFilter?(slug:string): Promise<T[]>;
}