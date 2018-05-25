import mongoose, { Schema } from 'mongoose';

const customerSchema = new Schema({
    firstName: { type: 'String', required: true },
    lastName: { type: 'String', required: true },
    userName: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true },
    age: { type: 'Number', default: 18, required: true },
});

const Customer = mongoose.model('customerdatails', customerSchema);

export default Customer;