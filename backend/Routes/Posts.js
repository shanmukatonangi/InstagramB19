const router = require("express").Router()
const Post= require("../models/Postmodel")

router.post("/create",async(req,res)=>{
    try {
        const newPost =await new Post(req.body).save()
        res.status(201).json({message:"Post created successfully",newPost})

        
    } catch (error) {
        
    }
})

router.put("/edit/:id",async(req,res)=>{    //localhost:8888/ig/post/edit/66df07e31c44f7f1bd8315df
    try {
       const postid= req.params.id ///66df07e31c44f7f1bd8315df
       const posttobeedited = await Post.findById(postid) //{
    //     "userid": "66c34cf312a670be1b3723d0",
    //     "caption": "hello this is my second post from tony",
    //     "likes": [],
    //     "_id": "66df07e31c44f7f1bd8315df",
    //     "__v": 0
    // }
       if(posttobeedited.userid == req.body.userid){
        // const updatedpost = await Post.findByIdAndUpdate(postid,req.body,{new:true})
        await posttobeedited.updateOne({$set:req.body})
        res.status(200).json({message:"Post updated successfully",updatedpost})
       }

        
    } catch (error) {
        
    }
})


router.delete("/delete/:id",async(req,res)=>{
try {
    await Post.findByIdAndDelete(req.params.id)
    res.send("Post deleted")
    
} catch (error) {
    
}
})


module.exports = router