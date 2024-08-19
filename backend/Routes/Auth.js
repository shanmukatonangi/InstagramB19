const router = require("express").Router()
const User = require("../models/Usermodel")
const bcrypt=require("bcrypt")


router.post("/login",async(req,res)=>{   //localhost:8888/ig/auth/login
try {
  const user=await User.findOne({email:req.body.email})//tony@gmail.com user={iukjgkgziugiiukbkiu} //true  //falsy
 !user && res.status(404).json("user not found") 
 const validPassword=await bcrypt.compare(req.body.password,user.password)// false
 !validPassword && res.status(400).json("wrong password")

 res.status(200).send("Successfuly logged in")
  
} catch (error) {
  res.status(400).send(error.message)
}
})

router.post("/register",async(req,res)=>{  //localhost:8888/ig/auth/register
  try {
    const salt= await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
  await  new User({
        username:req.body.username,//tony
        email:req.body.email,//tony@gmail.com
        password:hashedPassword
       }).save()
    
       res.send("registered")
    
  } catch (error) {
    res.status(400).send(error.message)
    
  }
    })


   

module.exports = router