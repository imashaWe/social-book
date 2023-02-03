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

module.exports = {addPost, fetchPosts}
