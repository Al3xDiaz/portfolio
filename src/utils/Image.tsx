// import NextImage from 'next/image';
interface IProps {
	src: string;
	alt: string;
	[x:string]: any;
}
export const Image = ({ src, alt, ...props }:IProps) => {
	return (
		<div className="relative">
			<img src={src} alt={alt} {...props} />
		</div>
	);
}
