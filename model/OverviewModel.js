const mongoose = require('mongoose')

const overviewSchema = new mongoose.Schema({
    totalSpendingAmount: {
        type: Number
    },
    mostSpentDate: {
        type: Date
    }
})

const Overview = mongoose.model('Overview', overviewSchema, 'overviews')

module.exports = Overview