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
            <div className='social'>
                <h4>Contact me</h4>
                <p>
                    {ownerSite?.email && (<a href={`mailto:${ownerSite?.email}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <IoMail  size={20}/>
                    </a>)}
                    {ownerSite?.social_media.linkedin && <a href={ownerSite?.social_media?.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin  size={20}/>
                    </a>}
                    {ownerSite?.social_media.github && <a href={ownerSite?.social_media?.github} target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare  size={20}/>
                    </a>}
                    {ownerSite?.social_media.gitlab && <a href={ownerSite?.social_media?.gitlab} target="_blank" rel="noopener noreferrer">
                        <FaGitlab  size={20}/>
                    </a>}
                    {ownerSite?.social_media.twitter && <a href={ownerSite?.social_media?.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare  size={20}/>
                    </a>}
                    {ownerSite?.social_media.instagram && <a href={ownerSite?.social_media?.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram  size={20}/>
                    </a>}
                    {ownerSite?.social_media.facebook && <a href={ownerSite?.social_media?.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare  size={20}/>
                    </a>}
                    {ownerSite?.social_media.discord && <a href={`${ownerSite?.social_media?.discord}`} target="_blank" rel="noopener noreferrer">
                        <FaDiscord  size={20}/>
                    </a>}
                </p>
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
                footer > div > h4  {
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
                    .specialties ul {
                    li {
                        margin-left: 2rem;
                    }
                }
                }
                `}</style>
        </footer>
    );
}
export default Footer;