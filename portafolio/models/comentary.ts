import {IUser} from './user'
export interface IComentary{
    id: number;
    user?: IUser;
    content: string;
}