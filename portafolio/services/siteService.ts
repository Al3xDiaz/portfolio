import { IOwnerSite } from "@/models/index";
import {AxiosBase, IService} from "@/services/iService";
import { AxiosInstance } from "axios";

export class SiteService implements IService<IOwnerSite> {
    axios: AxiosInstance;
    constructor() {
        this.axios = AxiosBase;
    }    
    async list(): Promise<IOwnerSite[]> {
        throw new Error("Method not implemented.");
    }
    async detail(id: number): Promise<IOwnerSite> {        
        const response = await  fetch(`/profile.json`)
        return await response.json();
    }
    create(data: IOwnerSite): Promise<IOwnerSite> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: IOwnerSite): Promise<IOwnerSite> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<IOwnerSite> {
        throw new Error("Method not implemented.");
    }
}

export default SiteService;
        