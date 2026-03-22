import React from 'react';
import {
	FaHeart
} from "react-icons/fa";
import packageInfo from '../../../package.json'
import { Twitter, MdiLinkedin, MdiYoutube, } from '@/src/components/socialMedia';
import { IUser } from '@/src/models';
import { useSite } from '@/src/hooks';

interface iprops{
  user?:IUser;
}
export const Footer= ({user}:iprops) => {
	const { state, setLanguage, t } = useSite();
	
	if (!user)
		return <footer>
      <div>hello</div>
    </footer>

	return (
		<footer>
				<div className='social'>
				<h4>{t('contact.title')}</h4>
				<p>
					<MdiLinkedin userName={user.profile.linkedin} />
					<Twitter userName={user.profile.twitter}/>
				</p>
				</div>
			<div className="specialties">
			<h4>{t('footer.specialties')}</h4>
			<ul>
				{user.profile.specialties.split(",").map((item,i)=>(<li className='ul-items' key={i}>{item}</li>))}
			</ul>
			</div>
			<div className="about">
			<h4>{t('footer.madeFor')}</h4>
			{t('footer.madeForText')}
			<a>{t('footer.orContactMe')} <FaHeart size={20} color={"#ff0000"}/>.</a>
			</div>
				<div className='language-selector'>
				<h4>{t('footer.language')}</h4>
				<div className='language-buttons'>
					<button 
						className={state.lang === 'es-LA' ? 'active' : ''}
						onClick={() => setLanguage('es-LA')}
					>
						🇪🇸 Español
					</button>
					<button 
						className={state.lang === 'en-US' ? 'active' : ''}
						onClick={() => setLanguage('en-US')}
					>
						🇺🇸 English
					</button>
				</div>
				</div>
				<div className='version'>
				<h4 className='version'>version: {packageInfo.version}</h4>
				</div>
        <style jsx>{`
.social > p {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.specialties ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
  gap: 0.4rem;
}
.specialties ul li {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.78rem;
  color: #a5b4fc;
  font-weight: 500;
}
.social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}
.language-selector {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}
.language-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.5rem;
}
.language-buttons button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.82rem;
  font-weight: 500;
}
.language-buttons button:hover {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.4);
  color: #e2e8f0;
}
.language-buttons button.active {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.6);
  color: #a5b4fc;
  font-weight: 600;
}
a {
  display: flex;
  flex-direction: row;
  align-items: center;
}
a :global(svg) {
  margin: 0px 5px;
}
footer {
  color: white;
  position: relative;
  z-index: 1;
  display: grid;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(6, 11, 23, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
@media (min-width: 769px) {
  footer {
    grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
    justify-items: start;
    align-items: start;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (max-width: 770px) {
  footer {
    grid-template-rows: auto auto auto auto auto;
    align-items: center;
    padding-left: 2rem;
    gap: 1.5rem;
  }
}
`}</style>
		</footer>
	);
}
export default Footer;
