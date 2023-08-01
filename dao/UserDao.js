const User = require('../model/UserModel')

class UserDao { 
    async createUser(userData) {
        return User.create(userData)
    }

    async getUserById(userId) {
        return User.findById(userId)
    }

    async updateUser(userId, userData) {
        return User.findByIdAndUpdate(userId, userData, {new: true})
    }

    async deleteUser(userId) {
        return User.findByIdAndDelete(userId)
    }

    async getAllUsers() {
        return User.find()
    }
}

module.exports = UserDao