import { Box } from '@chakra-ui/react'
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Products } from '../Components/AdminProducts'

export const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/addproduct' element={<h1>Add Product</h1>} />
        <Route path='/product' element={<Products/>} />
        <Route path='/customer' element={<h1>customers</h1>}/>
        <Route path='/dashboard' element={<h1>dashboard</h1>}/>
        <Route path='/setting' element={<h1>setting</h1>}/>
    </Routes>
  )
}
