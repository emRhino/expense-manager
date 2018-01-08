const express = require('express');
const router = require('./routes/routes.js');
const dbAddress = require('./dbAddress.js');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


app.set('engine view', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));

mongoose.connect(dbAddress);

app.use('/', router);

module.exports = app;

