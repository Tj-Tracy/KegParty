const express = require('express');
const Passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../models/User');
const userController = require('../controllers/user_controller');

Passport.use(new Strategy(User.authenticate()));
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());

const router = express.Router();




router.post('/addToFavorites', userController.addFavorite);
router.post('/removeFromFavorites', userController.removeFavorite);
router.post('/addReview', userController.addReview);
router.post('/deleteReview', userController.deleteReview);
router.get('/:userid', userController.showProfile);

module.exports = router;
