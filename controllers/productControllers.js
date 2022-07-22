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
    for (i = 0; fiveRandom.length < 8; i++) {
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
    for (i = 0; fiveRandom.length < 8; i++) {
      fiveRandom.push(products[Math.floor(Math.random() * products.length)]);
    }

    res.json({
      response: error ? "ERROR" : fiveRandom,
      success: error ? false : true,
      error: error,
    });
  },

  // addToCart: async (res, req) => {
  //   const id = req.params._id;
  //   const productAdded = req.body
  //   const product = {};
  //   const error = null;

  //   try {
  //     product = await Cart.findOne({ _id: id });
  //   } catch (err) {
  //     error = err;
  //   }
  //   console.log(product)
  //   if(product.stock === 0){
  //     res.json({
  //       success: false, message:"no stock"
  //     })
  //   }else{
  //     try {
  //       const productToModify = await Product.findOneAndUpdate({"stock":product.stock}, {$set: {"comments.$.comment": comment,"comments.$.date": Date.now() }}, {new: true})

  //       res.json({ success: true, response:{newComment},toast:true, message:"tu comentario a sido modificado" })

  //   }
  //   catch (error) {
  //       console.log(error)
  //       res.json({ success: true, message: "Algo a salido mal intentalo en unos minutos" })
  //   }

  //     res.json({
  //       success: true, message: "Product added successfully"
  //     })
  //   }

  // },
};

module.exports = ProductsControllers;
