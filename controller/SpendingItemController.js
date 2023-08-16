const SpendingItemService = require('../service/SpendingItemService')

class SpendingItemController {
    constructor() {
        this.spendingItemService = new SpendingItemService()
    }

    createSpendingItem = async (req, res) => {
        try {
            
        } catch(err) {
            console.log(err.message)
        }
    }

}

module.exports = SpendingItemController