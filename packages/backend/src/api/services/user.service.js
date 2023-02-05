const User = require('../models/user');
const VerificationCode = require('../models/verification-code');
const emailService = require('./email.service');
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
        await sendVerificationEmail(email, firstName);
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

const sendVerificationEmail = async (email, name) => {
    const verificationCode = new VerificationCode({
        email: email
    });
    try {
        const newVerificationCode = await verificationCode.save();
        const verifyLink = `${process.env.APP_URL}/verify-email/${newVerificationCode.id}`;
        await emailService.sendVerificationEmail(email, name, verifyLink);
    } catch (e) {
        throw e;
    }
}

const verifyEmail = async (verificationCodeId) => {
    const response = await VerificationCode.findById(verificationCodeId);
    if (!response) {
        throw new Error('Invalid verification code');
    }
    await VerificationCode.findByIdAndDelete(verificationCodeId);
    const user = await User.findOneAndUpdate({email: response.email}, {isVerified: true}, {new: true});
    return {
        uid: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isVerified: user.isVerified,
        token: generateToken(user.id, user.email),
    }
}

module.exports = {
    createUser,
    loginUser,
    verifyEmail
}
