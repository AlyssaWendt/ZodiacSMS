const express = require("express");
require("dotenv").config();
const router = express.Router();
const User = require("../models/User");
require('mongoose');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const axios = require("axios");
const aztroJs = require("aztro-js")


const options = {
  method: 'POST',
  url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
  params: {sign: "sign", day: 'today'},
  headers: {
    'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
  }
};

axios.request(options).then(function (response) {
    const findUser = User.find({
        name: req.body.name,
        number: number,
        sign: sign,
    })
    aztroJs.getTodaysHoroscope(sign, function(res) {
        console.log(res)
    })
    console.log(findUser)
	//console.log(response.data);
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