const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});

// stroing the database document structure
// const  User = require('./userSchema');

//storing port number
const port = process.env.PORT || 4000;

//database connection
require('./conn');

//convert json format into object format to display the userschema
app.use(express.json());

//link router files to route
app.use(require('./auth'));


app.listen(port, ()=>{
    console.log(`server is running at ${port}`);

});
// .listen(port);