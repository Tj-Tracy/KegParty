const axios = require('axios');

const { API_KEY } = process.env;

const beerInfo = {
  getBeerInfo: (req, res) => {
    console.log(req.params.beerid);
    axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}?key=${API_KEY}`)
  .then((response) => {
    const beer = response.data;
    return res.render('beerInfo', { beer });
  }).catch((error) => {
    res.send(error);
  });
  },
};

module.exports = beerInfo;
