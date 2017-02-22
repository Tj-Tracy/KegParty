const express = require('express');

const app = express();

const axios = require('axios');

const brewAPI = 'key=72220654c478e056063a0d4757578df4';

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(require('./controllers'));
//app.use(require('./middleware'));




app.listen('3000', () => {
  console.log('running at http://localhost:3000');
});

