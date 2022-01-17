// styles
export interface IStyles{
    card:React.CSSProperties,
    title:React.CSSProperties,
    body:React.CSSProperties,
}

//props
export interface ICardProps{
    children:JSX.Element|JSX.Element[]
}

export interface ITitleProps{
    children:any
}
export interface IBodyProps{
    children:any
}