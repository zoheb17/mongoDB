import express from "express"
import bcrypt from "bcrypt"
import userModel from "../../models/User/User.js"

const router = express.Router()

router.get("/getalluser",async(req,res)=>{
    try {
        let  alluser=await userModel.find();
        console.log(alluser);
        res.status(200).json({msg:alluser}) 
        

        console.log(alluser);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

        
    }
}) 


router.post("/register",async (req,res)=>{
    try {
        let userinput = req.body 
        userinput.password= await bcrypt.hash(userinput.password,10)
        await userModel.create(userinput)
        res.status(200).json({msg:"register succesfull"})
    } catch (error) {
      console.log(error);
      res.status(500).json({msg:error})
        
    }
})
export default router;