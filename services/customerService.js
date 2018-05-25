import Customer from '../models/customer'
const customerService = {}

customerService.getCollection = async (req, res)=> {
// write a methods to get list of collection from db.
    try {
        await Customer.find().sort('-age').exec((err, customers) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({
                customers,
            });
        });
    } catch (err) {
        res.send(err);
    }
}
customerService.saveCustomer = async(req, res)=> {
    //save customer to database
     let tempCustomer = {
        firstName: 'Ranjeet',
        lastName: 'Hange',
        userName: 'RanjeetH',
        password: 'notforu',
        age: 28,
     }
     let newUsr = new Customer(tempCustomer);
    try {
        newUsr.save((err, saved) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({
                user: saved,
            });
        });
    } catch (err) {
        res.send(err);
    }
}

export default customerService