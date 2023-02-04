const {Schema, model} = require('mongoose');

const VerificationCodeSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = model('VerificationCode', VerificationCodeSchema);
