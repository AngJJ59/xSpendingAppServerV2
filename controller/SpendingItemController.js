const SpendingItemService = require('../service/SpendingItemService')

const spendingItemService = new SpendingItemService()

class SpendingItemController {
    constructor() {
        this.spendingItemService = new SpendingItemService()
    }

    createSpendingItem = async (spendingData) => {
        try {
             await spendingItemService.createSpendingItem(spendingData)
        } catch(err) {
            console.log(err.message)
        }
    }

}

module.exports = SpendingItemController