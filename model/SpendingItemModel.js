const mongoose = require('mongoose')

const spendingItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    spendingDate: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

const SpendingItem = mongoose.model('SpendingItem', spendingItemSchema, 'spendingItems')

module.exports = SpendingItem