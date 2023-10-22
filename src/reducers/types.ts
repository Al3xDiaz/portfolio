import {IOwnerSite, IUser, IUserAuth} from "src/models/user";
import { AxiosInstance } from "axios";
interface ISetSiteAction {
    type: "SET_SITE";
    payload: IOwnerSite;
}
interface ISetVisitorAction {
    type: "SET_VISITOR";
    payload: IUser;
}
interface IErrorAction {
    type: "ERROR";
    payload: any;
}


export type IAction = ISetSiteAction  | ISetVisitorAction | IErrorAction;
export default IAction;