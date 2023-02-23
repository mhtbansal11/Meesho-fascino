const express = require("express");
const { UserModel } = require("../model/User.model");

const adminRouter= express.Router();

// below code can be used to register by admins ---------------->
adminRouter.patch("/register",async(req,res)=>{
    const {email,password}=req.body;
    const user = await UserModel.findOne({email,password});
    const {_id}=user;
    try{
        if(user){
            await UserModel.findByIdAndUpdate({_id:_id},{is_admin:true});
            res.send({"msg":`You are registered successfully for Admin`})
        }else{
            res.send({"msg":'You have to be User first!'})
        } 
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot register for Admin","error":err.message})
    }
})


// below code can be used to get all admins in admin site---------------->
adminRouter.get("/login",async(req,res)=>{
    const userID=req.body.userID
    try{
        const user = await UserModel.findOne({_id:userID});
        if(user.is_admin){
            res.send("authorized Admin")
        }else{
            res.send("You are not authorized for Admin")
        }
    }catch(err){
        res.send({"msg":"somthing went wrong! authantication cannot be done","error":err.message})
    }
})


// below code can be used to get all users in admin site---------------->
adminRouter.get("/user",async(req,res)=>{
    let query= req.query;
    try{
        const users = await UserModel.find(query);
        res.send(users)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot get user","error":err.message})
    }
})

// below code can be used to add the product through admin---------------->
adminRouter.post("/add/product",async(req,res)=>{
    try{
        const product = new ProductModel(req.body);
        await product.save();
        res.send({"msg":"Product has been added successfully"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot add the product","error":err.message})
    }
})

// below code can be used to update the product through admin--------------->
adminRouter.patch("/update/product/:id",async(req,res)=>{
    const ID= req.params.id;
    const payload= req.body;
    try{
        await ProductModel.findByIdAndUpdate({_id:ID},payload);
        res.send({"msg":`Product with ID: ${ID} has been updated successfully`})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot update","error":err.message})
    }
})

// below code can be used to delete the product through admin--------------->
adminRouter.delete("/delete/product/:id",async(req,res)=>{
    const ID= req.params.id;
    try{
        await ProductModel.findByIdAndDelete({_id:ID});
        res.send({"msg":`Product with ID: ${ID} has been deleted successfully`})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot delete","error":err.message})
    }
})

module.exports = {adminRouter}