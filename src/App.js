import React from 'react'
import "./style.css"
import NavBar from "./components/NavBar"
import Main from './components/Main'


export default function App(){
    return (
        <div className="container">
            <NavBar/>
            <Main/>
        </div>)
}
