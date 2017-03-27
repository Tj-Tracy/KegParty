const axios = require('axios');

const { API_KEY } = process.env;

const beerInfo = {
  getBeerInfo: async (req, res) => {
    const response = await axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}?key=${API_KEY}`);
    const breweryResponse = await axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}/breweries?key=${API_KEY}`);
    const beer = response.data;
    const brewery = breweryResponse.data;
    const loggedInUser = req.isAuthenticated();
    let isFav = false;
    if (loggedInUser) {
      isFav = req.user.favorites.find(fav => fav.beerID === req.params.beerid);
    }
    return res.render('beerInfo', { beer, loggedInUser, brewery, isFav });
  },
};

module.exports = beerInfo;
