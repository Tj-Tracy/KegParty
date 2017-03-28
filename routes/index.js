const express = require('express');
const authController = require('../controllers/auth_controller');


const router = express.Router();
const err = '';
router.get('/', (req, res) => res.render('home'));
router.use('/search', require('./search'));
router.use('/beers', require('./beers'));
router.use('/users', require('./users'));

router.get('/login', (req, res) => res.render('login', { err }));
router.post('/login', authController.loginUser);
router.get('/signup', (req, res) => res.render('signup', { err }));
router.post('/signup', authController.signup);

router.get('/logout', (req, res) => {
  req.logout();
  return res.redirect('/');
});


module.exports = router;
