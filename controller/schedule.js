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



router.post('/', async (req, res) => {
	//for loop {
    User.find({}, (err, allUsers) =>{
        for(i = 0; i<allUsers.length; i++){
            console.log(allUsers[i])
            let horoscopeDesc
        const options = {
            method: 'POST',
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params:{ sign:` ${allUsers[i].sign} `, day: 'today'},
            headers: {
              'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
              'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
            }
          };
          console.log(options.params)
        }
    })
})
        






module.exports = router;