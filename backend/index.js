const express =  require("express")
const app = express()
const morgan=require("morgan")
const helmet = require("helmet")
const mongoose = require('mongoose');
const authRoute = require("./Routes/Auth")
const userRoute = require("./Routes/Users")
const postRoute = require("./Routes/Posts")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://b19:b19@cluster0.6ye3v.mongodb.net/',console.log("DB COnnected"));
}

//MIDDLEWARES
app.use(express.json())// 
app.use(morgan("common"))
app.use(helmet())

//ROUTES
app.use("/ig/auth",authRoute)
app.use("/ig/profile",userRoute)
app.use("/ig/post",postRoute)



app.listen(8888,()=>{
    console.log("Server is running on 8888")
})