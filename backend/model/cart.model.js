const mongoose= require("mongoose");

const cartProductsSchema= mongoose.Schema({
    userID:String,
    productID:{ type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    qty:Number
},{
    versionKey:false
});

const CartProductsModel=mongoose.model("cartProducts",cartProductsSchema);

module.exports={CartProductsModel};