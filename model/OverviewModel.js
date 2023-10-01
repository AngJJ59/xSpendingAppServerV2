const mongoose = require('mongoose')

const overviewSchema = new mongoose.Schema({
    totalSpendingAmount: {
        type: Number
    },
    mostSpentDate: {
        type: Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Overview = mongoose.model('Overview', overviewSchema, 'overviews')

module.exports = Overview