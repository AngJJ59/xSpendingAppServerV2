const Address = require('../model/AddressModel')

class AddressDao {
    async createAddress(AddressData) {
        return Address.create(AddressData)
    }
}

module.exports = AddressDao