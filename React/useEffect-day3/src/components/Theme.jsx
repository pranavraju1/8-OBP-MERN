// when you click on toggle theme button it will toggle the values light and dark
// after the value is toggled you have to save the value in local storage
// when the theme is mounted on the screen you need to fetch the value from local storage
// and set it in theme state

import { useEffect, useState } from "react"

const Theme = () => {
    const [theme, setTheme] = useState('light');
    
    useEffect(()=>{
        localStorage.setItem('theme', theme);
    },[theme])

    const toggleTheme = () => {
        setTheme((prev)=> (prev == 'light') ? 'dark' : 'light');
    }
    return (
    <div>
        <h1>Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Theme
