const dotenv = require('dotenv');
const express = require('express');
const mongodb = require('./database/mongodb');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

dotenv.config();

const port = process.env.PORT || 4000;

// connect to mongodb
mongodb.connect();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/auth', require('./api/routes/auth.routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
