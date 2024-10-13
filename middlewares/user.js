const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config.js")

function userMiddleware(req,res,next) {
    const token = req.headers.token;
    const decoded = jwt.verify(jwt,JWT_USER_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message:"You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}

//Streak 1
//Strea 2
//Streak 4