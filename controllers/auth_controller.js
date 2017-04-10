const Passport = require('passport');
const User = require('../models/User');

const Auth = {
  signup: (req, res) => {
    const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
      return Passport.authenticate('local', (authError, authUser) => {
        if (authError) {
          return res.render('signup', { err: err.message });
        } else if (!authUser) {
          return res.render('signup', { err: err.message });
        }
        return res.redirect('/login');
      })(req, res);
    });
  },

   // log in the user
  loginUser: (req, res, next) => {
    Passport.authenticate('local', (err, user) => {
      if (err) {
        return res.render('login', { err });
      } else if (!user) {
        return res.render('login', { err });
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          return res.render('login', { err: loginError });
        }
        return res.redirect('/');
      });
    })(req, res, next);
  },
};

module.exports = Auth;
