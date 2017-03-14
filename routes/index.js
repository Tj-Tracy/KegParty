const express = require('express');

const router = express.Router();


router.use('/search', require('./search'));
router.use('/beers', require('./beers'));
router.use('/users', require('./users'));

// home path
router.get('/', (req, res) => res.render('index'));


module.exports = router;
