const SpendingItemDao = require('../DAO/SpendingItemDao')

class SpendingItemService {
    constructor() {
        this.SpendingItemDao = SpendingItemDao
    }

    async createSpendingItem(spendingItemData) {
        return this.SpendingItemDao.createSpendingItem(spendingItemData);
    }
    
    async getSpendingItemById(spendingItemId) {
        return this.SpendingItemDao.getSpendingItemById(spendingItemId);
    }

    async getSpendingItems() {
        return this.SpendingItemDao.getSpendingItems();
    }

    async updateSpendingItem(spendingItemId, spendingItemData) {
        return this.SpendingItemDao.updateSpendingItem(spendingItemId, spendingItemData);
    }

    async deleteSpendingItem(spendingItemId) {
        return this.SpendingItemDao.deleteSpendingItem(spendingItemId);
    }
}

module.exports = SpendingItemService