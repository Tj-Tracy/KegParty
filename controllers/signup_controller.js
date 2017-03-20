const Passport = require('passport');
const User = require('../models/User');

const signupAuth = {
  signup: (req, res) => {
    const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
      return Passport.authenticate('local', (authError, authUser) => {
        if (authError) {
          return res.render('signup', { err: err.message });
        } else if (!authUser) {
          return res.render('signup', { err: err.message });
        }
        // return req.login(authUser, (loginError) => {
        //   if (loginError) {
        //     throw loginError;
        //   }
        //   return res.render('profile', { user: req.user.username });
        // });
        return res.redirect('/users/login');
      })(req, res);
    });
  },
};

module.exports = signupAuth;
