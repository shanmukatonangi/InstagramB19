const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,

    },
    profilePicture:{
        type:String,
    },
    followers:{
        type:Array, 
        default:[],  
    },
    following:{
        type:Array,
        default:[],
    },
    bio:{
        type:String,
        max:150
    }
})


module.exports = mongoose.model("User",userSchema)