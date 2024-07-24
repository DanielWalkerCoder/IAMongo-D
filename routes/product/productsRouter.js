const express = require('express')
const router = express.Router()

const {getAllProducts, createProduct, getProductByID, updateProductByID, deleteProductByID} = require('./controller/productController')
// const productController = require('./controller/productController')

router.get('/get-all-products', async(req, res)=>{
    try {
        const allProducts = await getAllProducts()
        res.json({message: "Found all products", payload: allProducts})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.post('/create-product', async(req, res)=>{
    try {
        const newProduct = await createProduct(req.body)
        res.json({message: "Product created", payload: newProduct})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.get('/get-product-by-id/:id', async(req, res)=>{
    try {
        const foundProduct = await getProductByID(req.params.id)
        res.json({message: "Product found", payload: foundProduct})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.put('/update-product-by-id/:id', async(req, res)=>{
    try {
        const updatedProduct = await updateProductByID(req.params.id, req.body)
        res.json({message: "Product updated", payload: updatedProduct})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
})

router.delete('/delete-product-by-id/:id', async(req, res)=>{
    try {
        const deletedProduct = await deleteProductByID(req.params.id)
        res.json({message: "Product deleted", payload: deletedProduct})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
})

module.exports = router