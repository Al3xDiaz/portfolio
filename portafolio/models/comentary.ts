import {IUser} from './user'
export interface IComentary{
    id: number;
    userId?: number;
    CreatedAt: Date;
    comment: string;
}