const axios = require('axios');
const Review = require('../models/Review');

const { API_KEY } = process.env;

const beerInfo = {
  getBeerInfo: async (req, res) => {
    // getting the beer info from BreweryDB
    const response = await axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}?key=${API_KEY}`);
    const breweryResponse = await axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}/breweries?key=${API_KEY}`);
    const beer = response.data;
    const brewery = breweryResponse.data;
    const loggedInUser = req.isAuthenticated();
    // get the reviews
    const reviews = await Review.find({ beerid: `${req.params.beerid}` });
    console.log(reviews);
    let isFav = false;
    if (loggedInUser) {
      isFav = req.user.favorites.find(fav => fav.beerID === req.params.beerid);
    }
    return res.render('beerInfo', { beer, loggedInUser, brewery, isFav, reviews });
  },
};

module.exports = beerInfo;
