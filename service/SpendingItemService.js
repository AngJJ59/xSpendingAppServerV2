const spendingItemDao = require('../DAO/SpendingItemDao')

class SpendingItemService {
    constructor() {
        this.spendingItemDao = new spendingItemDao()
    }

    async createSpendingItem(spendingItemData) {
        return this.spendingItemDao.createSpendingItem(spendingItemData);
    }
    
    async getSpendingItemById(spendingItemId) {
        return this.spendingItemDao.getSpendingItemById(spendingItemId);
    }

    async getSpendingItems() {
        return this.spendingItemDao.getSpendingItems();
    }

    async updateSpendingItem(spendingItemId, spendingItemData) {
        return this.spendingItemDao.updateSpendingItem(spendingItemId, spendingItemData);
    }

    async deleteSpendingItem(spendingItemId) {
        return this.spendingItemDao.deleteSpendingItem(spendingItemId);
    }
}

module.exports = SpendingItemService