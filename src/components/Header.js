import React from "react"
import logo from '../images/logo.svg'

export default function Header(){
    return (
            <header>
                <nav className="nav-bar">
                    <div className="nav-logo">
                    <img src={logo} width="60px" alt="logo"/>
                    <h2>ReactFacts</h2>
                    </div>
                    <h3>React Course - Project 1</h3>
                </nav>
            </header>
    )
}

