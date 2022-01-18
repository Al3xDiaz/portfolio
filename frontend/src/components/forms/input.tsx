import React from "react";
import { IInputsProps } from "./iforms";

const Input=(props:IInputsProps)=>(
    <div style={{display:'flex',width:'100%',flexDirection:'column',margin: '8px',}}>
        <label htmlFor={props.id}>{props.displayName}</label>
        <input onChange={props.onChange} style={styleIput} type="text" />
    </div>
)
const styleIput:React.CSSProperties={
    width: '100%',
    padding: '1vh 2vh',
    boxSizing:'border-box',
    minWidth:'200px'
}
export default Input