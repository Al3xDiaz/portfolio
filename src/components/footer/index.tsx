import React from 'react';
import {
	FaHeart
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import packageInfo from '../../../package.json'
import {useSite} from '@/src/hooks';
import { Twitter, MdiLinkedin, MdiYoutube, MdiWhatsapp } from '@/src/components/socialMedia';

export const Footer= () => {
	const {state:{ownerSite,footer}} = useSite()
	if (!footer)
		return (<></>)

	return (
		<footer>
			{ownerSite && (
				<>
				<div className='social'>
				<h4>Contact me</h4>
				<p>
					{ownerSite?.email && (<a href={`mailto:${ownerSite?.email}`}
					target="_blank"
					rel="noopener noreferrer">
					<IoMail	size={20}/>
					</a>)}
					<Twitter userName={ownerSite?.profile.twitter}/>
					<MdiLinkedin userName={ownerSite?.profile.linkedin} />
					<MdiYoutube userName={ownerSite?.profile.youtube} />
				</p>
				</div>
				{ownerSite?.profile.specialties && (
				<div className="specialties">
				<h4>Specialties</h4>
				<ul>
					{ownerSite?.profile.specialties.split(",").map((item,i)=>(<li className='ul-items' key={i}>{item}</li>))}
				</ul>
				</div>
				)}
				<div className="about">
				<h4>Made for</h4>
				Help to any human being.
				<a>or to contact me <FaHeart size={20} color={"#ff0000"}/>.</a>
				</div>
				<div className='version'>
				<h4 className='version'>version: {packageInfo.version}</h4>
				</div>
			</>
			)}
			<style jsx>{`
			.social > p {
				display: flex;
				flex-direction: row;
			}
			.specialties ul {
				display: flex;
				flex-wrap: wrap;
				list-style-type: disclosure-closed;
				margin-block-start: 0px;
				margin-block-end: 0px;
				margin-inline-start: 0px;
				margin-inline-end: 0px;
				padding-inline-start: 0px;
				li {
				margin: .2rem;
				margin-left: 2rem;
				width: fit-content;
				}
			}
			.about > div {
				flex-direction: row;
			}
			.social{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-around;
			}
			a{
				display: flex;
				flex-direction: row;
				align-items: center;]
			}
			a :global(svg){
				margin: 0px 5px;
			}
			footer > div > div {
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				margin-left: 1rem;
			}
			footer > div > h4	{
				margin-left: -1rem;
			}
			footer{
				background-color: #000;
				color: white;
				position: relative;
				z-index: 1;
				display: grid;

				padding: 1rem;
			}
			@media (min-width: 769px){
				footer{
				grid-template-columns: 1fr 1fr 1fr .5fr;
				justify-items: center;
				align-items: start;
				}
			}
			@media (max-width: 770px){
				footer{
				grid-template-rows: 1fr 1fr 1fr 1fr;
				align-items: center;
				padding-left: 5rem;
				}
			}
      .specialties ul li{
        margin-left: 2rem;
      }
			`}</style>
		</footer>
	);
}
export default Footer;
