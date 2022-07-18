const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String },
    address: {
        country: { type: String, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true },
    },
    photo: { type: String, required: true },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    role: { type: String, required: true },
    from: { type: Array },
    uniqueString: { type: String, required: true },
    verification: { type: Boolean, required: true },
    phoneNumber: { type: String, required: true },
    cart: [{ type: mongoose.Types.ObjectId, ref: 'products' }]


})
const User = mongoose.model('users', userSchema)

module.exports = User