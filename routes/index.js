const express = require('express');
const authController = require('../controllers/auth_controller');
const homeController = require('../controllers/home_controller');
const axios = require('axios');
const {API_KEY } = process.env;


const router = express.Router();
const err = '';
router.get('/', homeController.showFeatured);
router.get('/help', (req, res) => res.render('help'));
router.use('/search', require('./search'));
router.use('/beers', require('./beers'));
router.use('/users', require('./users'));

router.get('/login', (req, res) => res.redirect('/'));
router.post('/login', authController.loginUser);
router.get('/signup', (req, res) => res.render('signup', { err }));
router.post('/signup', authController.signup);

router.get('/logout', (req, res) => {
  req.logout();
  return res.redirect('/');
});


router.get('/random', async (req, res) => {
  let response;
  try {
    response = await axios.get(`http://api.brewerydb.com/v2/beer/random?key=${API_KEY}`);
  } catch (error) {
    res.send(error);
  }
  return res.send(response.data.data);
});

module.exports = router;
