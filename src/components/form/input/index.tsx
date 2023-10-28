import React,{ FC, PropsWithChildren, RefAttributes } from 'react'
import {IInput} from "../"

interface Iprops extends IInput {
    label?:string,
    required?:boolean,
    placeholder?:string,
    style?:React.StyleHTMLAttributes<HTMLStyleElement>,
    className?:string,
}

export const TextField = React.forwardRef<HTMLInputElement,Iprops>((props, ref) => {
    const {
        label="textfield",
        required,
        style,
        className,
        ...extraProps
    } = props;
    return (
        <div className={className} style={style}>
            <label>
                <input
                    type="text"
                    className="input"
                    ref={ref}
                    required={required}
                    {...extraProps}
                />
                <span>{required?"*":""}{props.label?label:props.name}</span>
            </label>
            <style jsx>{`
            label {
                position: relative;
                display: flex;
                background-color: #ffffff00;
            }
    
            label .input {
                background-color: #fff;
                width: 100%;
                padding: 1rem;
                margin: .5rem;
                outline: 0;
                border: 1px solid rgba(105, 105, 105, 0.397);
                border-radius: 10px;
            }
    
            label .input + span {
                position: absolute;
                background-color: #fff;
                border-radius: 1rem;
                padding: .1rem;
                left: 1rem;
                top: 1.5rem;
                color: grey;
                font-size: 0.9em;
                cursor: text;
                transition: 0.3s ease;
            }
    
            label .input:placeholder-shown + span {
                top: 1.5rem;
                font-size: 0.9em;
            }
    
            label .input:focus + span,label .input:valid + span {
                top: 3rem;
                font-size: 0.7em;
                font-weight: 600;
            }
            label .input:valid + span {
                color: green;
            }
            label.invalid .input:invalid + span {
                color: red;
            }
            `}</style>
        </div>
    )
})

export const TextArea = React.forwardRef<HTMLTextAreaElement,Iprops>((props, ref) => {
    const {
        label="textfield",
        required,
        style,
        className,
        ...extraProps
    } = props;
    return (
        <div className={className} style={style}>
            <label>
                <textarea
                    className="input"
                    ref={ref}
                    required={required}
                    {...extraProps}
                />
                <span>{required?"*":""}{props.label?label:props.name}</span>
            </label>
            <style jsx>{`
            label {
                position: relative;
                display: flex;
                background-color: #ffffff00;
            }
    
            label .textarea {
                background-color: #fff;
                width: 100%;
                padding: 1rem;
                margin: .5rem;
                outline: 0;
                border: 1px solid rgba(105, 105, 105, 0.397);
                border-radius: 10px;
            }
    
            label .textarea + span {
                position: absolute;
                background-color: #fff;
                border-radius: 1rem;
                padding: .1rem;
                left: 1rem;
                top: 1.5rem;
                color: grey;
                font-size: 0.9em;
                cursor: text;
                transition: 0.3s ease;
            }
    
            label .textarea:placeholder-shown + span {
                top: 1.5rem;
                font-size: 0.9em;
            }
    
            label .textarea:focus + span,label .textarea:valid + span {
                top: 3rem;
                font-size: 0.7em;
                font-weight: 600;
            }
            label .textarea:valid + span {
                color: green;
            }
            label.invalid .textarea:invalid + span {
                color: red;
            }
            `}</style>
        </div>
    )
})