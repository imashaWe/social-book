const {Schema, model} = require('mongoose');

const VerificationCodeSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('VerificationCode', VerificationCodeSchema);
