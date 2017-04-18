const axios = require('axios');
const Review = require('../models/Review');

const { API_KEY } = process.env;

const beerInfo = {
  getBeerInfo: async (req, res) => {
    // getting the beer info from BreweryDB
    let response;
    let breweryResponse;
    let reviews;
    try {
      response = await axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}?key=${API_KEY}`);
    } catch (error) {
      console.log(error);
      return res.render('404');
    }
    try {
      breweryResponse = await axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}/breweries?key=${API_KEY}`);
    } catch (error) {
      console.log(error);
      return res.render('404');
    }
    try {
      reviews = await Review.find({ beerid: `${req.params.beerid}` });
    } catch (error) {
      console.log(error);
      return res.render('404');
    }
    
    const beer = response.data;
    const brewery = breweryResponse.data;
    const loggedInUser = req.isAuthenticated();
    
    let isFav = false;
    if (loggedInUser) {
      if (req.user.favorites.find(fav => fav.beerID === req.params.beerid) !== undefined) {
        isFav = true;
      }
    }
    return res.render('beerInfo', { beer, loggedInUser, brewery, isFav, reviews });
  },
};

module.exports = beerInfo;
