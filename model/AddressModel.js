const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    }
})

const address = mongoose.model('Address', addressSchema);

module.exports = address