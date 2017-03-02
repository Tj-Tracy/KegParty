const axios = require('axios');

const { API_KEY } = process.env;


const searchResults = {
  getResults: (req, res) => {
    const searchQuery = req.query.searchText;
    axios.get(`http://api.brewerydb.com/v2/search?q=${searchQuery}&type=beer&key=${API_KEY}`)
    .then((response) => {
      const beerList = response.data.data;
      console.log(beerList);
      return res.render('searchResults', { beerList });
    })
    .catch((error) => {
      console.log(error);
    });
  },
};

module.exports = searchResults;
