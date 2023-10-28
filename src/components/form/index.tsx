import React, { HTMLInputTypeAttribute } from "react"

export * from "./input"
export * from "./password"
export * from "./btn"


export interface IInput {
    name?: string;
    forwardedRef? : React.LegacyRef<HTMLInputElement>;
}
interface IForm {
    children?: JSX.Element | Array<JSX.Element>;
    onSubmit? : (data:any)=>void;
}


interface Dictionary<T> {
    [Key: string]: T;
}

export const Form =  ({children,onSubmit}:IForm)=>{
    let values:Array<React.RefObject<HTMLInputElement>>=[];
    let child;
    if (children){
        child =React.Children.map(children,(child)=>{
            const ref = React.createRef<HTMLInputElement>()
            values.push(ref)
            return React.cloneElement(child,{
                ref,
            })
        })
    }
    const submit:React.FormEventHandler<HTMLFormElement>  =(event)=>{
        event.preventDefault()
        let data:Dictionary<any> ={};
        values.forEach(item=>{
            if (item.current?.name){
                const value = item.current?.value.trim()
                try {
                    if (item.current.type == "number")
                        data[item.current?.name] = Number(value) 
                    else
                        data[item.current?.name] =  value as string
                } catch {
                    data[item.current?.name] = undefined
                }
            }
        })
        onSubmit && onSubmit(data)
    }
    return (
        <form onSubmit={submit}>
            <>{child}</>
            <style jsx>{`
    form {
        background-color: #00000000;
    }
            `}</style>
        </form>
    )
}
export default Form;