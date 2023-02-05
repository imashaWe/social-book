const {expressjwt: jwt} = require("express-jwt");
const dotenv = require("dotenv");

dotenv.config();

const authentication = jwt({
    secret: process.env.ACCESS_TOKEN_SECRET,
    algorithms: ["HS256"],
}).unless({path: [/^\/auth\/.*/]});

module.exports = authentication;
