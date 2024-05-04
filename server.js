
var express = require('express');
var server = express();
var routes = require('./routes/route.js');
var mongoose = require('mongoose');
const cors = require('cors');


// Remove any callback function from your Mongoose connect call
mongoose.connect('mongodb+srv://aditya:123@cluster0.tiygyhg.mongodb.net/youtube',)
  .then(() => {
    console.log('MongoDB Connected');
    server.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


  /*
mongoose.connect("mongodb+srv://aditya:123@cluster.zcqmic8.mongodb.net/crud",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});*/

server.use(cors());
server.use(express.json());
server.use(routes);

/*server.listen(3000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});
*/













/*

//import express from 'express';
var express = require('express');
//import dotenv from 'dotenv';
require('dotenv').config({path: './env'})
//mport connectDB from './db/db.js';
const connectDB = require('./db/db.js');
var routes = require('./routes/route.js');

/*import cors from 'cors';
import routes from './routes/route.js';*/
//const cors = require('cors');

/*dotenv.config({
    path: './.env'
});*/

/*
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


console.log(process.env.PORT);


connectDB()
.then(() => {
 
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});
app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
});*/