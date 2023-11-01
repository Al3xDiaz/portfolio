import React  from "react";
import IAction from "./reducer";

interface Dictionary{
    [Key: string]: number | string | Date;
}
interface IContextState{
    state: Dictionary;
    dispatch?: React.Dispatch<IAction>;
}

const contex =React.createContext<IContextState>({state:{}});

export default contex;