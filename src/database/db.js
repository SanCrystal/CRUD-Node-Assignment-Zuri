//setup our ORM (Mongoose)
const mongoose = require('mongoose');

require('dotenv').config();

//mongodb connection string 
const { connectionString } = process.env;
console.log(connectionString)
    //connect mongoose to the database
module.exports = () => {
    mongoose.connect(connectionString, {
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