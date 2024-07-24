const Product = require('../model/Product')

module.exports = {
    getAllProducts: function (callback){
        Product.find({})//this is a promise, so it needs a .then and .catch. This promise returns an array of the objects in our database
        .then(payload =>{
            callback(null, payload)
        })
        .catch(error=>{
            callback(error, null)
        })
    },
    createProduct: function (body, callback){
        const {productName} = body
        const savedProduct = new Product({
            productName
        })
        savedProduct.save()//this promise returns to us the object we just saved along with the _id and _v that mongo assigned it
        .then(payload=>{
            callback(null, payload)
        })
        .catch(error=>{
            callback(error, null)
        })
    },
    getProductByID: function (params, callback){
        const {id} = params
        Product.findOne({
            _id: id
        })
        .then(payload=>{
            callback(null, payload)
        })
        .catch(error=>{
            callback(error, null)
        })
    },
    updateProductByID: function(id, body, callback){
        Product.findByIdAndUpdate(id, body, {new:true})
        .then(updated=>{
            callback(null, updated)
        })
        .catch(error=>{
            callback(error, null)
        })
    },
    deleteProductByID: function(id, callback){
        Product.findByIdAndDelete(id)
        .then(deleted=>{
            callback(null, deleted)
        })
        .catch(error=>{
            callback(error, null)
        })
    }
}