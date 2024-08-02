import React, { useState } from 'react'
import Home from './Pages/Home'
import navdata from './utils/NavData';
import Style from "./Components/navbar.module.css"
import Footer from './Components/Footer';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';

const App = () => {
  let [pages, setPages] = useState("home")
  const handlePages = (ele) => {
    setPages(ele.stateVal)
  }
  return (
    <div>
      <header className={Style.header}>
        <ul>
          {navdata?.map((ele, index) => {
            return <li onClick={() => handlePages(ele)}>{ele.navText}</li>
          })}
        </ul>
        {pages === "home" ? <Home /> : ""}
        {pages === "service" ? <Services /> : ""}
        {pages === "contact" ? <ContactUs /> : ""}
        {pages === "about" ? <AboutUs /> : ""}
        <Footer/>
      </header>
    </div>
  )
}

export default App