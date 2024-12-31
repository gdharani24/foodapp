import React, { useState } from 'react'
import './Navbar.css'
import {assets } from '../../assets/assets'
import { Link, Route, Routes } from 'react-router-dom';
import Cart from '../../Pages/Cart/Cart';
import { useContext } from 'react';
import { StoreContex } from '../../context/storeContex';
const Navbar = ({setShowLogin}) => {
const[menu,setMenu] =useState("home");

const {getTotalCartAmount} = useContext(StoreContex);

  return (
    <div className='navbar'>
  <Link to='/'> <img src={assets.logo} alt=""  className='logo'/></Link>     
        <ul className='navbar-menu'>
<Link to="/" OnClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
<a href='#explore-menu' OnClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
<a  href='#app-download' OnClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
<a  href='#footer' OnClick={()=>setMenu("contactus")} className={menu==="contactus"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
<img src={assets.search_icon} alt=""/>
<div className='navbar-search-icon'> 

<Link to="/cart" >
<img src={assets.basket_icon} alt="" /></Link>
<div className={getTotalCartAmount()=== 0?"":"dot"}></div>
</div>
<button onClick={()=>setShowLogin(true)} className='navbar-button'>sign in</button>
        </div>
        </div>
  )
}

export default Navbar