const Mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const Favorite = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  beerName: String,
  rating: Number,
  beerID: String,
});

module.exports = Mongoose.model('Favorite', Favorite);
