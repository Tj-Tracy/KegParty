const express = require('express');
const User = require('../models/User.js');
const Favorite = require('../models/Favorite.js')

const router = express.Router();

router.get('/', (req, res) => res.render('test'));

router.post('/', (req, res) => {
    const favorite = new Favorite;

    favorite.beerName = 'hi';
    favorite._user = req.user._id;

    favorite.save((err) => {
        req.user.favorites.push(favorite);
        req.user.save();
    });

   Favorite.find({ _user: req.user._id}, 'beerName', (err, item) => {
       res.send(item);
   });

   
    // res.send(req.user.favorites[0]);

});

module.exports = router;