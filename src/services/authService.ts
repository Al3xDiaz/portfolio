import {IUser, IUserAuth} from "@/src/models";
import {IServiceAuth} from "@/src/services/iService";
import axios, { AxiosInstance } from "axios";

export class authService implements IServiceAuth{
	axios: AxiosInstance;
	constructor(axiosInstance:AxiosInstance){
			this.axios = axiosInstance;
	}
  async logout(): Promise<void> {
    await this.axios.delete(`/auth/logout`)
  }
	async getData(): Promise<IUser> {
		const response = await this.axios.get(`/auth/userdata`)
		return response.data;
	}
	async validatecredetial(token:string): Promise<void> {
		await this.axios.post(`/auth/validatecredetial`,{},{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
	}
}

export default authService;
