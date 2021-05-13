//setup our ORM (Mongoose)
const mongoose = require('mongoose');

require('dotenv').config();

//mongodb connection string 
const { CONNECTION_STRING } = process.env;
console.log(CONNECTION_STRING)
    //connect mongoose to the database
module.exports = () => {
    mongoose.connect(CONNECTION_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }, (err) => {
        if (err) console.log(err)
        else {
            console.log("connection to database successful!")
        }
    })
};