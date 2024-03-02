import { TimeLineProfile } from "@/src/models";
import axios,{ AxiosInstance } from "axios";

export class AchievementsService{
		axios: AxiosInstance;
		constructor(API_URL?: string) {
				this.axios =axios.create({baseURL:API_URL})
		}
		async list(username?: string): Promise<TimeLineProfile[]> {
				const response = await	this.axios.get(`/achievements`,{params:{
          username
        }})
				return await response.data;
		}
		async detail(id: number): Promise<TimeLineProfile> {
				throw new Error("Method not implemented.");
		}
		async create(data: TimeLineProfile): Promise<TimeLineProfile>{
      throw new Error("Method not implemented.");
		}
		update(id: number, data: TimeLineProfile): Promise<TimeLineProfile> {
				throw new Error("Method not implemented.");
		}
		async delete(id: number): Promise<void> {
				await this.axios.delete(`/commentaries/${id}`);
		}
		listFilter?(slug: string): Promise<TimeLineProfile[]> {
				throw new Error("Method not implemented.");
		}
}

export default AchievementsService;
