const userServices = require('../services/user.service');
const register = (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    userServices.createUser(firstName, lastName, email, password).then((data) => {
        res.status(200).json({...data, message: 'User successfully registered'});
    })
}

module.exports = {
    register
}
