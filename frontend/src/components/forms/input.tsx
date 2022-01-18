import React from "react";
import { IInputsProps } from "./iforms";

const Input=(props:IInputsProps)=>(
    <div style={{display:'flex',width:'100%'}}>
        <input onChange={props.onChange} style={styleIput} type="text" />
    </div>
)
const styleIput:React.CSSProperties={
    width: '100%',
    padding: '1vh 2vh',
    margin: '8px',
    boxSizing:'border-box',
}
export default Input