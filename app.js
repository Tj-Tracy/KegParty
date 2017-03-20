const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Passport = require('passport');

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
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(require('./middleware'));
app.use(require('express-session')({
  secret: 'bumpa',
  resave: false,
  saveUninitialized: false,
}));
app.use(Passport.initialize());
app.use(Passport.session());
// error 404
app.use(require('./routes'));
app.use((req, res) => {
  res.status(400);
  res.render('404');
});




app.listen('3000', () => {
  console.log('running at http://localhost:3000');
});

