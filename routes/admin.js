const express = require("express")
const Router = express.Router
const { adminModel } = require("../db.js")

const adminRouter = Router();

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message: "signup end point"
    })
})

adminRouter.post("/signin",(req,res)=>{
    res.json({
        message: "signin end point"
    })
})

adminRouter.post("/course",(req,res)=>{
    res.json({
        message: "make course end point"
    })
})

adminRouter.put("/course",(req,res)=>{
    res.json({
        message: "put end point"
    })
})

adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        message: "bulk end point"
    })
})

module.exports = {
    adminRouter,
}