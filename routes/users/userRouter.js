const express = require('express')
const router = express.Router()

const {getAllUsers} = require ('./controller/userController')

router.get('/get-all-users', async(req, res) =>{
    try {
        const allUsers = await getAllUsers()
        res.json({message: "Found all users", payload: allUsers})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.post('/create-user', (req, res)=>{

})

router.put('/find-and-update/:id', (req, res)=>{

})

router.delete('/delete-user-by-id/:id', (req, res)=>{

})

module.exports = router