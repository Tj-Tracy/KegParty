const Mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const PassportLocalMongoose = require('passport-local-mongoose');


const User = new Schema({
  username: String,
  password: String,
  favorites: [{
    beerName: String,
    beerID: String,
  }],
});



User.plugin(PassportLocalMongoose);

module.exports = Mongoose.model('User', User);
