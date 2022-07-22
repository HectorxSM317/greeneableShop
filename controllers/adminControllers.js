const Product = require("../models/product");
const crypto = require("crypto");
const path = require('path')

const adminControllers = {
uploadProduct: async (req, res) => {
    const { file } = req.files
    console.log(req.body)
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const stock = req.body.stock
    const category = req.body.category
    const autor = req.user.id
    try{
        const productExist = await Product.findOne ({ name })
        if (productExist) {
            res.json({
                success: false,
                message: "This product already exists"
            })
        } else {
            const fileName = crypto.randomBytes(10).toString("hex") + "." + file.name.split(".")[file.name.split(".").length - 1];
            const route = path.resolve('storage/products',fileName)
            const ruta = `http://localhost:4000/products/${fileName}`
            file.mv(route, err => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Product successfully uploaded")
                }
            })
            const newProduct = await new Product({ //CONSULTAR
                name: name,
                photo: ruta,
                description: description,
                price: price,
                stock: stock,
                category: category,
                autor: autor
            })
            await newProduct.save()
            res.json({
                success: true,
                message: "Product successfully uploaded"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Something went wrong, please try again"})
    }
},

deleteProduct: async (req,res) => { 
    const id = req.params.id
    let product
    let error = null
    try {
        product = await Product.findOneAndDelete({_id: id })
    } catch (err) { error = err }
    res.json({
        response: error ? 'ERROR' : product,
        success: error ? false : true,
        error: error,
        message: error ? "ERROR" : "Product deleted successfully"
    })
},

modifyProduct: async (req, res) => {
    const id = req.params.id
    const product = req.body
    let productdb
    let error = null
    try {
        productdb = await Product.findOneAndUpdate({ _id: id }, product,{ new: true })
        
    } catch (err) { error = err }
    res.json({
        response: error ? 'ERROR' : productdb,
        success: error ? false : true,
        error: {error:error, message:"It's not possible to modify the product. Please, try again"}
    })

},
}

module.exports = adminControllers;