const userServices = require('../services/user.service');
const register = (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    userServices
        .createUser(firstName, lastName, email, password)
        .then((data) =>
            res.status(200).json({message: 'User successfully registered', user: data}))
        .catch((e) => res.status(200).json({message: e.message}));
}

const login = (req, res) => {
    const {email, password} = req.body;
    userServices
        .loginUser(email, password).then((data) =>
        res.status(200).json({message: 'User successfully logged in', user: data}))
        .catch((e) => res.status(200).json({message: e.message}));
}

module.exports = {
    register,
    login
}
