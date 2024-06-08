import React	from "react";
import { ISiteState } from "@/src/models/user";
import IAction from "@/src/reducers/types";
import { initialState } from "@/src/reducers";
interface IContextState{
  state: ISiteState;
  dispatch?: React.Dispatch<IAction>
}

const siteContex =React.createContext<IContextState>({state:initialState});

export default siteContex;
