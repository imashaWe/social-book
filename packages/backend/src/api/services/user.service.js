const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const createUser = async (firstName, lastName, email, password) => {
    const user = new User({
        firstName,
        lastName,
        email,
        password,
    });

    try {
        const newUser = await user.save();
        return {
            uid: user.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            isVerified: newUser.isVerified,
            token: generateToken(newUser.id, newUser.email),
        }
    } catch (e) {
        throw e;
    }
}

const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({email: email});

        if (!user) {
            throw new Error('User not found');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new Error('Invalid password');
        }

        return {
            uid: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isVerified: user.isVerified,
            token: generateToken(user.id, user.email),
        }
    } catch (e) {
        throw e;
    }

}
const generateToken = (uid, username) =>
    jwt.sign({uid: uid, username: username}, process.env.ACCESS_TOKEN_SECRET);

module.exports = {
    createUser,
    loginUser
}
