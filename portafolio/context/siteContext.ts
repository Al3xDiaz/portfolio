import React  from "react";
import { ISiteState, IUser } from "@/models/user";
interface IGlobalContex{
    state: ISiteState;
    login?: (username: string, password: string) => Promise<void>;
    signUp?: (data: IUser) => Promise<void>;
}
const siteContex =React.createContext<IGlobalContex>({state:{status: "loading"}});

export default siteContex;