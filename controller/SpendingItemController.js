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

}

module.exports = SpendingItemController