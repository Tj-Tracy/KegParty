const express = require('express');
const Passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../models/User');
const authController = require('../controllers/auth_controller');
const userController = require('../controllers/user_controller');

Passport.use(new Strategy(User.authenticate()));
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());

const router = express.Router();


const err = '';
router.get('/login', (req, res) => res.render('login', { err }));
router.post('/login', authController.loginUser);
router.get('/signup', (req, res) => res.render('signup', { err }));
router.post('/signup', authController.signup);
router.get('/:userid', userController.showProfile);
router.post('/addToFavorites', userController.addFavorite);
router.post('/removeFromFavorites', userController.removeFavorite);
router.get('/logout', (req, res) => {
  req.logout();
  return res.redirect('/');
});


module.exports = router;
