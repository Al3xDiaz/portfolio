import React,{useContext} from 'react';
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
import UserContex from "@/context/UserContext"
import { version } from '../../package.json'

export const Footer = () => {
    const {user} = useContext(UserContex);
    return (
        <footer>
            <div>
                <h4>version: {version}</h4>
            </div>
            {user?.email && (<div>
                <h4>Contact me</h4>
                <div>
                    <a href={`mailto:${user?.email}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <IoMail  size={20}/>
                        Email
                    </a>
                    {user?.social_media.linkedin && <a href={user?.social_media?.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin  size={20}/>
                        Linkedin
                    </a>}
                    {user?.social_media.github && <a href={user?.social_media?.github} target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare  size={20}/>
                        Github
                    </a>}
                    {user?.social_media.gitlab && <a href={user?.social_media?.gitlab} target="_blank" rel="noopener noreferrer">
                        <FaGitlab  size={20}/>
                        GitLab
                    </a>}
                    {user?.social_media.twitter && <a href={user?.social_media?.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare  size={20}/>
                        Twitter
                    </a>}
                    {user?.social_media.instagram && <a href={user?.social_media?.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram  size={20}/>
                        Instagram
                    </a>}
                    {user?.social_media.facebook && <a href={user?.social_media?.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare  size={20}/>
                        Facebook
                    </a>}
                    {user?.social_media.discord && <a href={`${user?.social_media?.discord}`} target="_blank" rel="noopener noreferrer">
                        <FaDiscord  size={20}/>
                        Discord
                    </a>}
                </div>
            </div>) }
            <div className="services">
                <h4>Specialties</h4>
                <ul>
                    <li>Backend</li>
                    <li>Frontend</li>
                    <li>DevOps</li>
                    <li>Database</li>
                    <li>Mobile</li>
                </ul>
            </div>
            <div className="about">
                <h4>Made for</h4>
                Help to any human being.
                <a>or to contact me <FaHeart size={20} color={"#ff0000"}/>.</a>
                <div 
                    className='social'>
                </div>
            </div>
            <style jsx>{`
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
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly; 
                    align-items: flex-start;
                    padding: 1rem;
                  }
                `}</style>
        </footer>
    );
}
export default Footer;