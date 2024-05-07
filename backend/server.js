const express = require("express");
const cors = require("cors");
const connectDB = require("./server/database/connection");

//get env file configarations
require("dotenv").config();

//app initiation
const app = express();
const port = 5001;

app.use(cors({
	origin: 'http://localhost:3000'
  }));
app.use(express.json());

//connect mongo db database
connectDB();

//load routers
app.use("/", require("./server/routes/router"));

//app is up n running
app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
