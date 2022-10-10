const express = require("express");
require("dotenv").config();
const router = express.Router();
const User = require("../models/User");
require('mongoose');
const Vonage = require('@vonage/server-sdk')
const SMS = require('@vonage/server-sdk/lib/Messages/SMS.js')


const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET

const vonage = new Vonage({
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET
  })

router.post("/", async (req, res) =>{
    const name = req.body.name;
    const number = req.body.number;
    const sign = req.body.sign
    const from = "18889873529"
    const text = "👋Hello from ZodiacSMS! If you don't what to recieve any more message reply STOP."
    const newUser = new User({
        name,
        number,
        sign
    });
    newUser.save()
    vonage.message.sendSms(from, number, text, function(error, result){
        if(error){
            console.log(error)
        } else {
            console.log(result);
        }
    })

}
    







module.exports = router;