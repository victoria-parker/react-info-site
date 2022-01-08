import React from "react"
import logo from '../images/logo.svg'

export default function NavBar(){
    return (
                <nav className="nav-bar">
                    <img src={logo} alt="logo"/>
                    <h2>ReactFacts</h2>
                    <h3>React Course - Project 1</h3>
                </nav>  
    )
}

