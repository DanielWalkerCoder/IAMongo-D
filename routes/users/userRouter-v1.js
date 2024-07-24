const express = require('express')
const router = express.Router()

const userController = require ('./controller/userController')

router.get('/get-all-users', (req, res) =>{
    userController.getAllUsers((error, payload) =>{
        if(error){
            res.status(500).json({message: "Error", error: error})//500 is server error
        }else{
            res.json({message: "Users found.", data: payload})
        }
    })
})

router.post('/create-user', (req, res)=>{
    userController.createUser(req.body, (error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})//500 is server error
        }else{
            res.json({message: "User created.", data: payload})
        }
    })
})

router.put('/find-and-update/:id', (req, res)=>{
    userController.updateUserByID(req.params.id, req.body, (err, payload)=>{
        if(err){
            res.status(500).json({message: "Error", error: err})//500 is server error
        }else{
            res.json({message: "User updated.", data: payload})
        }
    })
})

router.delete('/delete-user-by-id/:id', (req, res)=>{
    userController.deleteUserByID(req.params.id, (err, payload)=>{
        if(err){
            res.status(500).json({message: "Error", error: err})//500 is server error
        }else{
            res.json({message: "User deleted.", data: payload})
        }
    })
})

module.exports = router