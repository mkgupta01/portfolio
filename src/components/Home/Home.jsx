import './Home.css'
import Socials from './Socials/Socials';
import Sparkle from '../../assest/sparkle.png'

function Home() {
    return (
        <div className="home">
            <div className="devInfo">
                <h1 className="devName">Mayank Kumar Gupta</h1>
                <span className="devBio">MERN Stack Developer</span>
            </div>

            <a href='https://github.com/mkgupta01/FinVue' id='star1' >
                <img className='star' src={Sparkle} alt="" />
                <span>FinVue</span>
            </a>

            <Socials />
        </div>
    )
}

export default Home;