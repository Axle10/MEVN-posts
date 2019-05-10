const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();

// MiddleWare
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/posts',require('./api/posts'));

// Mongo Db Connection
mongoose.connect('mongodb+srv://Axle10:qwerty123456@nodepracticecluster1-igz5g.mongodb.net/postsdb?retryWrites=true',{useNewUrlParser : true});

// Port
const port = process.env.PORT || 5000;

// Server start
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});