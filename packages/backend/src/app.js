const dotenv = require('dotenv');
const express = require('express');
const mongodb = require('./database/mongodb');
const bodyParser = require("body-parser");
const cors = require("cors");
const authentication = require("./api/middlewares/authentication.middleware");

const app = express();

dotenv.config();

// connect to mongodb
mongodb.connect();

// middlewares
app.use(cors());
app.use(authentication);
app.use(bodyParser.json());

// routes
app.use('/auth', require('./api/routes/auth.routes'));
app.use('/test', require('./api/routes/test.routes'));
app.use('/post', require('./api/routes/post.routes'));

module.exports = app;
