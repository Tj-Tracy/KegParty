const User = require('../models/User');
const Passport = require('passport');
const Mongoose = require('mongoose');
const Strategy = require('passport-local');

Passport.use(new Strategy(User.authenticate()));
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());

const loginAuth = {
  login: (req, res, next) => {
    Passport.authenticate('local', (err, user) => {
      if (err) {
        console.log(err);
        return res.render('login', { err });
      } else if (!user) {
        console.log(err);
        return res.render('login', { err });
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          return res.render('login', { err: loginError.message });
        }
        return res.json(user);
      });
    })(req, res, next);
  },
};

module.exports = loginAuth;
