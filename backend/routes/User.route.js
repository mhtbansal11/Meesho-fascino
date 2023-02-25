const express = require("express");
const bcrypt = require("bcrypt");
const { CartProductsModel } = require("../model/cart.model");
const { UserModel } = require("../model/User.model");
const { ProductModel } = require("../model/Product.model");
const { OrderModel } = require("../model/order.model");


const userRouter= express.Router();

//below code can be used to get all products by using filter in user site---------------->
userRouter.get("/products/filter",async(req,res)=>{
    const query= req.query;
    const userID = req.body.userID;
    let products;
    try{
        //You can use pagination by passing query as skip and limit------------------------->
    if(query.limit && query.skip){
        // If you want to sort data in ascending order according to price , pass "asc" as a query-------------------------------------->
      if(query.asc){
        if(query.brand  && query.category && query.type){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.brand && query.category){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.type && query.brand){
            products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.type && query.category){
            products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.type){
            products = await ProductModel.find({type:query.type}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.brand){
            products = await ProductModel.find({brand:query.brand}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else if(query.category){
            products = await ProductModel.find({category:query.category}).skip(query.skip).limit(query.limit).sort({price:1});
        }
        else{
             products = await ProductModel.find().skip(query.skip).limit(query.limit).sort({price:1});
        }
        // If you want to sort data in descending order according to price , pass "des" as a query-------------------------------------->
      }else if(query.des){
        if(query.brand  && query.category && query.type){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.brand && query.category){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.type && query.brand){
            products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.type && query.category){
            products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.type){
            products = await ProductModel.find({type:query.type}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.brand){
            products = await ProductModel.find({brand:query.brand}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else if(query.category){
            products = await ProductModel.find({category:query.category}).skip(query.skip).limit(query.limit).sort({price:-1});
        }
        else{
             products = await ProductModel.find().skip(query.skip).limit(query.limit).sort({price:-1});
        }
      }else{
        if(query.brand  && query.category && query.type){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.brand && query.category){
            products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.type && query.brand){
            products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.type && query.category){
            products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).skip(query.skip).limit(query.limit);
        }
        else if(query.type){
            products = await ProductModel.find({type:query.type}).skip(query.skip).limit(query.limit)
        }
        else if(query.brand){
            products = await ProductModel.find({brand:query.brand}).skip(query.skip).limit(query.limit);
        }
        else if(query.category){
            products = await ProductModel.find({category:query.category}).skip(query.skip).limit(query.limit);
        }
        else{
             products = await ProductModel.find().skip(query.skip).limit(query.limit);
        }
      }  
        
         //If you are not using pagination no need to pass query as skip and limit---------------------------------->
    }else{
        if(query.asc){
            if(query.brand  && query.category && query.type){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).sort({price:1});
            }
            else if(query.brand && query.category){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).sort({price:1});
            }
            else if(query.type && query.brand){
                products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).sort({price:1});
            }
            else if(query.type && query.category){
                products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).sort({price:1});
            }
            else if(query.type){
                products = await ProductModel.find({type:query.type}).sort({price:1});
            }
            else if(query.brand){
                products = await ProductModel.find({brand:query.brand}).sort({price:1});
            }
            else if(query.category){
                products = await ProductModel.find({category:query.category}).sort({price:1});
            }
            else{
                 products = await ProductModel.find().sort({price:1});
            }
          }else if(query.des){
            if(query.brand  && query.category && query.type){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).sort({price:-1});
            }
            else if(query.brand && query.category){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).sort({price:-1});
            }
            else if(query.type && query.brand){
                products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]}).sort({price:-1});
            }
            else if(query.type && query.category){
                products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]}).sort({price:-1});
            }
            else if(query.type){
                products = await ProductModel.find({type:query.type}).sort({price:-1});
            }
            else if(query.brand){
                products = await ProductModel.find({brand:query.brand}).sort({price:-1});
            }
            else if(query.category){
                products = await ProductModel.find({category:query.category}).sort({price:-1});
            }
            else{
                 products = await ProductModel.find().sort({price:-1});
            }
          }else{
            if(query.brand  && query.category && query.type){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]});
            }
            else if(query.brand && query.category){
                products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]});
            }
            else if(query.type && query.brand){
                products = await ProductModel.find({$and:[{brand:query.brand},{type:query.type}]});
            }
            else if(query.type && query.category){
                products = await ProductModel.find({$and:[{type:query.type},{category:query.category}]});
            }
            else if(query.type){
                products = await ProductModel.find({type:query.type})
            }
            else if(query.brand){
                products = await ProductModel.find({brand:query.brand});
            }
            else if(query.category){
                products = await ProductModel.find({category:query.category});
            }
            else{
                 products = await ProductModel.find();
            }
          }
    }    
        res.send(products);
    }catch(err){
        res.send({"msg":"cannot get products","error":err.message})
    }
})


