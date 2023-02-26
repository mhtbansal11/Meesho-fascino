const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    mobile:{type:Number,required:true},
    city:{type:String,required:true},
    is_admin:{type:Boolean,required:false},
    is_active:{type:Boolean,required:false},
    shipping_address:Object
},{
    versionKey:false
});

const UserModel=mongoose.model("user",userSchema);

module.exports={UserModel};

