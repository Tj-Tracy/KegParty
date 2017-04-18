const Mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const Review = new Schema({
  beerid: String,
  userid: String,
  title: String,
  body: String,
  rating: { type: Number, min: 0, max: 5 },
});



module.exports = Mongoose.model('Review', Review);
