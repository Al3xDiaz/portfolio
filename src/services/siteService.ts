import { IOwnerSite } from "src/models/index";
import {IService} from "src/services/iService";
import axios,{ AxiosInstance } from "axios";

export class SiteService implements IService<IOwnerSite> {
    axios: AxiosInstance;
    constructor(axiosBase?: AxiosInstance) {
        this.axios = axiosBase || axios.create();
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
        