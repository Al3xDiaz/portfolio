import { IComentary } from "@/models/comentary";
import {IService} from "@/services/iService";
import axios from "axios";

export class ComentaryService implements IService<IComentary> {
    async listFilter(slug?:String): Promise<IComentary[]> {
        const response = await  axios.get(`/api/comntaries/${slug}/`);
        return response.data;
    }
    async list(): Promise<IComentary[]> {
        throw new Error("Method not implemented.");
    }
    
    async detail(slug: string): Promise<IComentary> {
        throw new Error("Method not implemented.");
    }
    create(data: IComentary): Promise<IComentary> {
        throw new Error("Method not implemented.");
    }
    update(slug: string, data: IComentary): Promise<IComentary> {
        throw new Error("Method not implemented.");
    }
    delete(slug: string): Promise<IComentary> {
        throw new Error("Method not implemented.");
    }
}