const express=require('express');
const path = require('path');
const bodyParser = require('passport');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.use(cors());

app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});

app.listen(port,() => {
    console.log ('Server started on port ' + port);

});