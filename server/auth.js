const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("./authenticate");

require("./conn");
const User = require("./userSchema");

// router.post('/register', async (req, res) => {
// console.log(req.body);
// res.json({message : req.body });
// });


// router.get("/register", (req, res) => {
//   console.log("Hello from router");
//   res.send("This is the resposnse from router");
// });


//async and await

router.post('/register', async (req, res) => {
    //object destructuring
    const { fname, lname, email, phone, pass, cpass } = req.body;
  
    //condition if any field is not get filled
    if (!fname || !lname || !email || !phone || !pass || !cpass) {
      return res.status(422).json({ error: "fill all the fields" });
    }
  
    try {
      //wait for user whether registered or not
      const userExist = await User.findOne({ email:email});
  
      if (userExist) {
           //if registered then return
        return res.status(429).json({ error: " User already registered" })

      } else if (pass != cpass) {
        return res.status(420).json({ error: "password are not matching" });
      
      } else {
        //if not registered then get the data in variable
        const user = new User({
          fname,
          lname,
          email,
          phone,
          pass,
          cpass
        });
  
        //secure password first by creating the middleware and then saving data
        // from userSchema.js
  
        await user.save(); // and save it in the new variable
  
        //if the it is saved then return the message
        return res.status(201).json({ message: "registration successfull" });
  
      }
    } catch (err) {
      console.log(err);
    }
  });
  //user registration done successfully thats why going toward login
//login route

  router.post("/login", async (req, res) => {
    try {
      let token;
      const { email, pass } = req.body;
  
      if (!email || !pass) {
        return res.status(400).json({ error: "please fill the data" });
      }
      const userLogin = await User.findOne({ email: email });
  
      //console.log(userLogin);
  
      if (userLogin) {
  
        //wait to match the pass with db pass
        const isMatch = await bcrypt.compare(pass, userLogin.pass); 
  
  //generate token
        token = await userLogin.generateAuthToken(); 
        console.log(token);
  
        //and then store the token in cookies using cookie() method
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000), // when to expire
          httpOnly: true, // where to add?  here, we are adding cookie at http
        });
        res.cookie("jwtoken", "login");
  
        if (!isMatch) {
          res.status(400).json({ error: "Inavalid data  " });
        } else {
          res.json({ message: "User logged in successfully " });
        }
      } else {
        res.status(400).json({ error: "User invalid " });
      }
    } catch (err) {
      console.log(err);
    }
  });


module.exports = router;
