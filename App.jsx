import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import './index.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './component/Footer/Footer'
import Placeorder from './Pages/Placeorder/Placeorder'
import { Route, Routes } from 'react-router-dom'
import LoginPopup from './component/LoginPopup/LoginPopup'
const App = () => {

const[showLogin,setShowLogin] = useState(false)

  return (
   <>
   {showLogin?<LoginPopup setShowLogin={setShowLogin}  />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
<Route path="" element={<Home />}> </Route>
<Route path="/cart" element={<Cart />}> </Route>
<Route path="/order" element={<Placeorder />}> </Route>
 </Routes>
      
      </div>
      <Footer />
   </>
  )
}

export default App