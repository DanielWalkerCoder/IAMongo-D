const express = require('express')
const router = express.Router()

const productController = require('./controller/productController')

router.get('/get-all-products', (req, res)=>{
    productController.getAllProducts((error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: "Products found.", data: payload})
        }
    })
})

router.post('/create-product', (req, res)=>{
    productController.createProduct(req.body, (error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: "Product created.", data: payload})
        }
    })
})

router.get('/get-product-by-id/:id', (req, res)=>{
    productController.getProductByID(req.params, (error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: "Product found.", data: payload})
        }
    })
})

router.put('/update-product-by-id/:id', (req, res)=>{
    productController.updateProductByID(req.params.id, req.body, (error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: "Product updated.", data: payload})
        }
    })
})

router.delete('/delete-product-by-id/:id', (req, res)=>{
    productController.deleteProductByID(req.params.id, (error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: "Product deleted.", data: payload})
        }
    })
})

module.exports = router