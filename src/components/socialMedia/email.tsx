import { CopyToClipBoard } from "@/src/components/copyToClipBoardText";
import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement>{
	email?:string;
}

export const Email=({email,...props}:IProps)=>{
	const icon = <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
	if (!email)
		return icon;
	return (
		<>
			<p>
				<a href={`mailto:${email}`}
					target="_blank"
					rel="noopener noreferrer">
					{icon}
						{email}
				</a>
				<CopyToClipBoard text={email}>
					{icon}
				</CopyToClipBoard>
				<style jsx>{`
					a {
						display: flex;
						align-items: center;
						gap: 0.5rem;
					}
					p {
						display: flex;
						align-items: center;
						align-content: center;
						gap: 0.5rem;
					}
				`}</style>
			</p>
		</>
	)
}
