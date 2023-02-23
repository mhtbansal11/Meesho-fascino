const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    "type": String,
    "category":String,
    "brand": String,
    "title": String,
    "discounted_price": Number,
    "strike_price": Number,
    "discount": String,
    "images": Array,
    "size": Array,
    "rating": Number,
    "rating_count": String
},{
    versionKey:false
});

const ProductModel=mongoose.model("product",productSchema);

module.exports={ProductModel};