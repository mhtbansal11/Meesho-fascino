const express = require("express");
const { UserModel } = require("../model/User.model");

const adminRouter= express.Router();

// below code can be used to get all admins in admin site---------------->
// adminRouter.get("/",async(req,res)=>{
//     let query= req.query;
//     try{
//         const admins = await AdminModel.find(query);
//         res.send(admins)
//     }catch(err){
//         res.send({"msg":"somthing went wrong! cannot get admin","error":err.message})
//     }
// })

// // below code can be used to register by admins ---------------->
// adminRouter.post("/register",async(req,res)=>{
//     try{
//         const admin = new AdminModel(req.body);
//         await admin.save();
//         res.send({"msg":"You have been registered successfully into admin"})
//     }catch(err){
//         res.send({"msg":"somthing went wrong! cannot register into admin","error":err.message})
//     }
// })

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

module.exports = {adminRouter}