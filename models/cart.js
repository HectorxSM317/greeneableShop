const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Types.ObjectId, ref: "products" },
  userId: { type: mongoose.Types.ObjectId, ref: "users" },
  date: {
    exchange: { type: Date },
    sold: { type: Date },
    sent: { type: Date },
  },
  amount: { type: Number, required: true },
  state: { type: String, required: true },
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
