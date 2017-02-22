const express = require('express');

const router = express.Router();

const axios = require('axios');

const brewAPI = 'key=72220654c478e056063a0d4757578df4';


//home path
router.get('/:beerid', (req, res) => {
  //res.render("beer_info");
  console.log(req.params.beerid);
  axios.get(`http://api.brewerydb.com/v2/beer/${req.params.beerid}?${brewAPI}`)
  .then((response) => {
    res.send(response.data);
  }).catch((error) => {
    res.send(error);
  });
});


module.exports = router;