const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const logger = require('morgan');

const app = express();
require('dotenv').config();

// connecting the local database
const { DB_HOST, DB_NAME } = process.env;
const DB_URL = `mongodb://${DB_HOST}/${DB_NAME}`;
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('./routes'));
// app.use(require('./middleware'));
// Store the user into a new express-session
app.use(require('express-session')({
  secret: 'bumpa',
  resave: false,
  saveUninitialized: false,
}));

// error 404
app.use((req, res) => {
  res.status(400);
  res.render('404');
});


app.listen('3000', () => {
  console.log('running at http://localhost:3000');
});

