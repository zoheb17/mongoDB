import express from "express"
import dotenv from "dotenv"
dotenv.config()

import userRouter from "./controller/user/index.js"
import "./utils/dbconnect.js"
const port = process.env.PORT 


const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    try {
        res.status(200).json({msg:`server start`})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
})

app.post("/show",(req,res)=>{
    try {

        console.log("hi");
        let fname = req.body
        // console.log(fn);
        res.status(200).json({msg:fname})
    } catch (error) {
    console.log(error); 
    res.status(500).json({msg:error})
    }
})
app.use("/user",userRouter)

app.listen(port,()=>{
    console.log(`server start http://localhost:${port}`);
})