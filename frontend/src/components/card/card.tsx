
import React from "react"; 
import {IStyles,ICardProps,ITitleProps,IBodyProps} from './ICard'
export const Card=(props:ICardProps)=>{
    return (
        <div style={styles.card}>
            {props.children}
        </div>
    )
}
export const CardTitle=(props: ITitleProps)=>{
    return (
        <div className="secondary-color white" style={styles.title}>{props.children}</div>
    )
}
export const CardBody=(props: IBodyProps)=>{
    return (
        <div style={styles.body}>{props.children}</div>
    )
}

const styles:IStyles={
    card:{
        display:'flex',
        flexDirection:'column',
        margin:'6vh',
        borderRadius:'1vh',
        boxShadow:'1px .91px 15px black',
    },
    title:{
        display:'flex',
        paddingLeft:'3vw',
        paddingRight:'3vw',
        paddingTop:'1vh',
        paddingBlockEnd:'1vh',
        borderTopLeftRadius:'1vh',
        borderTopRightRadius:'1vh',
    },
    body:{
        display:'flex',
        padding:'4vh',
    }
}
export default Card;