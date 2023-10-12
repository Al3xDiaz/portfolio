import React  from "react";
import { ISiteState, IUser } from "@/models/user";
import IAction from "@/reducers/types";
interface IContextState{
    state: ISiteState;
    dispatch?: React.Dispatch<IAction>
}

const siteContex =React.createContext<IContextState>({state:{status: "loading"}});

export default siteContex;