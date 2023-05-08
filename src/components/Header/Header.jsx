import './Header.css'
import logo from '../../assest/logo.png'
import { FaBars, FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'

function Header(){
    const [isNavbar, showNavbar] = useState(false);
    return(
        <>
        <div className={ isNavbar ? "navbarExpanded" : "navbar" }>
            <img src= { logo } alt="logo" className="logo" />
                <ul className='header'> 
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="https://form.jotform.com/231253949856468">Contact</a></li>
                </ul>     
                <button className="toggleNavbar" onClick={ ()=>showNavbar(!isNavbar) }>< FaArrowLeft /></button>      
        </div>
        <button className="toggleNavbar" onClick={ ()=>showNavbar(!isNavbar) }>< FaBars /></button>
        </>
    )
}

export default Header