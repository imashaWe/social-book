const postService = require('../services/post.service');
const addPost = (req, res) => {
    const {description} = req.body;
    const {uid} = req.auth;
    const image = req.file.path;

    postService.addPost(description, image, uid)
        .then(post => {
            res.status(200).json({status: true, message: 'Post successfully added', data: post});
        })
        .catch(err => {
            res.status(200).json({status: false, message: err.message});
        });
}

const fetchPosts = (req, res) => {
    postService.fetchPosts()
        .then(posts => {
            res.status(200).json({status: true, data: posts});
        })
        .catch(err => {
            res.status(200).json({status: false, message: err.message});
        });
}

const likePost = (req, res) => {
    const {uid} = req.auth;
    const {postID} = req.params;

    postService.likePost(postID, uid)
        .then((updatedPost) => {
            res.status(200).json({status: true, message: 'Post successfully liked', data: updatedPost});
        })
        .catch(err => {
            res.status(200).json({status: true, message: err.message});
        });
}

const unlikePost = (req, res) => {
    const {uid} = req.auth;
    const {postID} = req.params;
    postService.unlikePost(postID, uid)
        .then((updatedPost) => {
            res.status(200).json({status: true, message: 'Post successfully unliked', data: updatedPost});
        })
        .catch(err => {
            res.status(200).json({status: false, message: err.message});
        });
}

module.exports = {addPost, fetchPosts, likePost, unlikePost}
