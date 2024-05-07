const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


const labiratorian = mongoose.model("labiratorian", schema);

module.exports = labiratorian;