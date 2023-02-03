const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.auth);
    res.send('Hello World!');
});

module.exports = router;
