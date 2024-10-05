const express = require("express")
const Router = express.Router
const { adminModel } = require("../db.js")
const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "JjkahsdGSD12"

const adminRouter = Router();

adminRouter.post("/signup", async(req,res)=>{
    const {email, password, firstname, lastname } = req.body;
    
    await adminModel.create({
        email,
        password,
        firstname,
        lastname,
    })
    
    res.json({
        message: "signup Succeeded"
    })
})

adminRouter.post("/signin", async(req,res)=>{
    const { email, password } = req.body;
    const user = await adminModel.findOne({
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