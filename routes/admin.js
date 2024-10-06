const express = require("express")
const Router = express.Router
const { adminModel, courseModel } = require("../db.js")
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config.js")
const { adminMiddleware } = require("../middlewares/admin.js")


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
        },JWT_ADMIN_PASSWORD);
        
        res.json({
            token: token,
        })
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }


    
})

adminRouter.post("/course", adminMiddleware, async(req,res)=>{
    const adminId = req.userId;

    const{ title, description, imageUrl, price } = req.body;
    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId,
    })
    
    res.json({
        message: "course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware, async(req,res)=>{
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    },   
    {
        title,
        description,
        imageUrl,
        price,
        creatorId,
    })
    res.json({
        message: "course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async(req,res)=>{
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId,
    })
    res.json({
        courses
    })
})

module.exports = {
    adminRouter,
}