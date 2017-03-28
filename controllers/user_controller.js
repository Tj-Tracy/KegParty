const User = require('../models/User');

const userMethods = {

  showProfile: (req, res) => {
    // how to check if there is a user logged in: req.isAuthenticated()
    // if the user is authenticated, bring them to thier account page
    if (req.isAuthenticated() && req.user.username === req.params.userid) {
      const user = req.user;
      // const favs = await Favorite.find({ _user: req.user._id });
      const favs = user.favorites;
      return res.render('account_page', { user, favorites: favs });
    }
    const user = req.params.userid;
    // if the user exists in the database take them to your page
    User.count({ username: user }, (err, count) => {
      if (count === 0) {
        return res.render('404');
      }
      return res.render('profile', { user });
    });
  },

  addFavorite: (req, res) => {
    const favorite = { beerName: req.body.beerName, beerID: req.body.beerID };
    req.user.favorites.push(favorite);
    req.user.save();
    return res.redirect(`back`);
  },

  removeFavorite: (req, res) => {
    const isFav = req.user.favorites.indexOf(req.user.favorites.find(fav => fav.beerID === req.body.beerID));
    req.user.favorites.splice(isFav, 1);
    req.user.save();
    return res.redirect(`back`);
  },

};

module.exports = userMethods;

