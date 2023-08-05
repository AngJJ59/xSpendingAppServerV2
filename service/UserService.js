const userDao = require('../DAO/UserDao')

class UserService {
    constructor() {
        this.userDao = new userDao()
    }

    async createUser(userData) {
        return this.userDao.createUser(userData);
    }
    
    async getUserById(userId) {
        return this.userDao.getUserById(userId);
    }

    async getUsers() {
        return this.userDao.getUsers();
    }

    async updateUser(userId, userData) {
        return this.userDao.updateUser(userId, userData);
    }

    async deleteUser(userId) {
        return this.userDao.deleteUser(userId);
    }
}

module.exports = UserService