import { Box } from '@chakra-ui/react'
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { AdminAddProduct } from '../Components/AdminAddProduct'
import { AdminDashboard } from '../Components/AdminDashboard'
import { Products } from '../Components/AdminProducts'
import { AdminUserData } from '../Components/AdminUserData'

export const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/addproduct' element={<AdminAddProduct/>} />
        <Route path='/product' element={<Products/>} />
        <Route path='/customer' element={<AdminUserData/>}/>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/setting' element={<h1>setting</h1>}/>
    </Routes>
  )
}
