import './Projectcard.css'
import { FaGithub, FaGlobe } from 'react-icons/fa'

function Projectcard(props) {
    return (
        <div className="projectCard">
            <img src= { props.img } alt="" className="projectImg" />
            <h1 className="projectTitle">{ props.title }</h1>
            <div className="links">
                <a href= { props.github } className="link github"><FaGithub /></a>
                <a href={ props.live } className="link live"><FaGlobe /></a>
            </div>
        </div>
    )
}

export default Projectcard