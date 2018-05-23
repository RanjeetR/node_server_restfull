const routes = require('express').Router();
import products from './products';
import users from './userdetails';

routes.use('/products', products);
routes.use('/user',users)

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!  CICD working  ....' });
});

export default routes;
