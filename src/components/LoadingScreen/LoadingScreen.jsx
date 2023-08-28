// refeerenced from https://codepen.io/saurabhdaware/pen/gdXBJe
import './LoadingScreen.css'

function LoadingScreen(){
    return(
        <div class="portfolio-loader">
            <div class="sun"></div>
            <div class="orbit orbit1"><div class="planetX planet1"></div></div>
            <div class="orbit orbit2"><div class="planetX planet2"></div></div>
            <div class="orbit orbit3"><div class="planetX planet3"></div></div>
        </div>
    )
}

export default LoadingScreen;