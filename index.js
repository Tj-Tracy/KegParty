const express = require('express');

const app = express();

const axios = require('axios');

const brewAPI = '&key=72220654c478e056063a0d4757578df4';

app.set('view engine', 'ejs');

class Beer {

  constructor(name, description, id) {
    this.name = name;
    this.description = description;
    this.id = id;
  }
}

const beerList = [];

function populateBeerList(searchData) {
  searchData.data.forEach((beer) => {
    const x = new Beer(beer.name, beer.description, beer.id);
    beerList.push(x);
  });
}

app.get('/', (req, res) => {
  res.render('index');
  
});

app.get('/beers/:beerid', (req, res) => {
  console.log(res.params.beerid);
});

app.get('/search?q', (req, res) => {
  axios.get(`http://api.brewerydb.com/v2/search?q=${req.query.searchText}&${brewAPI}`)
  .then((response) => {
    populateBeerList(response.data);
    res.render('index', { beerList });
  })
  .catch((error) => {
    console.log(error);
  });
});


app.listen('3000', () => {
  console.log('Started at 3000');
});

