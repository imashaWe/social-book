const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    imageURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = model('Post', postSchema);
