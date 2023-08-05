const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const userRoutes = require('./routes/UserRoute')

const app = express()

require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log('DB connection Successful')
    })
    .catch((err) => {
        console.log(err.message)
    })

app.use('/api', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`)
})