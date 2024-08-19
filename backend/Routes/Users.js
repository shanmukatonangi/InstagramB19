const router = require("express").Router()
const User = require("../models/Usermodel")



//edit a profile with put

//delete a profile 

//get a profile

router.get("/:name",async(req,res)=>{   //localhost:8888/ig/profile/:name == localhost:8888/ig/profile/tony
    try {

        const user=await User.findOne({username:req.params.name})
        res.send(user)
        
    } catch (error) {
        
    }


})


//follow a user

//unfollow a user



module.exports = router