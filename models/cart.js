const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productsId: [{ type: mongoose.Types.ObjectId, ref: "products" }],
  purchaseId: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: "users" },
  payer: { type: Object, required: true },
  date: { type: Date },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
