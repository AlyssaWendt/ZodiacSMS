const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name cannot be empty"]},
    number: { type: String, required: [true, "number cannot be empty"]},
    sign: {type: String, required: [true, "sign cannot be empty"]}
}, {timestamps: true, //options - virtual methods 
})

const User = mongoose.model('User', userSchema)

module.exports = User