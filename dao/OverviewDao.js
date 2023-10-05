const Overview = require('../model/OverviewModel')

class OverviewDao {
    async getTotalAmountSpent(amount) {
        Overview.totalSpendingAmount = amount
        return OverviewDao.totalSpendingAmount
    }
}

module.exports = OverviewDao