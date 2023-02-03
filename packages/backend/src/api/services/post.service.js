const Post = require('../models/post');
const storageService = require('../services/storage.service');

const addPost = async (description, imagePath, userID) => {
    try {
        const imageURl = await storageService.upload(imagePath);
        const post = new Post({
            description,
            imageURL: imageURl,
            postedBy: userID
        });
        await post.save();
        return post;
    } catch (e) {
        throw e;
    }
}

const fetchPosts = async () => {
    try {
        return await Post
            .find()
            .populate({path: 'postedBy', select: 'firstName lastName email'})
            .populate({path: 'likes', select: 'firstName lastName email'});
    } catch (e) {
        throw e;
    }
}

module.exports = {addPost, fetchPosts}
