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


const PORT = process.env.PORT || 3000

//server creation
app.listen(PORT, (err) => {
    if (err) {
        console.log("error", err);
    } else {
        console.log("server is up and running" , PORT);
    }
})