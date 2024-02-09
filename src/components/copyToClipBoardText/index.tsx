import { useCallback, useState } from "react";

interface IProps {
	text: string;
	children?: JSX.Element | JSX.Element[]
}

export const CopyToClipBoard = ({text,children}:IProps)=>{
	const [spanStatus,setSpanStatus] = useState(false);
	const handlerClick = useCallback(()=>{
		navigator.clipboard.writeText(text)
		setSpanStatus(true)
		setInterval(()=>{setSpanStatus(false)},3000)
	},[])
	return (
		<>
			<a onClick={()=>!spanStatus && handlerClick()}>
				{children}
				<span className={spanStatus?"show":"hidden"}>copied!!!</span>
			</a>
			<style jsx>{`
				.hidden {
					display: none;
				}
				a {
					position: relative;
				}
				a span.show {
					color: black;
					background-color: white;
					position: absolute;
					bottom: 1.3rem;
					left: 0rem;
					right: 0rem;
					width:90px;
					padding: .5rem;
					border-radius: .7rem;
					border-style: solid;
					border-block-width: 1px;
					border-inline-width: 1px;
				}
			`}</style>
		</>
	)
}
