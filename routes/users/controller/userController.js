const User = require('../model/User')

//async function is a promise
async function getAllUsers(){
    //trycatch snippet
    try {
        const foundUsers = await User.find({})
        //await is used before the promise in the new javascript. async and await are a new pair, just like try and catch.
        return foundUsers
    } catch (error) {
        return error
    }
}

async function createUser(body){
    const{
        firstName,
        lastName,
        email,
        password,
        username
    } = body
    const newUser = new User({
        firstName,
        lastName,
        email,
        username,
        password
    })
    try {
        const savedUser = await newUser.save()
        return savedUser
    } catch (error) {
        return error
    }
}

async function updateUserByID(id, body){
    try {
        const foundUser = await User.findByIdAndUpdate(id, body, {new: true})
        return foundUser
    } catch (error) {
        return error
    }
}

async function deleteUserByID(id){
    try {
        const deletedUser = await User.findByIdAndDelete(id)
        return deletedUser
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUserByID,
    deleteUserByID
}