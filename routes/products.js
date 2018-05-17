const products = require('express').Router({ mergeParams: true });
var fs = require('fs');


var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = (req, res) => {  
  fs.readFile( appDir +'/data/product.json', 'utf-8', (err, data)=> {
    res.end( data );
  })
    
  };
