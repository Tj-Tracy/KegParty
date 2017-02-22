const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(require('./controllers'));
// app.use(require('./middleware'));




app.listen('3000', () => {
  console.log('running at http://localhost:3000');
});

