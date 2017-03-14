const Mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const PassportLocalMongoose = require('passport-local-mongoose');


const User = new Schema({
  username: String,
  password: String,
});

User.plugin(PassportLocalMongoose);

module.exports = Mongoose.model('User', User);
