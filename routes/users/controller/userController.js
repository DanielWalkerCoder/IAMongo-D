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

module.exports = {
    getAllUsers
}