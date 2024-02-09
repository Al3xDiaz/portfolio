import React	from "react";
import { ISiteState, IUser } from "@/src/models/user";
import IAction from "@/src/reducers/types";
interface IContextState{
		state: ISiteState;
		dispatch?: React.Dispatch<IAction>
}

const siteContex =React.createContext<IContextState>({state:{status: "loading",header:true,footer:true}});

export default siteContex;
