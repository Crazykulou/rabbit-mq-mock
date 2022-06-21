const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('mq', { title: 'hello world11' });
})

module.exports = router;