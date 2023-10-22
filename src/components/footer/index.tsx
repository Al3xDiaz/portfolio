import React from 'react';
import {
    FaTwitterSquare,
    FaGitlab,
    FaInstagram,
    FaFacebookSquare,
    FaLinkedin, 
    FaGithubSquare,
    FaDiscord,
    FaHeart
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import packageInfo from '../../../package.json'
import useSite from '@/src/hooks/useSite';

export const Footer = () => {
    const {state:{ownerSite}} = useSite()
    return (
        <footer>
            <div>
                <h4>Contact me</h4>
                <div>
                    {ownerSite?.email && (<a href={`mailto:${ownerSite?.email}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <IoMail  size={20}/>
                        Email
                    </a>)}
                    {ownerSite?.social_media.linkedin && <a href={ownerSite?.social_media?.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin  size={20}/>
                        Linkedin
                    </a>}
                    {ownerSite?.social_media.github && <a href={ownerSite?.social_media?.github} target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare  size={20}/>
                        Github
                    </a>}
                    {ownerSite?.social_media.gitlab && <a href={ownerSite?.social_media?.gitlab} target="_blank" rel="noopener noreferrer">
                        <FaGitlab  size={20}/>
                        GitLab
                    </a>}
                    {ownerSite?.social_media.twitter && <a href={ownerSite?.social_media?.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare  size={20}/>
                        Twitter
                    </a>}
                    {ownerSite?.social_media.instagram && <a href={ownerSite?.social_media?.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram  size={20}/>
                        Instagram
                    </a>}
                    {ownerSite?.social_media.facebook && <a href={ownerSite?.social_media?.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare  size={20}/>
                        Facebook
                    </a>}
                    {ownerSite?.social_media.discord && <a href={`${ownerSite?.social_media?.discord}`} target="_blank" rel="noopener noreferrer">
                        <FaDiscord  size={20}/>
                        Discord
                    </a>}
                </div>
            </div>
            {ownerSite?.specialties && (
            <div className="specialties">
                <h4>Specialties</h4>
                <ul>
                    {ownerSite?.specialties.map((item,i)=>(<li key={i}>{item}</li>))}
                </ul>
            </div>
            )}
            <div className="about">
                <h4>Made for</h4>
                Help to any human being.
                <a>or to contact me <FaHeart size={20} color={"#ff0000"}/>.</a>
                <h4 className='version'>version: {packageInfo.version}</h4>
            </div>
            <style jsx>{`
                .version{
                    margin-top: 1rem;
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
                    align-items: center;
                    // color: #4183c4
                }
                a :global(svg){
                    margin: 0px 5px;
                }
                footer{
                    background-color: #000;
                    color: white;
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    justify-items: center;
                    
                    padding: 1rem;
                  }
                  footer div {
                    display: flex;
                    flex-direction: column;
                    justify-items: start;
                  }
                `}</style>
        </footer>
    );
}
export default Footer;