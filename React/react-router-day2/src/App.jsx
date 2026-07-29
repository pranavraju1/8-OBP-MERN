import { BrowserRouter, Route, Routes } from "react-router"
import { lazy, Suspense } from "react"

import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Users from "./components/Users"

// import About from "./components/About"
const About = lazy(()=> import("./components/About"))

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading....</h1>}>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/about" element={<About />}/>
            
            <Route path="/contact" element={<Contact />}/>
            <Route path="/users" element={<Users />}/>
          </Routes>

        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
