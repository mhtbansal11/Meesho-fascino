import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminAddProduct } from "../Pages/jitendera/AdminAddProduct";
import { AdminDashboard } from "../Pages/jitendera/AdminDashboard";
// import { Products } from '../Pages/jitendera/AdminProducts'
import { AdminUserData } from "../Pages/jitendera/AdminUserData";
import Login from "../Pages/Rajkumar/Login";
import Signup from "../Pages/Rajkumar/Signup";
import Home from "../Pages/sonu/Home";
import { AdminNavbar } from "../Pages/jitendera/AdminNavbar";
import Cart from "../Pages/Avinash/Cart";
import Checkout from "../Pages/Avinash/Checkout";
import Payment from "../Pages/Avinash/Payment";
import SingleproductPage from "../Pages/sonu/SingleproductPage";
import ProductPage from "../Pages/sonu/ProductPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminNavbar />} />
      <Route path="/addproduct" element={<AdminAddProduct />} />
      <Route path='/productpage' element={<ProductPage/>} />
      <Route path="/customer" element={<AdminUserData />} />
      <Route path="/" element={<Home />} />
      <Route path="/setting" element={<h1>setting</h1>} />
      <Route path="/singnup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dasboard" element={<AdminDashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path='/productpage/:id' element={<SingleproductPage/>}/>
    </Routes>
  );
};
