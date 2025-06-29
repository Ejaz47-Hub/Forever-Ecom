import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Collection from './Pages/Collection.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Login from './Pages/Login.jsx'
import PlaceOrder from './Pages/PlaceOrder.jsx'
import Orders from './Pages/Orders.jsx'
import Navbar from './Components/Navbar.jsx'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/order' element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App