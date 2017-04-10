const axios = require('axios');
const { API_KEY } = process.env;

const homeMethods = {
  showFeatured: async (req, res) => {
    if (req.isAuthenticated()) {
      const response = await axios.get(`http://api.brewerydb.com/v2/featured?key=${API_KEY}`);
      const beer = response.data.data.beer;
      const brewery = response.data.data.brewery;
      return res.render('beerOfTheDay', { beer, brewery });
    }
    const err = '';
    return res.render('home', { err });
  }
};

module.exports = homeMethods;
