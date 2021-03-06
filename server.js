// modules
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// variables
const app = express();
const port = process.env.PORT || 3001;
const usersRouter = require('./routes/api/users');

require('dotenv').config();
require('./config/database');


// middleware
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// routes
app.use('/api/users', usersRouter);
app.use('/api', require('./routes/api/games'));

app.listen(port, function() {
    console.log(`express app is running on port ${port}`)
});