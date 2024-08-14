const router = require("express").Router()
const User = require("../models/Usermodel")
const bcrypt=require("bcrypt")


router.post("/login",(req,res)=>{   //localhost:8888/ig/auth/login
res.send("hello im ig login page")
})

router.post("/register",async(req,res)=>{  //localhost:8888/ig/auth/register
  try {
    const salt= await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
  await  new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
       }).save()
    
       res.send("registered")
    
  } catch (error) {
    res.status(400).send(error.message)
    
  }
    })


   

module.exports = router