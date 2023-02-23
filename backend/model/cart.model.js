const mongoose= require("mongoose");

const cartProductsSchema= mongoose.Schema({
    userID:String,
    productID:String,
    qty:Number
},{
    versionKey:false
});

const CartProductsModel=mongoose.model("cartProducts",cartProductsSchema);

module.exports={CartProductsModel};