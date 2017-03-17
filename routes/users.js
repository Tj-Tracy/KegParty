const express = require('express');
const Passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../models/User');
const loginController = require('../controllers/login_controller');
const signupController = require('../controllers/signup_controller');


Passport.use(new Strategy(User.authenticate()));
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());

const router = express.Router();


const err = '';
router.get('/login', (req, res) => res.render('login', { err }));
router.post('/login', loginController.loginUser);
router.get('/signup', (req, res) => res.render('signup', { err }));
router.post('/signup', signupController.signup);
router.get('/:userid', loginController.showProfile);


module.exports = router;
