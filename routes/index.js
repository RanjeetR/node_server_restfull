const routes = require('express').Router();
const products = require('./products');

routes.use('/products', products);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected! Test google cloud ....' });
});

module.exports = routes;
