const express = require("express");
require("dotenv").config();
const router = express.Router();
const User = require("../models/User");
require('mongoose');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

router.post("/", async (req, res) =>{
    const name = req.body.name;
    const number = req.body.number.replace(/\D/g,'');
    const sign = req.body.sign.toLowerCase()
   
    const newUser = new User({
        name,
        number,
        sign
    });
    newUser.save()
    client.messages
    .create({
       body: "👋Hello from ZodiacSMS! You will now recieve your daily horoscope reading at 9:30AM EST. If you don't what to recieve any more message reply STOP.",
       from: '+14255377759',
       to: number
     })
    .then(message => console.log(message.sid));

})
    


module.exports = router;