import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";



const Sidebar = () => {
const {counter}= useContext(ThemeContext);
  
  console.log("sidebar component is a expensive component")
  return (    
  <div>            
    <h2>Sidebar {counter} </h2>
  </div>  );
}

export default Sidebar
