const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    color:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    material:{type:String,required:false},
    rating:{type:Number,required:false}
},{
    versionKey:false
});

const ProductModel=mongoose.model("product",productSchema);

module.exports={ProductModel};