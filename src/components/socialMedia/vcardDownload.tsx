import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement>{
	href: string;
	userName?: string;
}

export const VCardDownload = ({href,userName,...props}:IProps)=>{
	if (!userName)
		return <></>
	return (
		<a href={`${href}/${userName}`} download>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" {...props}><g fill="currentColor"><path d="M5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/></g></svg>
				VCard
				<style jsx>{`
					a {
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 0.5rem;
						padding: 1rem;
						background-color: var(--primary);
						border-radius: 1rem;
					}
				`}</style>
		</a>
	)

}
