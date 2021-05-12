//setup our ORM (Mongoose)
const mongoose = require('mongoose');

//create a schema 
const { Schema } = mongoose;

//new instance of schema for user
const user = new Schema({


    name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true }

})

//create a model based off our schema
const User = mongoose.model('User', user);

module.exports = User;