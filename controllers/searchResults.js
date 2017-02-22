const axios = require('axios');

const express = require('express');

const router = express.Router();

const brewAPI = 'key=72220654c478e056063a0d4757578df4';


// function populateBeerList(searchData) {
//   const beerList = [];
//   searchData.data.forEach((beer) => {
//     const x = new beers.Beer(beer.name, beer.description, beer.id);
//     beerList.push(x);
//   });
//   return beerList;
// }

router.get('/', (req, res) => {
  const searchQuery = req.query.searchText;
  axios.get(`http://api.brewerydb.com/v2/search?q=${searchQuery}&type=beer&${brewAPI}`)
  .then((response) => {
    const beerList = response.data.data;
    res.render('searchResults', { beerList });
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
