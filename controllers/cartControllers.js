const Cart = require("../models/cart");
const sendSummary = require("./sendSummary");

const cartControllers = {
  createSummary: async (req, res) => {
    let { summary, productsId } = req.body;
    let newSummary;
    // console.log(req.body.summary)
    let error = null;
    try {
      newSummary = await new Cart({
        productsId: ["hola"],
        purchaseId: summary.purchaseId,
        userId: summary.userId,
        payer: summary.payer,
        date: summary.date,
        amount: summary.amount,
        status: summary.status,
      }).save();

      console.log(newSummary)
      await sendSummary(newSummary);
    } catch (err) {
      error = err;
    }

    res.json({
      res: error ? "ERROR" : newSummary,
      success: error ? false : true,
      error: error,
    });
  },

  getSummary: async (res, req) => {
    let summary;
    const error = null;

    try {
      summary = await Cart.find().populate("productsId").populate("userId");
    } catch (err) {
      error = err;
    }
    res.json({
      res: error ? "ERROR" : summary,
      success: error ? false : true,
      error: error,
    });
  },

  getOneSummary: async (res, req) => {
    const id = req.params._id;
    const summary = {};
    const error = null;

    try {
      summary = await Cart.findOne({ _id: id })
        .populate("productsId")
        .populate("userId");
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
