const express = require('express');

const router = express.Router();


router.use('/search', require('./searchResults'));
router.use('/beers', require('./beerInfo'));

//home path
router.get('/', (req, res) => {
  res.render('index');
});


module.exports = router;