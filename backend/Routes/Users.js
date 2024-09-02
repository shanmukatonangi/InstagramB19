const router = require("express").Router()
const User = require("../models/Usermodel")



//edit a profile with put
router.put("/edit/:id",async(req,res)=>{
    try{
        const id= req.params.id   //66cf315223bfe6d5d1ca391e
        await User.findByIdAndUpdate(id,req.body)
        res.send("edited")

    }catch(err){
        res.status(500).json(err)
    }

})    //localhost:8888/ig/profile/edit/66cf315223bfe6d5d1ca391e == localhost:8888/ig/profile/edit/:id

//delete a profile 
router.delete("/delete/:id",async(req,res)=>{
    try{
        const id= req.params.id   //66cf315223bfe6d5d1ca391e
        await User.findByIdAndDelete(id)
        res.send("deleted")

    }catch(err){
        res.status(500).json(err)
    }

}) 

//get a profile

router.get("/:name",async(req,res)=>{   //localhost:8888/ig/profile/:name == localhost:8888/ig/profile/tony
    try {

        const user=await User.findOne({username:req.params.name})
        res.send(user)
        
    } catch (error) {
        
    }


})


//follow a user
router.put("/:id/follow",async(req,res)=>{  //localjost:8888/api/ig/profile/:id/follow
try {
    const useridtofollow= req.params.id
    const usertofollow=await User.findById(useridtofollow) // tony
    const currentuser=await User.findById(req.body.id)  // shanmukh
    if(!usertofollow.followers.includes(req.body.id)){
await usertofollow.updateOne({$push:{followers:req.body.id}})
await currentuser.updateOne({$push:{following:useridtofollow}})
    }else{
        res.send("you already follow him")
    }
   

    res.send("followed")



    
} catch (error) {
    
}
})


//unfollow a user
router.put("/:id/unfollow",async(req,res)=>{
    try {
       
        const usertounfollow=await User.findById(req.params.id) // tony
        const currentuser=await User.findById(req.body.id)  // shanmukh
        if(usertounfollow.followers.includes(req.body.id)){
    await usertounfollow.updateOne({$pull:{followers:req.body.id}})
    await currentuser.updateOne({$pull:{following:req.params.id}})
        }else{
            res.send("you don't follow him")
        }
       
    
        res.send("unfollowed")
    
    
    
        
    } catch (error) {
        
    }
    })



module.exports = router