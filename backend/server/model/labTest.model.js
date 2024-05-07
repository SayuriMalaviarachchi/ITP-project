const mongoose = require("mongoose");
//document structure
var schema = new mongoose.Schema({
    test_name:{
        type:String,
        required:true
    },
    test_description:{
        type:String,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    preparation:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
})



const labTest = mongoose.model("labTest", schema);

module.exports = labTest;