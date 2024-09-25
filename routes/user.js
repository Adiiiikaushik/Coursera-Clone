const express = require("express");
const Router = express.Router;

const userRouter = Router();

userRouter.post("/signup",(req,res)=>{
    res.json({
        message: "signup end point"
    })
})

userRouter.post("/signin",(req,res)=>{
    res.json({
        message: "signin end point"
    })
})

userRouter.get("/purchase",(req,res)=>{
    res.json({
        message: "user courses end point"
    })
})

module.exports = {
    userRouter,
}