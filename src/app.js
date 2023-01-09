const express = require('express');
const bodpyParser = require('body-parser');
require('dotenv').config();
const config = require('./config/config.js');
const userRoutes = require('./routes/userRoutes.js')
const economicsRoutes = require('./routes/economicRoutes.js')


// app
const app = express();

// Database configuration
config.connectDb();

// Routes. 
app.use('/users', userRoutes);


app.listen(process.env.PORT || 3000, () => {
    const port = process.env.PORT ? process.env.PORT : 3000;
    console.log("Server is listening on " + port);
})