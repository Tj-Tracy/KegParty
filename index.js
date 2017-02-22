const express = require('express');

const app = express();

const axios = require('axios');

const brewAPI = 'key=72220654c478e056063a0d4757578df4';

app.set('view engine', 'ejs');

class Beer {

  constructor(name, description, id) {
    this.name = name;
    this.description = description;
    this.id = id;
  }
}

function populateBeerList(searchData) {
  const beerList = [];
  searchData.data.forEach((beer) => {
    const x = new Beer(beer.name, beer.description, beer.id);
    beerList.push(x); 
  });
  return beerList;
}

app.get('/', (req, res) => {
  res.render('index');
  
});

app.get('/beers/:beerid', (req, res) => {
  //res.render("beer_info");
  console.log(req.params.beerid);
  axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}?${brewAPI}`)
  .then((response) => {
    res.send(response.data);
  }).catch((error) => {
    res.send(error);
  });
});

app.get('/search', (req, res) => {
  
  
  const searchQuery = req.query.searchText;
  axios.get(`http://api.brewerydb.com/v2/search?q=${searchQuery}&${brewAPI}`)
  .then((response) => {
    beerList = populateBeerList(response.data);
    res.render("search_results", {beerList});
  })
  .catch((error) => {
    console.log(error);
  });
  

});


app.listen('3000', () => {
  console.log('Started at 3000');
});

