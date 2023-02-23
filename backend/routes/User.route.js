const express = require("express");
const bcrypt = require("bcrypt");
const { CartProductsModel } = require("../model/cart.model");


const userRouter= express.Router();


// below code can be used to add to cart by users ---------------->
userRouter.post("/cart_product/:id",async(req,res)=>{
    const productID=req.params.id
    try{
        const cart = new CartProductsModel({...req.body,productID,qty:1});
        await cart.save();
        res.send({"msg":"Product added to cart"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot add","error":err.message})
    }
})

// below code can be used to update quantity and size of the products by users---------------->
userRouter.patch("/cart_product/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    try{
        await CartProductsModel.findByIdAndUpdate({_id:ID},payload);
        res.send({"msg":"Product has been updated"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot update","error":err.message})
    }
})


// below code can be used to delete product from cart by users---------------->
userRouter.delete("/cart_product/:id",async(req,res)=>{
    const ID=req.params.id;
    try{
        await CartProductsModel.findByIdAndDelete({_id:ID});
        res.send({"msg":"Product has been deleted from cart"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot delete","error":err.message})
    }
})

// below code can be used to delete all products from cart by users---------------->
userRouter.delete("/cart_products/:id",async(req,res)=>{
    const userID=req.params.id;
    try{
        await CartProductsModel.deleteMany({userID});
        res.send({"msg":"Product has been deleted from cart"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot delete","error":err.message})
    }
})


module.exports = {userRouter}