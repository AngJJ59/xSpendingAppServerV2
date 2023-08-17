const SpendingItemService = require('../service/SpendingItemService')

const spendingItemService = new SpendingItemService()

class SpendingItemController {
    constructor() {
        this.spendingItemService = new SpendingItemService()
    }

    createSpendingItem = async (spendingData) => {
        try {
            const spendingItem = await spendingItemService.createSpendingItem(spendingData)
            res.json(spendingItem)
        } catch(err) {
            console.log(err.message)
        }
    }

}

module.exports = SpendingItemController