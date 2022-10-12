const express = require("express");
require("dotenv").config();
const router = express.Router();
const User = require("../models/User");
const db = require('../config/db.connection.js');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const axios = require("axios");
const aztroJs = require("aztro-js")



User.aggregate(
    [
        {$match: {}},
        {$group: {_id: "$sign"}},

    ],
    (err, sign) => {
        console.log(sign)
      }
    
)
  


const options = {
  method: 'POST',
  url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
  params:{ sign: "Scorpio" , day: 'today'},
  headers: {
    'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
  }
};
//console.log(options.params)
axios.request(options).then(function (response) {
   
 
   
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

router.post("/", async (res, req) =>{
    
   // client.messages
    //.create({
        //day: day,
       // sign: sign,
       // body: req.body.description,
       // from: '+14255377759',
       // to: number
    // })
    //.then(message => console.log(message.sid));
})






module.exports = router;