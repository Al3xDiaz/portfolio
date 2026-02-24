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
.language-selector {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.language-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.language-buttons button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}
.language-buttons button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}
.language-buttons button.active {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
  font-weight: bold;
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
  color: white;
  position: relative;
  z-index: 1;
  display: grid;

  padding-top: 2rem;
  padding-bottom: 2rem;
}
@media (min-width: 769px){
  footer{
  grid-template-columns: 1fr 1fr 1fr 1fr .5fr;
  justify-items: center;
  align-items: start;
  }
}
@media (max-width: 770px){
  footer{
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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
