import { CopyToClipBoard } from "@/src/components/copyToClipBoardText";
import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement>{
	email?:string;
}

export const Email=({email,...props}:IProps)=>{
	const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
	const icon= <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 7v14h14v2H4c-1.1 0-2-.9-2-2V7zm8.8 8.35l-3.3-3.3l1.4-1.4l1.9 1.9l4.3-4.3l1.4 1.4zM20 3c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.18C11.6 1.84 12.7 1 14 1c1.3 0 2.4.84 2.82 2zm-6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-4 4V5H8v12h12V5h-2v2z"/></svg>
	if (!email)
		return emailIcon;
	return (
		<>
			<p>
				<a href={`mailto:${email}`}
					target="_blank"
					rel="noopener noreferrer">
					{emailIcon}
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
