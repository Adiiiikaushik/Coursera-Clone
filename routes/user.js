const express = require("express");
const { userModel } = require("../db");
const Router = express.Router;
const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "JHAGSD12"

const userRouter = Router();

userRouter.post("/signup",async (req,res)=>{
    const {email, password, firstname, lastname } = req.body;
    
    await userModel.create({
        email,
        password,
        firstname,
        lastname,
    })
    
    res.json({
        message: "signup Succeeded"
    })
})

userRouter.post("/signin",async(req,res)=>{
    const { email, password } = req.body;
    const user = await userModel.findOne({
        email,
        password,
    });

    if (user) {
        const token = jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);
        
        res.json({
            token: token,
        })
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }


    
})

userRouter.get("/purchase",(req,res)=>{
    res.json({
        message: "user courses end point"
    })
})

module.exports = {
    userRouter,
}