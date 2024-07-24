const User = require('../model/User')//pulls in schema for database use

module.exports = {
    getAllUsers: function (callback){
        User.find({})//this is a promise that returns an array of the objects in the database
        .then(payload =>{
            callback(null, payload)
        })
        .catch(error =>{
            callback(error, null)
        })
    },
    createUser: function (body, callback){
        const{
            firstName,
            lastName,
            email,
            password,
            username
        } = body
        const savedUser = new User({
            firstName,
            lastName,
            email,
            username,
            password
        })
        savedUser.save() //Promise that returns the object that was created, plus the _id and _v given to it by mongo
        .then(payload=>{
            callback(null, payload)
        })
        .catch(error=>{
            callback(error, null)
        })
    },
    updateUserByID: function (id, body, callback){
        User.findByIdAndUpdate(id, body, {new: true})//the new:true returns the new version of the object to us. It is a promise, so it needs a then and catch. Only the stuff in body will be changed, and anything in the body outside of the schema will be disregarded.
        .then(updatedPayload=>{
            callback(null, updatedPayload)
        })
        .catch(error=>{
            callback(error, null)
        })
    },
    deleteUserByID: function (id, callback){
        User.findByIdAndDelete(id)//this promise returns the deleted object
        .then(payload=>{
            callback(null, payload)
        })
        .catch(error=>{
            callback(error, null)
        })
    }
}

//.save, .find, .findByIdAndUpdate are all mongoose functions. They are promises which return 1) the object you created plus the _id and _v assigned to it by mongo; 2) an array of every object in that database if the parameter is blank; 3) the new version of the object