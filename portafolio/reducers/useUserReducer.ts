import { IUser, IUserState } from "@/models/user";
import IUserAction from "@/reducers/types";

export const initialState: IUserState = {
    status: "loading"
};
export const reducer = (state: IUserState, action:IUserAction ):IUserState => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                status: "loaded",
                user : action.payload
            };
        case "ERROR":
            return {
                ...state,
                status: "error",
                user : undefined
            };
        default:
            return state;
    }
}