import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement>{
	userName?: string;
}
export function Twitter({userName,...props}: IProps){
	if (!userName)
		return <></>
	return (
		<a href={`https://twitter.com/${userName}`} target="_blank" rel="noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
		</a>
	)
}
