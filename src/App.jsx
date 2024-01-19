import { useState } from 'react'
import { Link } from "react-router-dom"
import './App.css'
import { MyRoutes } from "./routers/routes";
import { NavBar } from './NavBar';

const handleTitleClick = () => {
  window.location.href = "/"
}


function App() {
  return (<div>
    <header>
      <h1 className="title" onClick={handleTitleClick}>🎬PelisWorld</h1>
    </header>
    <NavBar />
    <MyRoutes />
  </div>
  )
}

export default App