// below code can be used to get all products which are added by users ---------------->
userRouter.get("/cart_product",async(req,res)=>{
    const userID=req.body.userID;
    try{
        const cart = await CartProductsModel.find({userID}).populate("productID");
        res.send(cart)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot Get cart Products","error":err.message})
    }
})


// below code can be used to add to cart by users ---------------->
userRouter.post("/cart_product/add/:id",async(req,res)=>{
    const productID=req.params.id
    console.log({...req.body,productID,qty:1})
    try{
        const cart = new CartProductsModel({...req.body,productID,qty:1});
        await cart.save();
        res.send({"msg":"Product added to cart"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot add","error":err.message})
    }
})


// below code can be used to update quantity and size of the products by users---------------->
userRouter.patch("/cart_product/update/:id",async(req,res)=>{
    const ID=req.params.id;
    const {qty}=req.body;
    try{
        await CartProductsModel.findByIdAndUpdate({_id:ID},{qty});
        res.send({"msg":"Product has been updated"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot update","error":err.message})
    }
})


// below code can be used to delete product from cart by users---------------->
userRouter.delete("/cart_product/delete/:id",async(req,res)=>{
    const ID=req.params.id;
    try{
        await CartProductsModel.findByIdAndDelete({_id:ID});
        res.send({"msg":"Product has been deleted from cart"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot delete","error":err.message})
    }
})


// below code can be used to add ordered products in order summery by user ---------------->
userRouter.post("/order/add",async(req,res)=>{
    const userID=req.body.userID;
    const products = await CartProductsModel.find({userID})
    try{
        await OrderModel.insertMany([...products]);
        await CartProductsModel.deleteMany({userID})
        res.send({"msg":"Product ordered"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot order the products","error":err.message})
    }
})


// below code can be used to get ordered products in order summery by user ---------------->
userRouter.get("/order",async(req,res)=>{
    const userID=req.body.userID;
    try{
        const order = await OrderModel.find({userID}).populate("productID");
        res.send(order)
    }
    catch(err){
        res.send({"msg":"somthing went wrong! cannot get ordered products","error":err.message})
    }
})



// below code can be used to delete all products from cart by users---------------->
userRouter.delete("/clear_cart",async(req,res)=>{
    const userID=req.body.userID;
    try{
        await CartProductsModel.deleteMany({userID});
        res.send({"msg":"cart cleared"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot delete","error":err.message})
    }
})


// below code can be used to Logout Account by users---------------->
userRouter.patch("/logout",async(req,res)=>{
    const userID=req.body.userID;
    try{
        await UserModel.findByIdAndUpdate({_id:userID},{is_active:false});
        res.send({"msg":"Your account is logged out"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot logout Account","error":err.message})
    }
})


// below code can be used to add shipping address for order products by users---------------->
userRouter.patch("/add/location",async(req,res)=>{
    const userID=req.body.userID;
    const payload=req.body;
    try{
        await UserModel.findByIdAndUpdate({_id:userID},payload);
        res.send({"msg":"Address Submitted"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot add Address","error":err.message})
    }
})

// below code can be used to delete Account by users---------------->
userRouter.delete("/delete",async(req,res)=>{
    const userID=req.body.userID;
    try{
        await UserModel.findByIdAndDelete({_id:userID});
        res.send({"msg":"Your account is deleted"})
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot delete Account","error":err.message})
    }
})


module.exports = {userRouter}