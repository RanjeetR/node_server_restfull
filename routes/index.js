const routes = require('express').Router();
import products from './products';
import users from './userdetails';
import customerService from '../services/customerService'
routes.use('/products', products);
routes.use('/user',users)

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!  CICD working  ....' });
});

routes.get('/customer', (req, res) => {
 customerService.getCollection(req, res);
})
routes.get('/save', (req, res) => {
  customerService.saveCustomer(req, res);
 })
export default routes;
