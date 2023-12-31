const jwt = require("jsonwebtoken");

const User = require("./userSchema");

const authenticate = async(req,res,next) => {
try{
    
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECREY_KEY);

    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

    if(!rootUser){throw new Error('User not found') }
    req.token = token;
    req.rootUser= rootUser;
    req.userID = rootUser._id;
    
    next();

} catch(err) {
    res.status(401).send('unauthorised: no token')
    console.log(err);
   }
}

module.exports = authenticate;