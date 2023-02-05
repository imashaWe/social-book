const express = require('express');
const mailService = require('../../api/services/email.service');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/sendmail', (req, res) => {
    mailService.sendVerificationEmail('imasha98.we@gmail.com', 'Imasha', 'http://localhost:3000/verify/1234567890')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
