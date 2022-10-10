///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// import express
require("dotenv").config();
require('./config/db.connection')
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")


//Port and establish DB Connection
const PORT = process.env.PORT;
const userController = require("./controller/user-controller")
const app = express()





// create application object
app.use(express.json()); // parse json bodies - this will run before our request accesses the router
app.use(cors());; // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development
	
	///////////////////////////////
	// ROUTES
	////////////////////////////////
	// create a test route



app.get("/" ,(req, res)=>{
    res.send("Hello World")
})
app.use("/zodiacsms", userController);
///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
