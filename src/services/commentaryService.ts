import { ICommentary } from "src/models/index";
import { IService} from "src/services/iService";
import axios,{ AxiosInstance } from "axios";

export class CommentaryService implements IService<ICommentary> {
    axios: AxiosInstance;
    constructor(axiosInstance?: AxiosInstance) {
        this.axios =axiosInstance || axios.create()
    }
    async list(): Promise<ICommentary[]> {
        const response = await  this.axios.get(`/commentaries`)
        return await response.data;
    }
    async detail(id: number): Promise<ICommentary> {        
        throw new Error("Method not implemented.");
    }
    async create(data: ICommentary): Promise<ICommentary>{
        const resp = await this.axios.post("/commentaries",data);
        return resp.data
    }
    update(id: number, data: ICommentary): Promise<ICommentary> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<ICommentary> {
        throw new Error("Method not implemented.");
    }
    listFilter?(slug: string): Promise<ICommentary[]> {
        throw new Error("Method not implemented.");
    }
}

export default CommentaryService;
        