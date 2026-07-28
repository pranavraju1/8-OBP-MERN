import { BrowserRouter, Route, Routes } from "react-router"

import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import OrderSummary from "./components/OrderSummary"
import NoMatch from "./components/NoMatch"

import Products from "./components/Products"
import FeaturedProducts from "./components/FeaturedProducts"
import NewProducts from "./components/NewProducts"


import Users from "./components/users/Users"
import Admin from "./components/users/Admin"
import UserDetails from "./components/users/UserDetails"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/order-summary" element={<OrderSummary />}/>

          {/* nested routes */}
          <Route path="/products" element={<Products/>}>
            <Route path="featured" element={<FeaturedProducts />}/>
            <Route path="new" element={<NewProducts />}/>
          </Route>


          {/* <Route path="/users" element={<Users />}/> */}
          
          {/* dynamic routes */}
          {/* <Route path="/users/:id" element={<UserDetails />}/> */}
          
          {/* specefic route this will always have more preference than dynamic routes*/}
          {/* <Route path="/users/admin" element={<Admin />}/> */}


          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<UserDetails />}/>
            <Route path="admin" element={<Admin />}/>
          </Route>




        
          <Route path="*" element={<NoMatch />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
