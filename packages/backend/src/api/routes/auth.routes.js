const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/verify-email/:token', userController.verifyEmail);

module.exports = router;
