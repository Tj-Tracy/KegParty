const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.render('home'));
router.use('/search', require('./search'));
router.use('/beers', require('./beers'));
router.use('/users', require('./users'));


module.exports = router;
