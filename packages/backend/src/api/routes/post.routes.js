const multer = require('multer');
const express = require('express');
const postController = require('../controllers/post.controller');

const router = express.Router();
const upload = multer({dest: 'uploads/'});

router.post('/', upload.single('image'), postController.addPost);
router.get('/', postController.fetchPosts);
router.post('/:postID/like', postController.likePost);
router.post('/:postID/unlike', postController.unlikePost);

module.exports = router;

