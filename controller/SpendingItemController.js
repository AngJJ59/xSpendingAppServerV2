const SpendingItemService = require('../service/SpendingItemService')

const spendingItemService = new SpendingItemService()

class SpendingItemController {
    constructor() {
        this.spendingItemService = new SpendingItemService()
    }

    createSpendingItem = async (spendingData) => {
        try {
             return await spendingItemService.createSpendingItem(spendingData)  
        } catch(err) {
            return err.message
        }
    }

    updateSpendingItem = async (spendingItemId, updatedData) => {
        try {
            return await spendingItemService.updateSpendingItem(spendingItemId, updatedData)
        } catch(err) {
            return err.message
        }
    }

    deleteSpendingItem = async(spendingItemId) => {
        try {
            return await spendingItemService.deleteSpendingItem(spendingItemId)
        } catch(err) {
            return err.message
        }
    }

    getSpendingItems = async () => {
        try {
            return await spendingItemService.getSpendingItems()
        } catch(err) {
            return err.message
        }
    }
}

module.exports = SpendingItemController