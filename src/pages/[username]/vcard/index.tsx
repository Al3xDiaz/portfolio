import { useEffect } from 'react';
import useSiteCLI from '@/src/hooks/useVCard';
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';
import {Twitter,MdiLinkedin,MdiYoutube, MdiWhatsapp, Telephone,Email, WebSite} from "@/src/components/socialMedia"
import getConfig from "next/config";
import { VCardDownload } from '@/src/components/socialMedia/vcardDownload';

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

export const getStaticPaths = (async () => {
	// ...
	const service = new UserService()
	const userNames = await service.getUserNames()
	return {
		paths: userNames.map((userName) => ({
			params: {
				username: userName,
			},
		})),
		fallback: false,
	};
}) satisfies GetStaticPaths
export const getStaticProps = (async () => {
	await new Promise((resolve) => setTimeout(resolve, 1));
  return { props: { component:"index" } }
}) satisfies GetStaticProps<{
  component: string
}>

export default function Page() {
	const {hiddenHeader,state:{ownerSite}} = useSiteCLI()
	useEffect(()=>{
		hiddenHeader()
	},[])
  return (
		<div className='conteiner'>
			<header className='header'>
				<div>
					{/* <img src={ownerSite?.profile.image} alt="none" /> */}
					<div style={{backgroundImage:`url(${ownerSite?.profile.photo})`}} />
					<h1>{ownerSite?.username}</h1>
				</div>
				<div>
					<div>
						{ownerSite?.profile.telephone.map(({countryCode,phoneNumber})=>
							<Telephone height="1rem" width="1rem" Telephone={`+${countryCode} ${phoneNumber}`} />
						)}
						<Email height="1rem" width="1rem" email={ownerSite?.email} />
						<WebSite height="1rem" width="1rem" website={ownerSite?.profile.website} />
					</div>
				</div>
			</header>
			<div className='personal-info'>
				{ownerSite?.profile.bio && (
				<div>
					{ownerSite.profile.bio.map((line)=>
					<p>{line}</p>
					)}
				</div>)}
				{ownerSite?.profile.telephone.map(({countryCode,phoneNumber})=><div>
					<div>
						<Telephone />
					</div>
					<div>
						<p>Phone (Mobile)</p>
						<p>{`+${countryCode} ${phoneNumber}`}</p>
					</div>
				</div>)}
				{ownerSite?.email && (<div>
					<div>
						<Email />
					</div>
					<div>
						<p>E-mail</p>
						<p>{ownerSite.email}</p>
					</div>
				</div>)}
				{ownerSite?.profile.website && (<div>
					<div>
						<WebSite />
					</div>
					<div>
						<p>Web Site</p>
						<p>{ownerSite.profile.website}</p>
					</div>
				</div>)}
			</div>
			<div className='social-media'>
				<Twitter userName={ownerSite?.profile.twitter}/>
				<MdiLinkedin userName={ownerSite?.profile.linkedin} />
				<MdiYoutube userName={ownerSite?.profile.youtube} />
				{/* <MdiWhatsapp telephone={ownerSite?.profile.telephone} /> */}
				{ownerSite?.profile.telephone.map(({countryCode,phoneNumber,whatsapp})=>whatsapp && (<MdiWhatsapp telephone={`+${countryCode}${phoneNumber}`} />))}
			</div>
			<div className='vcard-download'>
				<VCardDownload href={`${API_URL}/vcard`} userName={ownerSite?.username} />
			</div>
			<style jsx>
			{`
			.header{
				color: white;
			}
			.header div{
				padding: .2rem;
			}
			@media (min-width: 730px){
				.conteiner{
					min-width: 700px;
					margin: 0 auto;
				}
				.header div div:last-child{
					justify-content: center;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;

				}
				.header{
					border-radius: 0 3rem;
				}
			}
			@media (max-width: 729px){
				.conteiner{
					margin: 0;
				}
				.header div:last-child div{
					display: flex;
					flex-direction: column;
					align-items: flex-start;
				}
				.header div:last-child{
					align-items: center;
					display: flex;
					flex-direction: column;
				}
			}
				.header{
					background-color: var(--primary);
					padding: .5rem 0;
				}
				.header div:first-child{
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.header div:first-child div{
					border-radius: 10rem;
					background-size: cover;
					background-repeat: no-repeat;
					height: 8rem;
					width: 8rem;
					box-shadow: 0rem 0rem 1.2rem rgba(0, 0, 0, 0.9);
				}
				.personal-info{
					padding: 1rem;
					margin-top: 1rem;
					margin-bottom: 1rem;
				}
				.personal-info > div{
					display: flex;
					flex-direction: row;
					align-items: center;
					padding: 1rem;
					border-bottom: 1px solid var(--primary);
				}
				.personal-info > div > div{
					display: flex;
					flex-direction: column;
				}
				.personal-info > div > div:first-child{
					margin-right: 1rem;
				}
				.personal-info > div > div > p{
					width: fit-content;
				}
				.social-media{
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					margin-top: 1rem;
					margin-bottom: 1rem;
					margin-left: 8rem;
					margin-right: 8rem;
					align-items: center;
				}
				.vcard-download{
					position: fixed;
					z-index: 2;
					bottom: 1rem;
					right: 1rem;
				}
			`}
			</style>
		</div>
	)
}
