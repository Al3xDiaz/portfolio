import React, { FC, HTMLInputTypeAttribute, useReducer } from "react";
import context from "./formProvider/context"
import { reducer } from "./formProvider/useReducer";

export * from "./input"
export * from "./password"
export * from "./btn"


export interface IInput {
    name: string;
}

interface IForm {
    children?: JSX.Element | Array<JSX.Element>;
    onSubmit? : (data:any)=>void;
}


export const Form:FC<IForm> =  ({children,onSubmit})=>{
    const [state,dispatch]= useReducer(reducer,{});
    
    return (
       <context.Provider value={{state,dispatch}} >
            <form onSubmit={(e)=>{e.preventDefault(); onSubmit && onSubmit(state);}}>
                <>{children}</>
                <style jsx>{`
                form {
                    background-color: #00000000;
                    display: flex;
                    flex-direction: column;
                }
                `}</style>
            </form>
       </context.Provider>
    )
}
export default Form;