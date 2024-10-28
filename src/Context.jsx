import { createContext,useContext,useState,useEffect, Children } from "react";

const getIntialMode = ()=>{ 

   const preferDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
   const storedDarkMode = localStorage.getItem("darkTheme");
   if(storedDarkMode=== null){
    return preferDarkMode;
   }
   return storedDarkMode==="true";
}
const AppContext = createContext();
export const AppProvider = ({children})=>{
 const [isDarkTheme,setIsDarkTheme] =  useState(getIntialMode());
 const [searchTerm ,setSearchTerm] = useState("cat"); 
 const toggleDarkTheme = () =>{
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme",newDarkTheme);
 };
 useEffect(()=>{
   document.body.classList.toggle("dark-theme", isDarkTheme);// here it is [force] in toggle syntax  isDarkTheme

 },[isDarkTheme]) // here it is [isDarkTheme] dependies in useEffect
 return (<AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>
    {children}
 </AppContext.Provider>
 );
}
export const useGlobalContext = () =>{
   return  useContext(AppContext)
};