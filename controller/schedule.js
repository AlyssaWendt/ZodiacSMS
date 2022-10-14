const express = require("express");
require("dotenv").config();
const router = express.Router();
const User = require("../models/User");
require('../config/db.connection.js');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const axios = require("axios");
const aztroJs = require("aztro-js")



router.get('/', async (req, res) => {
	//for loop {
        const allUsers = await User.find({})
        console.log(allUsers)
        for(i=0;i<allUsers.length; i++){
              
        const options = {
            method: 'POST',
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params:{ sign: `${allUsers[i].sign}`, day: 'today'},
            headers: {
              'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
              'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
            }
          };
    
          await axios.request(options).then(function (response) {
            horoscopeDesc = response.data.description
            //console.log(horoscopeDesc)
        }).catch(function (error) {
            console.error(error);
        });
        client.messages
    .create({
       body: `Hello ${allUsers[i].name}, ${horoscopeDesc}`,
       from: '+14255377759',
       to: allUsers[i].number
     })
    .then(message => console.log(message.sid));


		}   
  
})
        

module.exports = router;