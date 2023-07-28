import Projectcard from './Projectcard';
import './Projects.css'

import API_Usage from '../../assest/projects/API_Usage.png'
import ShoppingAPP from '../../assest/projects/ShoppingApp.png'
import RollTheDice from '../../assest/projects/RollTheDice.png'
import OurForgottenHero from '../../assest/projects/OurForgottenHero.png'
import DCMS from '../../assest/projects/DCMS.png'
import ReactCalculator from '../../assest/projects/react-calculator.png'

const projectsList = [
    {
        slno: 1,
        img: API_Usage,
        title: "Api Usage",
        githubLink: "https://github.com/mkgupta01/API_usage",
        liveLink: "https://mkgupta01.github.io/API_usage/"
    },
    {
        slno: 2,
        img: ShoppingAPP,
        title: "Shopping App",
        githubLink: "https://github.com/mkgupta01/Shopping",
        liveLink: "https://shopping-black.vercel.app/"
    },
    {
        slno: 3,
        img: RollTheDice,
        title: "Roll The Dice",
        githubLink: "https://github.com/mkgupta01/RollDice",
        liveLink: "https://mkgupta01.github.io/RollDice/"
    },
    {
        slno: 4,
        img: OurForgottenHero,
        title: "Our Forgotten Hero",
        githubLink: "https://github.com/mkgupta01/Our-Forgotten-Heros",
        liveLink: "https://our-forgotten-heros.vercel.app/"
    },
    {
        slno: 5,
        img: DCMS,
        title: "Dance-Class-Management-Software",
        githubLink: "https://github.com/mkgupta01/Dance-Class-Management-Software",
        liveLink: null
    },{
        slno: 6,
        img: ReactCalculator,
        title: "React Calculator",
        githubLink: "https://github.com/mkgupta01/React-Calculator",
        liveLink: "https://react-calculator-8lxr.vercel.app/"
    }
]

function Projects() {
    return (
        <div className="projects-containner">
            <h1 className="projects-heading">Projects</h1>
            <div className="projects-flex">
                {
                    projectsList.map((e) => {
                        return (
                            <Projectcard
                                img={e.img}
                                title={e.title}
                                github={e.githubLink}
                                live={e.liveLink}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projects;