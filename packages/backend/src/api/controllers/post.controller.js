const postService = require('../services/post.service');
const addPost = (req, res) => {
    const {description} = req.body;
    const {uid} = req.auth;
    const image = req.file.path;

    postService.addPost(description, image, uid)
        .then(post => {
            res.status(200).json({message: 'Post successfully added', post});
        })
        .catch(err => {
            res.status(200).json({message: err.message});
        });
}

module.exports = {addPost}
