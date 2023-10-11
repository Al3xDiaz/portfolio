import {IUser, IUserAuth} from "@/models/index";
import {IServiceAuth} from "@/services/iService";
import axios, { AxiosInstance } from "axios";

export class authService implements IServiceAuth{
    axios: AxiosInstance;
    constructor(axiosInstance?:AxiosInstance){
        this.axios = axiosInstance || axios.create()
    }
    async login(username: string, password: string): Promise<IUserAuth> {
        const response = await this.axios.post(`/auth/login`,{
            username,
            password
        })
        return response.data;
    }
    async getData(): Promise<IUser> {
        const response = await this.axios.get(`/auth/userdata`)
        return response.data;
    }
    signUp(data:IUser): Promise<IUserAuth> {
        throw new Error("Method not implemented.");
    }
}

export default authService;
        