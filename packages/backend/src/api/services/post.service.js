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
            .populate({path: 'likes', select: 'firstName lastName email'})
            .sort({createdAt: -1, likes: -1});
    } catch (e) {
        throw e;
    }
}

const likePost = async (postID, userID) => {
    try {
        return Post.updateOne({_id: postID}, {$addToSet: {likes: userID}});
    } catch (e) {
        throw e;
    }
}

const unlikePost = async (postID, userID) => {
    try {
        return Post.updateOne({_id: postID}, {$pull: {likes: userID}});
    } catch (e) {
        throw e;
    }
}

module.exports = {addPost, fetchPosts, likePost, unlikePost}
