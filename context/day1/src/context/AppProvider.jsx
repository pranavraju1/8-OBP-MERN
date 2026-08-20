import { useState } from "react";
import { ThemeContext } from "./themeContext";
import { UserContext } from "./userContext";


const AppProvider = ({children}) => {

    const userName = "Pranav";
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev) => prev == 'light' ? 'dark' : 'light')
    }

    const [counter, setCounter] = useState(0)

  return (
    <UserContext.Provider value={userName}>
      <ThemeContext.Provider value={{theme , toggleTheme, counter, setCounter}}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default AppProvider
