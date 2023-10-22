import {IUser} from './user'
export interface ICommentary{
    id?: number;
    userId?: number;
    CreatedAt?: Date;
    comment: string;
}