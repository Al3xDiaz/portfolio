import { IOwnerSite } from "@/src/models";
import {IService} from "@/src/services/iService";
import axios,{ AxiosInstance } from "axios";

export class SiteService implements IService<IOwnerSite> {
		axios?: AxiosInstance;
		baseUrl?: string;
		constructor(baseUrl?: string) {
				this.baseUrl = baseUrl;
		}
		async list(): Promise<IOwnerSite[]> {
				throw new Error("Method not implemented.");
		}
		async detail(id: number): Promise<IOwnerSite> {
				const response = await	fetch(`${this.baseUrl}/profile.json`)
				return await response.json();
		}
		create(data: IOwnerSite): Promise<IOwnerSite> {
				throw new Error("Method not implemented.");
		}
		update(id: number, data: IOwnerSite): Promise<IOwnerSite> {
				throw new Error("Method not implemented.");
		}
		delete(id: number): Promise<void> {
				throw new Error("Method not implemented.");
		}
}

export default SiteService;
