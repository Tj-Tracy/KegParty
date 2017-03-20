const express = require('express');
const beerController = require('../controllers/beers_controller');

const router = express.Router();

router.get('/:beerid', beerController.getBeerInfo);

module.exports = router;
