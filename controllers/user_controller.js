const User = require('../models/User');
const Review = require('../models/Review');

const userMethods = {

  showProfile: async (req, res) => {
    // how to check if there is a user logged in: req.isAuthenticated()
    // if the user is authenticated, bring them to thier account page
    if (req.isAuthenticated() && req.user.username === req.params.userid) {
      const user = req.user;
      // const favs = await Favorite.find({ _user: req.user._id });
      const favs = user.favorites;
      const reviews = await Review.find({ userid: `${req.user.username}` });
      return res.render('account_page', { user, favorites: favs, reviews });
    }
    // if the user exists in the database take them to your page
    User.count({ username: req.params.userid }, async (err, count) => {
      if (count === 0) {
        return res.render('404');
      }
      const user = await User.find({ username: `${req.params.userid}` });
      console.log(user);
      const reviews = await Review.find({ userid: `${user.username}` });
      return res.render('profile', { user, reviews, favorites: user.favorites });
    });
  },

  addFavorite: (req, res) => {
    const favorite = { beerName: req.body.beerName, beerID: req.body.beerID };
    req.user.favorites.push(favorite);
    req.user.save();
    return res.redirect('back');
  },

  removeFavorite: (req, res) => {
    const isFav = req.user.favorites.indexOf(req.user.favorites.find(fav => fav.beerID === req.body.beerID));
    req.user.favorites.splice(isFav, 1);
    req.user.save();
    return res.redirect('back');
  },

  addReview: (req, res) => {
    const newReview = new Review();
    newReview.beerid = req.body.beerID;
    newReview.userid = req.user.username;
    newReview.title = req.body.title;
    newReview.body = req.body.textBody;
    newReview.rating = req.body.rating;

    newReview.save();
    return res.redirect('back');
  },

  deleteReview: async (req, res) => {
    await Review.find({ _id: `${req.body.reviewId}` }).remove();
    return res.redirect('back');
  },

};

module.exports = userMethods;

