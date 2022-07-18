const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: [{ type: String, required: true }],
    rating:[{
        number: { type: Number },
        userId: [{ type: mongoose.Types.ObjectId, ref: 'users'}],
    }]

})
const Product = mongoose.model('products', productSchema)

module.exports = Product 