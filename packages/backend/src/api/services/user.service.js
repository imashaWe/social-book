const User = require('../models/user');
const jwt = require("jsonwebtoken");
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
            token: generateToken(newUser.id, newUser.email),
            user: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                isVerified: newUser.isVerified,
            }

        }
    } catch (e) {
        throw e;
    }
}

const generateToken = (uid, username) =>
    jwt.sign({uid: uid, username: username}, process.env.ACCESS_TOKEN_SECRET);

module.exports = {
    createUser
}
