const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config.json')

const app=express();

// MiddleWare
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/posts',require('./api/posts'));

// Mongo Db Connection
mongoose.connect(config.dbURI,{useNewUrlParser : true});

// Port
const port = process.env.PORT || 5000;

// Server start
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});