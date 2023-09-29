import './Home.css'
import Socials from './Socials/Socials';
import devPhoto from '../../assest/devImg.jpg'

function Home() {
    return (
        <div className="home">
            <img src= { devPhoto } alt="" className="devPhoto" />
            <div className="devInfo">
                <h1 className="devName">Mayank Kumar Gupta</h1>
                <span className="devBio">A 3rd year graduate passionate about tech.</span>
            </div>
            <Socials />
        </div>
    )
}

export default Home;