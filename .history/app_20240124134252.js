const express=require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users',users);

//index route
app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});

//start server
app.listen(port,() => {
    console.log ('Server started on port ' + port);

});