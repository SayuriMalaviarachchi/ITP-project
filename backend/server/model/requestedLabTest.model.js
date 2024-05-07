const {mongoose, Schema} = require("mongoose");

var schema = new mongoose.Schema({
    test_name: {
        type: Schema.Types.String,
        required:true
    },
    requested_user_name:{
        type:String,
        required:true
    },
    requested_user_contact_number:{
        type:String,
        required:true
    },
    requested_date:{
        type:String,
        required:true
    },
    status:String,
})


const requestedLabTest = mongoose.model("requestedLabTest", schema);

module.exports = requestedLabTest;