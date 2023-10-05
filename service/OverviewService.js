const overviewDao = require('../DAO/OverviewDao')

class OverviewService {
    constructor() {
        this.overviewDao = new overviewDao()
    }

    async getTotalSpendingAmount(amount) {
        return this.overviewDao.getTotalSpendingAmount(amount)
    }
}

module.exports = OverviewService