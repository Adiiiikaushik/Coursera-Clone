const express = require("express")
const Router = express.Router

const courseRouter = Router()

courseRouter.get("/preview",(req,res)=> {
    res.json({
        message:"Preview Course End Point"
    })
})
courseRouter.post("/purchase",(req,res)=> {
    res.json({
        message:"Purchase Course End Point"
    })
})

module.exports = {
    courseRouter,
}