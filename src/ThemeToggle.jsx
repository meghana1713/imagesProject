import React from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

import { useGlobalContext } from './Context';


const ThemeToggle = () => {
  const {isDarkTheme,toggleDarkTheme} = useGlobalContext();
  return (
    <section className="toggle-container">
   <button className ="dark-toggle" onClick = {toggleDarkTheme} >
    {isDarkTheme ? (<IoMoon className="toggle-icon"/> ):(<IoSunny className = "toggle-icon"/>)}

    

   </button>
   </section>
  )
}

export default ThemeToggle;
