const SpendingItem = require('../model/SpendingItemModel')

class SpendingItemDao {
    async createSpendingItem(spendingItemData) {
        return SpendingItem.create(spendingItemData)
    }

    async getSpendingItemById(spendingItemId) {
        return SpendingItem.findById(spendingItemId)
    }

    async updateSpendingItem(spendingItemId, spendingItemData) {
        return SpendingItem.findByIdAndUpdate(spendingItemId, spendingItemData, {new: true})
    }

    async deleteSpendingItem(spendingItemId) {
        return SpendingItem.findByIdAndDelete(spendingItemId)
    }

    async getSpendingItems() {
        return SpendingItem.find()
    }
}

module.exports = SpendingItemDao