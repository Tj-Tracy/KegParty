const Passport = require('passport');
const User = require('../models/User');



const loginAuth = {

  // log in the user 
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

  //show the profile or account page depending on if the user is logged in or not
  showProfile: (req, res) => {
    // how to check if there is a user logged in: req.isAuthenticated()
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      const user = req.user.username;
      res.render('account_page', { user });
    } else {
      const user = req.params.userid;
      //if the user exists in the database take them to your page
      User.count({username: user}, function (err, count){ 
        if(count>0){
          res.render('profile', { user });
        } else {
          res.render("404");
        }
      }); 
    }
  },

};

module.exports = loginAuth;
