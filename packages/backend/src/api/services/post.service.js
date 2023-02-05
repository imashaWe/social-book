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
        const response = await post.save();
        return await Post
            .findById(response.id)
            .populate({path: 'postedBy', select: 'firstName lastName username'})
            .populate({path: 'likes', select: 'firstName lastName username'});

    } catch (e) {
        throw e;
    }
}

const fetchPosts = async () => {
    try {
        return await Post
            .find()
            .populate({path: 'postedBy', select: 'firstName lastName username'})
            .populate({path: 'likes', select: 'firstName lastName username'})
            .sort({createdAt: -1, likes: -1});
    } catch (e) {
        throw e;
    }
}

const likePost = async (postID, userID) => {
    try {
        return await Post
            .findByIdAndUpdate(postID, {$addToSet: {likes: userID}}, {new: true})
            .populate({path: 'postedBy', select: 'firstName lastName username'})
            .populate({path: 'likes', select: 'firstName lastName username'});
    } catch (e) {
        throw e;
    }
}

const unlikePost = async (postID, userID) => {
    try {
        return await Post
            .findByIdAndUpdate(postID, {$pull: {likes: userID}}, {new: true})
            .populate({path: 'postedBy', select: 'firstName lastName username'})
            .populate({path: 'likes', select: 'firstName lastName username'});
    } catch (e) {
        throw e;
    }
}

module.exports = {addPost, fetchPosts, likePost, unlikePost}
