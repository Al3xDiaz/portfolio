import { IUser } from "@/models/user";
import {IService} from "@/services/iService";
import axios from "axios";

export class UserService implements IService<IUser> {
    async list(): Promise<IUser> {
        throw new Error("Method not implemented.");
    }

    async detail(slug: string): Promise<IUser> {
        const response = await  axios.get(`/api/user/${slug || "alexdiaz"}`);
        return response.data;
    }
    create(data: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    update(slug: string, data: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    delete(slug: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
}

export default UserService;
        