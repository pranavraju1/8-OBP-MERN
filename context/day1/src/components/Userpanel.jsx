import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { ThemeContext } from "../context/themeContext"



const Userpanel = () => {
   const {theme, toggleTheme, counter, setCounter}= useContext(ThemeContext);

   const userName = useContext(UserContext)    
   return (
      <div>
         <h3>{theme}</h3>
         <button onClick={toggleTheme}>Toggle theme</button>
         <p>Welcome, {userName} 👋</p>

         <h2>Counter: {counter}</h2>
         <button onClick={()=>setCounter(prev => prev + 1)}>Increase</button>



      </div>
   ) 
}

export default Userpanel

// App -> Layout -> Content -> Userpanel
//                -> Sidebar


// Prop drilling -> in the above simple example Layout and Content recieve prop but they do not use it
// they just pass it further, incase of complex components passing props in multiple components, becomes harder
// to maintain and difficult to debug this issue is known as prop drilling 