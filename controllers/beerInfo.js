const express = require('express');

const router = express.Router();

const axios = require('axios');

const brewAPI = 'key=72220654c478e056063a0d4757578df4';


router.get('/:beerid', (req, res) => {
  console.log(req.params.beerid);
  axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}?${brewAPI}`)
  .then((response) => {
    const beer = response.data;
    res.render('beerInfo', { beer });
  }).catch((error) => {
    res.send(error);
  });
});


module.exports = router;
