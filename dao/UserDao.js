const User = require('../model/UserModel')

class UserDao { 
    async createUser(userData) {
        return User.create(userData)
    }

    async getUserById(userId) {
        return User.findById(userId).populate('spendingItems')
    }

    async updateUser(userId, userData) {
        return User.findByIdAndUpdate(userId, userData, {new: true})
    }

    async deleteUser(userId) {
        return User.findByIdAndDelete(userId)
    }

    async getUsers() {
        return User.find().populate('spendingItems')
    }

    async addSpendingItem(userId, spendingItem) {
        return User.findByIdAndUpdate(
            userId,
            {$push: {spendingItems: spendingItem._id}},
            {new : true}
        )
        
    }
}

module.exports = UserDao