const Product = require("../models/product");

const ProductsControllers = {
  getProducts: async (req, res) => {
    let products;
    let error = null;
    try {
      products = await Product.find();
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : products,
      success: error ? false : true,
      error: error,
    });
  },
  getOneProduct: async (req, res) => {
    const id = req.params.id;
    let product;
    let error = null;
    try {
      product = await Product.findOne({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { product },
      success: error ? false : true,
      error: error,
    });
  },
  addProduct: async (req, res) => {
    const { name, photo, description, price, category, rating } = req.body.data;
    let product;
    let error = null;
    try {
      product = await new Product({
        name: name,
        photo: photo,
        price: price,
        description: description,
        category: category,
        rating: rating,
      }).save();
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : product,
      success: error ? false : true,
      error: error,
    });
  },
  modifyProduct: async (req, res) => {
    const id = req.params.id;
    const product = req.body.data;
    let productdb;
    let error = null;
    try {
      productdb = await Product.findOneAndUpdate({ _id: id }, product, {
        new: true,
      });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : productdb,
      success: error ? false : true,
      error: error,
    });
  },
  removeProduct: async (req, res) => {
    const id = req.params.id;
    let product;
    let error = null;
    try {
      product = await Product.findOneAndDelete({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : product,
      success: error ? false : true,
      error: error,
    });
  },
  getFiveProducts: async (req, res) => {
    let products;
    let error = null;
    try {
      products = await Product.find();
    } catch (err) {
      error = err;
    }
    var fiveRandom = [];
    for (i = 0; fiveRandom.length < 5; i++) {
      fiveRandom.push(products[Math.floor(Math.random() * products.length)]);
    }

    res.json({
      response: error ? "ERROR" : fiveRandom,
      success: error ? false : true,
      error: error,
    });
  },

  multiplesProducts: async (req, res) => {
    let product = [];
    const data = req.body.data;
    let error = null;
    try {
      data.map(async (item) => {
        await new Product({
          name: item.name,
          photo: item.photo,
          price: item.price,
          description: item.description,
          category: item.category,
          rating: item.rating,
        }).save();
      });
    } catch (err) {
      error = err;
    }
    product = await Product.find();
    res.json({
      response: error ? "ERROR" : product,
      success: error ? false : true,
      error: error,
    });
  },

  getFiveProducts: async (req, res) => {
    let products;
    let error = null;
    try {
      products = await Product.find();
    } catch (err) {
      error = err;
    }
    var fiveRandom = [];
    for (i = 0; fiveRandom.length < 5; i++) {
      fiveRandom.push(products[Math.floor(Math.random() * products.length)]);
    }

    res.json({
      response: error ? "ERROR" : fiveRandom,
      success: error ? false : true,
      error: error,
    });
  },
};

module.exports = ProductsControllers;
