import { Box } from '@chakra-ui/react'
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { AdminAddProduct } from '../pages/jitendera/AdminAddProduct'
import { AdminDashboard } from '../pages/jitendera/AdminDashboard'
// import { Products } from '../pages/jitendera/AdminProducts'
import { AdminUserData } from '../pages/jitendera/AdminUserData'
import Login from '../pages/Rajkumar/Login'
import Signup from '../pages/Rajkumar/Signup'
import Home from '../pages/sonu/Home'
import { AdminNavbar } from '../pages/jitendera/AdminNavbar'
import Cart from '../pages/Avinash/Cart'
import Checkout from '../pages/Avinash/Checkout'
import Payment from '../pages/Avinash/Payment'

export const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/admin' element={<AdminNavbar/>} />
        <Route path='/addproduct' element={<AdminAddProduct/>} />
        {/* <Route path='/productpage' element={<Products/>} /> */}
        <Route path='/customer' element={<AdminUserData/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/setting' element={<h1>setting</h1>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/dasboard' element={<AdminDashboard/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/payment" element={<Payment/>}/>
        {/* <Route path='/productpage/:id' element={<Singleproductpage/>}/> */}
    </Routes>
  )
}
