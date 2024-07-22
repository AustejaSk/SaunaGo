import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/saunago-logo.png'
import userIcon from '../images/user-icon.svg'

const Header = () => {
    return (
        <header>
            <Link to="/"><img className="logo" src={logo} alt="SaunaGo logo with a lotus flower icon "/></Link>
            <nav> 
                <NavLink 
                    to="/host"
                    className={({ isActive }) => isActive ? "active" : ""}
                >   
                    Host
                </NavLink>        
                <NavLink 
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/saunas"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Saunas
                </NavLink>
                <NavLink
                    to="/login"
                >
                    <img src={userIcon} />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header