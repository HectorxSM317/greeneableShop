const Cart = require("../models/cart");

const cartControllers = {
  createSummary: async (req, res) => {
    console.log(req.body);
    let { productId, purchaseId, userId, payer, date, amount, status } =
      req.body.summary;
    // const user = req.user.id;
    let newSummary;

    let error = null;
    try {
      newSummary = await new Cart({
        productsId: productId,
        purchaseId: purchaseId,
        userId: userId,
        payer: payer,
        date: date,
        amount: amount,
        status: status,
      }).save();
    } catch (err) {
      error = err;
    }
    console.log(newSummary);
    res.json({
      res: error ? "ERROR" : newSummary,
      success: error ? false : true,
      error: error,
    });
  },

  getOneSummary: async (res, req) => {
    const id = req.params._id;
    const summary = {};
    const error = null;

    try {
      summary = await Cart.findOne({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      res: error ? "ERROR" : summary,
      success: error ? false : true,
      error: error,
    });
  },
};

module.exports = cartControllers;
