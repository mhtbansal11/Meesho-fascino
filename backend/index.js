const express = require("express");
const cors = require("cors");
require('dotenv').config();
const {auth} = require("./middleware/auth.middleware");
const {connecion}= require("./config/db")
const {userRouter} = require("./routes/User.route");
const {adminRouter} = require("./routes/Admin.route");
const { ProductModel } = require("./model/Product.model");
const { UserModel } = require("./model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt")



const app= express();
app.use(express.json());
app.use(cors());
app.use("/users",auth);
app.use("/users",userRouter);
app.use("/admin",auth);
app.use("/admin",adminRouter);


// Homepage---------------->
app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

// below code can be used to get all products for Home-Page in user site---------------->
app.get("/products",async(req,res)=>{
    let query= req.query;
    try{
        const products = await ProductModel.find(query);
        res.send(products)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot get products","error":err.message})
    }
})

// below code can be used to register by users in user site---------------->
app.post("/register",async(req,res)=>{
    const payload=req.body;
    const {password}= payload;
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.send({"msg":"somthing went wrong while hashing password"})
            }else{
                const user = new UserModel({...payload,password:hash});
                await user.save();
                res.send({"msg":"You have been registered successfully"})
            }
        })
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot register","error":err.message})
    }
})

// below code can be used to login by user---------------->
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password,async(err,result)=>{
                if(result){
                    let token =jwt.sign({userID:user._id},"masai");
                    await UserModel.findByIdAndUpdate({_id:user._id},{is_active:true})
                    res.send({"msg":"Login Successfull","token":token})
                }else{
                    res.send({"msg":"Wrong Credentials"})
                }
            })
        }else{
            res.send({"msg":"User not found!"})
        }
        
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot login","error":err.message})
    }
})

// Insert Many documents in collection
app.post("/insert",async(req,res)=>{
    try{
        await ProductModel.insertMany(req.body);
        res.send({"msg":"Products have been added successfully"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot add the products","error":err.message})
    }
})

// server will run at port 8080----------------------------------------->
app.listen(process.env.port,async()=>{
    try{
        await connecion;
        console.log("connected to DB")
    }catch(err){
        console.log("server error")
    }
    console.log(`server is running atr port ${process.env.port}`);
})