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
  // uploadProduct: async (req, res) => {
  //   const { file } = req.files
  //   const name = req.body.name
  //   const photo = req.body.photo //CONSULTAR
  //   const description = req.body.description
  //   const price = req.body.price
  //   const category = req.body.category
  //   const autor = req.user._id //CONSULTAR
  //   try{
  //       const productExist = await Places.findOne ({ name })
  //       if (productExist) {
  //           res.json({
  //               success: false,
  //               message: "This product already exists"
  //           })
  //       } else {
  //           const fileName = crypto.randomBytes(10).toString("hex") + "." + file.name.split(".")[file.name.split(".").length - 1];
  //           const ruta = `${__dirname}../../frontend/public/image/places/${fileName}`
  //           file.mv(ruta, err => {
  //               if (err) {
  //                   console.log(err)
  //               } else {
  //                   console.log("Product uploaded")
  //               }
  //           })
  //           const newProduct = await new Product({ //CONSULTAR
  //               name: name,
  //               photo: fileName,
  //               description: description,
  //               price: price,
  //               category: category,
  //               autor: autor //CONSULTAR
  //           })
  //           await newProduct.save()
  //           res.json({
  //               success: true,
  //               message: "Thanks you, the product was uploaded"
  //           })
  //       }
  //   } catch (error) {
  //       console.log(error)
  //       res.json({ success: false, message: "Something went wrong, please try again"})
  //   }
  // },
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
