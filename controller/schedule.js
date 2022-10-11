const express = require("express");
require("dotenv").config();
const router = express.Router();
const User = require("../models/User");
require('mongoose');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);