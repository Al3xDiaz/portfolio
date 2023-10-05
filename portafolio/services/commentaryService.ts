import { Commentary } from "@/models/index";
import {AxiosBase, IService} from "@/services/iService";
import { AxiosInstance } from "axios";

export class CommentaryService implements IService<Commentary.IComentary> {
    axios: AxiosInstance;
    constructor() {
        this.axios = AxiosBase;
    }    
    async list(): Promise<Commentary.IComentary[]> {
        const response = await  this.axios.get(`/commentaries`)
        return await response.data;
    }
    async detail(id: number): Promise<Commentary.IComentary> {        
        throw new Error("Method not implemented.");
    }
    create(data: Commentary.IComentary): Promise<Commentary.IComentary> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: Commentary.IComentary): Promise<Commentary.IComentary> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Commentary.IComentary> {
        throw new Error("Method not implemented.");
    }
}

export default CommentaryService;
        