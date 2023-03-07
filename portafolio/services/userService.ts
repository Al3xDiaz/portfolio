import { IUser } from "@/models/user";
import {IService} from "@/services/iService";
import axios from "axios";

export class UserService implements IService<IUser> {
    async list(): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    async detail(id: number): Promise<IUser> {        
        const response = await  axios.get(`/api/users/${id}?populate=*,profile.images,profile.badges`);
        return response.data;
    }
    create(data: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
}

export default UserService;
        