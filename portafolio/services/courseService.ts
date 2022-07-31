import { ICourse } from "@/models/course";
import { IService } from "@/services/iService";
import axios from "axios";

export class CourseService implements IService<ICourse> {
    async list(): Promise<ICourse[]> {
        const response = await axios.get("/api/courses/?user=alexdiaz");
        return response.data;
    }

    async detail(slug: string): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
    create(data: ICourse): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
    update(slug: string, data: ICourse): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
    delete(slug: string): Promise<ICourse> {
        throw new Error("Method not implemented.");
    }
}