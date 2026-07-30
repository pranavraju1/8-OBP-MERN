import { BrowserRouter, Route, Routes } from "react-router"
import { lazy, Suspense } from "react"

import Contact from "./components/Contact"
// import Home from "./components/Home"
import Navbar from "./components/Navbar"
// import Users from "./components/Users"
// import Posts from "./components/Posts"

// import About from "./components/About"
const About = lazy(()=> import("./components/About"))
const Home = lazy(()=> import("./components/Home"))
const Users = lazy(()=> import("./components/Users"))
const Posts = lazy(()=> import("./components/Posts"))

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

            <Route path="/posts/:id" element={<Posts />}/>
          
          </Routes>

        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
