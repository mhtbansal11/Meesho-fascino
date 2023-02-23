const mongoose= require("mongoose");

const orderSchema= mongoose.Schema({
    userID:String,
    productID:String,
    qty:Number
},{
    versionKey:false
});

const OrderModel=mongoose.model("order",orderSchema);

module.exports={OrderModel};