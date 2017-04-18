const express = require('express');
const authController = require('../controllers/auth_controller');
const homeController = require('../controllers/home_controller');


const router = express.Router();
const err = '';
router.get('/', homeController.showFeatured);
router.get('/help', (req,res) => res.render('help'));
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


module.exports = router;
