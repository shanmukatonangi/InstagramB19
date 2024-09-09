const mongoose= require("mongoose")


const postSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    postImage:{
        type:String,

    },
    likes:{
        type:Array
    }
})


module.exports = mongoose.model("Post",postSchema)