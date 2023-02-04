const userServices = require('../services/user.service');
const register = (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    userServices
        .createUser(firstName, lastName, email, password)
        .then((data) =>
            res.status(200).json({status: true, message: 'User successfully registered', user: data}))
        .catch((e) => res.status(200).json({status: false, message: e.message}));
}

const login = (req, res) => {
    const {email, password} = req.body;
    userServices
        .loginUser(email, password).then((data) =>
        res.status(200).json({status: true, message: 'User successfully logged in', user: data}))
        .catch((e) => res.status(200).json({status: false, message: e.message}));
}

const verifyEmail = (req, res) => {
    const {token} = req.params;
    userServices
        .verifyEmail(token)
        .then((data) => res.status(200).json({status: true, message: 'Email successfully verified', user: data}))
        .catch((e) => res.status(200).json({status: false, message: e.message}));
}

module.exports = {
    register,
    login,
    verifyEmail
}
