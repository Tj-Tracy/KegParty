const Passport = require('passport');


const loginAuth = {
  loginUser: (req, res, next) => {
    Passport.authenticate('local', (err, user) => {
      if (err) {
        console.log(err + "1");
        return res.render('login', { err });
      } else if (!user) {
        console.log(err + "2");
        return res.render('login', { err });
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          console.log(err);
          return res.render('login', { err: loginError });
        }
        return res.redirect(`/users/${user.username}`);
      });
    })(req, res, next);
  },

  showProfile: (req, res) => {
    // how to check if there is a user logged in: req.isAuthenticated()
    console.log(req.isAuthenticated());
    const user = 'aaaa';
    if (req.isAuthenticated()) {
      res.render('profile', { user });
    } else {
      res.render('index');
    }
  },

};

module.exports = loginAuth;
