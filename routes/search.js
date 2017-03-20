const express = require('express');
const searchController = require('../controllers/search_controller');

const router = express.Router();

router.get('/', searchController.getResults);

module.exports = router;
