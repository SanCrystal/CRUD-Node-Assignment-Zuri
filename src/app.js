// create an express server
const express = require('express');

require('dotenv').config();
//connect database
const db = require('./database/db')
db();

//require the routes
const userRoutes = require('./router/usersRouter')


//get port 
const PORT_ = process.env.PORT_ || 5500;


//instantiate our app 
const app = express();

//use body-parser middleware
app.use(express.json())

//use the urlencoded middleware
app.use(express.urlencoded({ extended: true }))

//use user routers 
app.use(userRoutes);

//listen to application on port
app.listen(PORT_, () => console.log(`Server is up on port ${PORT_}`));