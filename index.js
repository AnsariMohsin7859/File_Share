//require express from npm 
const express = require("express");

//require database config from dbconfig file 
const db = require("./config/config");

//require .env module
require('dotenv').config()

//use app from express
const app = express();

//middileware for converting data from json to js and js to json 
app.use(express.json())

const fileRouter = require ('./routes/files')

app.use('/api' ,fileRouter )


//sample for checking server connection 
app.get('/get' , (req , res)=>{
    console.log("working");
    return res.send('working')
})






const PORT = process.env.PORT || 3000

//server creation
app.listen(PORT, (err) => {
    if (err) {
        console.log("error", err);
    } else {
        console.log("server is up and running", PORT);
    }
})