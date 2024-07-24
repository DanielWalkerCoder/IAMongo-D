const Product = require('../model/Product')

async function getAllProducts(){
    try {
        const foundProducts = await Product.find({})
        return foundProducts
    } catch (error) {
        return error
    }
}

async function createProduct(body){
    const{
        productName
    } = body
    const newProduct = new Product({
        productName
    })
    try {
        const savedProduct = await newProduct.save()
        return savedProduct
    } catch (error) {
        return error
    }
}

async function getProductByID(id){
    try {
        const foundProduct = await Product.findOne({
            _id: id
        })
        return foundProduct
    } catch (error) {
        return error
    }
}

async function updateProductByID(id, body){
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, body, {new: true})
        return updatedProduct
    } catch (error) {
        return error
    }
}

async function deleteProductByID(id){
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        return deletedProduct
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductByID,
    updateProductByID,
    deleteProductByID
}