import { useEffect } from 'react';
import useSiteCLI from '@/src/hooks/useVCard';
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {Twitter,MdiLinkedin,MdiYoutube, MdiWhatsapp, Telephone,Email, WebSite} from "@/src/components/socialMedia"
import getConfig from "next/config";
import { VCardDownload } from '@/src/components/socialMedia/vcardDownload';
import { SiteService } from '@/src/services';
import { IUser } from '@/src/models';

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

interface iprops{
  user:IUser;
}
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
export const getStaticProps = (async ({params}) => {
  const username = params && params["username"]?.toString() || ""
  const service = new SiteService(API_URL)
  const user = await service.getSlugName(username)
  return { props: {
    user,
  }}
}) satisfies GetStaticProps<iprops>

export const VCard:NextPage<iprops> =({user})=> {
  return (
		<div className='conteiner'>
			<header className='header'>
				<div>
					<div style={{backgroundImage:`url(${user.profile.photo})`}} />
					<h1>{user.userName}</h1>
				</div>
				<div>
					<div>
						{user.profile.telephone.map(({countryCode,phoneNumber},i)=>
							<Telephone key={i} height="1rem" width="1rem" Telephone={`+${countryCode} ${phoneNumber}`} />
						)}
						<Email height="1rem" width="1rem" email={user.email} />
						<WebSite height="1rem" width="1rem" website={user.profile.website} />
					</div>
				</div>
			</header>
			<div className='personal-info'>
				{user.profile.bio && (
				<div>
					{user.profile.bio.split("\n").map((line,i)=>
					<p key={i}>{line}</p>
					)}
				</div>)}
				{user.profile.telephone.map(({countryCode,phoneNumber},i)=><div>
					<div>
						<Telephone key={i} />
					</div>
					<div>
						<p>Phone (Mobile)</p>
						<p>{`+${countryCode} ${phoneNumber}`}</p>
					</div>
				</div>)}
				{user.email && (<div>
					<div>
						<Email />
					</div>
					<div>
						<p>E-mail</p>
						<p>{user.email}</p>
					</div>
				</div>)}
				{user.profile.website && (<div>
					<div>
						<WebSite />
					</div>
					<div>
						<p>Web Site</p>
						<p>{user.profile.website}</p>
					</div>
				</div>)}
			</div>
			<div className='social-media'>
				<Twitter userName={user.profile.twitter}/>
				<MdiLinkedin userName={user.profile.linkedin} />
				<MdiYoutube userName={user.profile.youtube} />
				{user.profile.telephone.map(({countryCode,phoneNumber,whatsapp},i)=>whatsapp && (<MdiWhatsapp key={i} telephone={`+${countryCode}${phoneNumber}`} />))}
			</div>
			<div className='vcard-download'>
				<VCardDownload href={`${API_URL}/vcard`} userName={user.userName} />
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
export default VCard;
