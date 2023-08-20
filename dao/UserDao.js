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

    addSpendingItem(spendingItem) {
        User.spendingItems.push(spendingItem)
    }
}

module.exports = UserDao