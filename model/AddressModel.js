const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    zipCode: {
        type: String,
    }
})

const address = mongoose.model('Address', addressSchema, 'Address');

module.exports = address