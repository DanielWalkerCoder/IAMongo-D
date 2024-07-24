const express = require('express')
const logger = require('morgan')

const mongoose = require('mongoose')
const productsRouter = require('./routes/product/productsRouter')
const userRouter = require('./routes/users/userRouter')

mongoose//127.0.0.1 is also localhost
    .connect("mongodb://127.0.0.1:27017/IAMongoD")//this creates a database named IAMongoD that we can see in Studio 3T
    .then(()=>{
        console.log('MONGO DB CONNECTED')
    }).catch((e)=>{
        console.log(e)
    })

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use('/api/products', productsRouter)
app.use('/api/users', userRouter)

app.listen(3000, ()=>{
    console.log('Server started on port 3000.')
})

//git init and gh repo create to make git repository