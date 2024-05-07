const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        //mogo db connection string
        mongoose.connect("mongodb+srv://sayuri:123@cluster0.fobepbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true,
        })

        console.log("Mongo DB Connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports =connectDB;
