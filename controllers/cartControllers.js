const Cart = require("../models/cart");

const cartControllers = {
  createSummary: async (req, res) => {
    let { productId, userId, date, amount, state } = req.body.cart;
    const user = req.user.id;

    let error = null;
    try {
      const newSummary = await new Summary({
        productId,
        userId,
        date,
        amount,
        state,
      });
      await newSummary.save();
    } catch (err) {
      error = err;
    }
    res.json({
      res: error ? "ERROR" : newSummary,
      success: error ? false : true,
      error: error,
    });
  },
};

module.exports = cartControllers;
