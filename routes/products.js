const products = require('express').Router({
  mergeParams: true
});
var fs = require('fs');
const mongoose = require('mongoose');


var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = (req, res) => {
  var dburl = 'mongodb://RanjeetR:Ranjeet_1989@ds125680.mlab.com:25680/ranjeetdb';
  mongoose.connect(dburl, function(err, db) {
      if (err) throw err;
      db.collection("productdetails").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
      });
  });
};