const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require:  true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    contactNum: {
        type:String,
        required: true
    },
    userCreatedAt: {
        type: Date,
        default: Date.now()
    },
    spendingItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SpendingItems'
        }
    ]
})

const User = mongoose.model('User', userSchema);

module.exports = User