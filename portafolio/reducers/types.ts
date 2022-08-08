import {IUser} from "@/models/user";
interface ISetUserAction {
    type: "SET_USER";
    payload: IUser;
}
interface IErrorAction {
    type: "ERROR";
}

type IUserAction = ISetUserAction | IErrorAction;

export default IUserAction