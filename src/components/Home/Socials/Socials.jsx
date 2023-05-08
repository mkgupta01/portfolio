import './Socials.css';
import {  FaGithub , FaTwitter , FaLinkedin ,FaInstagram, FaDiscord } from 'react-icons/fa'

function Socials(){
    return(
        <div className="soicalicons-containner">
            <a href="https://twitter.com/mkgupta01">< FaGithub  fade/></a>
            <a href="https://twitter.com/imayankgupta001">< FaTwitter /></a>
            <a href="https://www.linkedin.com/in/mkgupta001/">< FaLinkedin /></a>
            <a href="https://www.instagram.com/i_mayankgupta001/">< FaInstagram /></a>
            <a href="https://discord.com/channels/@me">< FaDiscord /></a>
        </div>
    )
}

export default Socials