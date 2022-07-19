const Cart = require("../models/cart");

const cartControllers = {
  createSummary: async (req, res) => {
    let { productId, userId, date, amount, state } = req.body.cart;
    let { exchange, sold, sent } = date;
    console.log(req.body);
    // const user = req.user.id;
    let newSummary;

    let error = null;
    try {
      newSummary = await new Cart({
        productId: productId,
        userId: userId,
        date: date,
        amount: amount,
        state: state,
      }).save();
      console.log(newSummary);
    } catch (err) {
      error = err;
    }
    res.json({
      res: error ? "ERROR" : newSummary,
      success: error ? false : true,
      error: error,
    });
  },

  getOneSummary: async (res, req) => {
    const id = req.params._id;
    const asd = {};
    const error = null;

    try {
      asd = await Cart.findOne({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      res: error ? "ERROR" : asd,
      success: error ? false : true,
      error: error,
    });
  },
};

module.exports = cartControllers;
