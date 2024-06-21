import { IGallery } from "@/src/models";
import {IService} from "@/src/services/iService";
import axios,{ AxiosInstance } from "axios";

export class GalleriesService implements IService<IGallery> {
		axios: AxiosInstance;
		constructor(baseURL: string) {
      this.axios = axios.create({baseURL})
		}
		async list(username?:string): Promise<IGallery[]> {
      const response = await	this.axios.get("/galleries",{params:{
        username
      }})
      return response.data;
		}
		async detail(id: number): Promise<IGallery> {
      throw new Error("Method not implemented.");
		}
		async getSlugName(): Promise<IGallery> {
      throw new Error("Method not implemented.");
		}
		create(data: IGallery): Promise<IGallery> {
			throw new Error("Method not implemented.");
		}
		update(id: number, data: IGallery): Promise<IGallery> {
			throw new Error("Method not implemented.");
		}
		delete(id: number): Promise<void> {
			throw new Error("Method not implemented.");
		}
}

export default GalleriesService;
