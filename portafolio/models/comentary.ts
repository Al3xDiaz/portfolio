import {IUser} from './user'
export interface IComentary{
    user?: IUser;
    content: string;
}