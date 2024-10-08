const express = require("express")
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express()
const port = 4000

app.use(express.json())
app.use("/api/v1/user",userRouter)
app.use("/api/v1/course",courseRouter)
app.use("/api/v1/admin", adminRouter)



app.listen(port,()=> {
    console.log(`Server is running on port: ${port}`)
})