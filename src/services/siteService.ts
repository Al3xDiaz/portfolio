import { IUser } from "@/src/models";
import {IService} from "@/src/services/iService";
import axios,{ AxiosInstance } from "axios";

export class SiteService implements IService<IUser> {
		axios: AxiosInstance;
		constructor(baseURL: string) {
      this.axios = axios.create({baseURL})
		}
		async list(): Promise<IUser[]> {
			throw new Error("Method not implemented.");
		}
		async detail(id: number): Promise<IUser> {
			throw new Error("Method not implemented.");
		}
		async getSlugName(username:string): Promise<IUser> {
			const response = await	this.axios.get("/profile",{params:{
        username
      }})
			return response.data;
		}
		create(data: IUser): Promise<IUser> {
			throw new Error("Method not implemented.");
		}
		update(id: number, data: IUser): Promise<IUser> {
			throw new Error("Method not implemented.");
		}
		delete(id: number): Promise<void> {
			throw new Error("Method not implemented.");
		}
}

export default SiteService;
