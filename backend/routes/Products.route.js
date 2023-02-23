const express = require("express");
const {ProductModel}= require("../model/Product.model");

const productRouter= express.Router();

// below code can be used to add the product through admin---------------->
productRouter.post("/add",async(req,res)=>{
    try{
        const product = new ProductModel(req.body);
        await product.save();
        res.send({"msg":"Product has been added successfully"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot add the product","error":err.message})
    }
})

// below code can be used to update the product through admin--------------->
productRouter.patch("/update/:id",async(req,res)=>{
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
productRouter.delete("/delete/:id",async(req,res)=>{
    const ID= req.params.id;
    try{
        await ProductModel.findByIdAndDelete({_id:ID});
        res.send({"msg":`Product with ID: ${ID} has been deleted successfully`})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot delete","error":err.message})
    }
})

module.exports = {productRouter}