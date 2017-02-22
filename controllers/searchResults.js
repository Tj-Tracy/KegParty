const axios = require('axios');

const express = require('express');

const router = express.Router();

const brewAPI = 'key=72220654c478e056063a0d4757578df4';

const beers = require('../models/beer');


router.get('/', (req, res) => {
  const searchQuery = req.query.searchText;
  axios.get(`http://api.brewerydb.com/v2/search?q=${searchQuery}&type=beer&${brewAPI}`)
  .then((response) => {
    beerList = populateBeerList(response.data);
    res.render("search_results", {beerList});
  })
  .catch((error) => {
    console.log(error);
  });
});

function populateBeerList(searchData) {
      const beerList = [];
      searchData.data.forEach((beer) => {
          const x = new beers.beer(beer.name, beer.description, beer.id);
          beerList.push(x); 
      });
      return beerList;
}

module.exports = router;