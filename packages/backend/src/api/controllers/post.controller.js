const postService = require('../services/post.service');
const addPost = (req, res) => {
    const {description} = req.body;
    const {uid} = req.auth;
    const image = req.file.path;

    postService.addPost(description, image, uid)
        .then(post => {
            res.status(200).json({message: 'Post successfully added'});
        })
        .catch(err => {
            res.status(200).json({message: err.message});
        });
}

const fetchPosts = (req, res) => {
    postService.fetchPosts()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(200).json({message: err.message});
        });
}

const likePost = (req, res) => {
    const {uid} = req.auth;
    const {postID} = req.params;

    postService.likePost(postID, uid)
        .then(() => {
            res.status(200).json({message: 'Post successfully liked'});
        })
        .catch(err => {
            res.status(200).json({message: err.message});
        });
}

const unlikePost = (req, res) => {
    const {uid} = req.auth;
    const {postID} = req.params;
    postService.unlikePost(postID, uid)
        .then(() => {
            res.status(200).json({message: 'Post successfully unliked'});
        })
        .catch(err => {
            res.status(200).json({message: err.message});
        });
}

module.exports = {addPost, fetchPosts, likePost, unlikePost}
