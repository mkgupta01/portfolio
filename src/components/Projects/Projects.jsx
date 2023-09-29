import Projectcard from './Projectcard';
import './Projects.css'

import API_Usage from '../../assest/projects/API_Usage.png'
import ShoppingAPP from '../../assest/projects/ShoppingApp.png'
import RollTheDice from '../../assest/projects/RollTheDice.png'
import OurForgottenHero from '../../assest/projects/OurForgottenHero.png'
import DCMS from '../../assest/projects/DCMS.png'
import ReactCalculator from '../../assest/projects/react-calculator.png'
import ReactTodoList from '../../assest/projects/todolist.png'
import YTClone from '../../assest/projects/YT-clone.png'
import WeatherApp from '../../assest/projects/WeatherApp.png'

const projectsList = [
    {
        slno:1,
        img: YTClone,
        title: "YT_Clone",
        githubLink: "https://github.com/mkgupta01/yt-clone",
        liveLink: "https://mkgupta.tech/yt-clone"
    },
    {
        slno:2,
        img: WeatherApp,
        title: "Weather App",
        githubLink: "https://github.com/mkgupta01/weatherapp",
        liveLink: "https://weather-app-git-main-mayankkuamr001.vercel.app/"
    },
    {
        slno: 3,
        img: API_Usage,
        title: "Api Usage",
        githubLink: "https://github.com/mkgupta01/API_usage",
        liveLink: "https://mkgupta01.github.io/API_usage/"
    },
    {
        slno: 4,
        img: ShoppingAPP,
        title: "Shopping App",
        githubLink: "https://github.com/mkgupta01/Shopping",
        liveLink: "https://shopping-black.vercel.app/"
    },
    {
        slno: 5,
        img: RollTheDice,
        title: "Roll The Dice",
        githubLink: "https://github.com/mkgupta01/RollDice",
        liveLink: "https://mkgupta01.github.io/RollDice/"
    },
    {
        slno: 6,
        img: OurForgottenHero,
        title: "Our Forgotten Hero",
        githubLink: "https://github.com/mkgupta01/Our-Forgotten-Heros",
        liveLink: "https://our-forgotten-heros.vercel.app/"
    },
    {
        slno: 7,
        img: DCMS,
        title: "Dance-Class-Management-Software",
        githubLink: "https://github.com/mkgupta01/Dance-Class-Management-Software",
        liveLink: null
    },
    {
        slno: 8,
        img: ReactCalculator,
        title: "React Calculator",
        githubLink: "https://github.com/mkgupta01/React-Calculator",
        liveLink: "https://react-calculator-one-silk.vercel.app/"
    },
    {
        slno: 9,
        img: ReactTodoList,
        title: "React TODO LIST",
        githubLink: "https://github.com/mkgupta01/TODO-LIST",
        liveLink: "https://todo-list-pied-psi.vercel.app/"
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
                                key={e.slno}
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