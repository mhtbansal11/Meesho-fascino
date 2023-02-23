const express = require("express");
const cors = require("cors");
require('dotenv').config();
const {auth} = require("./middleware/auth.middleware");
const {connecion}= require("./config/db")
const {userRouter} = require("./routes/User.route");
const {adminRouter} = require("./routes/Admin.route");
const {productRouter} = require("./routes/Products.route");
const { ProductModel } = require("./model/Product.model");
const { UserModel } = require("./model/User.model");
const jwt = require("jsonwebtoken");



const app= express();
app.use(express.json());
app.use(cors());
app.use("/",productRouter);
app.use("/users",userRouter);
app.use("/admin",auth);
app.use("/admin",adminRouter);


// below code can be used to get all products for Home-Page in user site---------------->
app.get("/",async(req,res)=>{
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
    try{
        const user = new UserModel(req.body);
        await user.save();
        res.send({"msg":"You have been registered successfully"})
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
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    let token =jwt.sign({userID:user._id},"masai");
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
        await user.save();
        res.send({"msg":"You have been registered successfully"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot register","error":err.message})
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