const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://adityakaushik1801:9MgdDEDp6d6xnqbx@cluster0.yaubo.mongodb.net/coursera-clone").then(console.log("DB Connected"))
const ObjectId = mongoose.Types.ObjectId
const Schema = mongoose.Schema


const userSchema = new Schema({
    email: {type: String, required: true},
    password: String,
    firstname: String,
    lastName: String,

});

const adminSchema = new Schema({
    email: {type: String, required: true},
    password: String,
    firstname: String,
    lastName: String,

});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
 
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,

});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

