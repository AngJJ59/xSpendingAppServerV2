const mongoose = require('mongoose')

const overviewSchema = new mongoose.Schema({
    totalSpendingAmount: {
        type: Number,
        get: (amount) => {
            return amount.toFixed(2)
        },

        set: (amount) => {
            return amount
        }
    },
    mostSpentDate: {
        type: Date
    }
})

const Overview = mongoose.model('Overview', overviewSchema, 'overviews')

module.exports = Overview