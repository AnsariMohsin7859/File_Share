const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fileSchema = new Schema({
    filename : {
        type : String , required : true
    },path:{
        type : String , required : true
    },size:{
        type : String , required : true
    },uuid:{
        type : String , required : true
    },sender:{
        type : String 
        
    },receiver:{
        type : String 
    },
}, {timestamps : true})

module.exports = mongoose.model('file' , fileSchema)