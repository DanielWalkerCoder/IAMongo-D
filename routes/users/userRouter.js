const express = require('express')
const router = express.Router()

const {getAllUsers, createUser, updateUserByID, deleteUserByID} = require ('./controller/userController')
// const {updateUserByID} = require('./controller/userController-v1')

router.get('/get-all-users', async(req, res) =>{
    try {
        const allUsers = await getAllUsers()
        res.json({message: "Found all users", payload: allUsers})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.post('/create-user', async(req, res)=>{
    try {
        const newUser = await createUser(req.body)
        res.json({message: "User created", payload: newUser})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
})

router.put('/find-and-update/:id', async(req, res)=>{
    try {
        const updatedUser = await updateUserByID(req.params.id, req.body)
        res.json({message: "User updated", payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
})

router.delete('/delete-user-by-id/:id', async(req, res)=>{
    try {
        const deletedUser = await deleteUserByID(req.params.id)
        res.json({message: "User deleted", payload: deletedUser})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
})

module.exports = router