import { IProject } from "@/src/models";
import {IService} from "@/src/services/iService";
import axios,{ AxiosInstance } from "axios";

export class ProjectsService implements IService<IProject> {
		axios: AxiosInstance;
		constructor(baseURL: string) {
      this.axios = axios.create({baseURL})
		}
		async list(username?:string): Promise<IProject[]> {
      const response = await	this.axios.get("/projects",{params:{
        username
      }})
      return response.data;
		}
		async detail(id: number): Promise<IProject> {
      throw new Error("Method not implemented.");
		}
		async getSlugName(): Promise<IProject> {
      throw new Error("Method not implemented.");
		}
		create(data: IProject): Promise<IProject> {
			throw new Error("Method not implemented.");
		}
		update(id: number, data: IProject): Promise<IProject> {
			throw new Error("Method not implemented.");
		}
		delete(id: number): Promise<void> {
			throw new Error("Method not implemented.");
		}
}

export default ProjectsService;
