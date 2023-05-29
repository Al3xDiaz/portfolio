import { ICourse } from "@/models/course";
import { AxiosBase, IService } from "@/services/iService";
import { AxiosInstance } from "axios";

export class CourseService implements IService<ICourse> {
    axios: AxiosInstance;
    constructor() {
        this.axios = AxiosBase;
    }
    async list(): Promise<ICourse[]> {
        const response = await this.axios.get("/api/courses/?user=alexdiaz");
        return response.data;
    }
    async detail(slug: number): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
    create(data: ICourse): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
    update(slug: number, data: ICourse): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
    delete(slug: number): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
}