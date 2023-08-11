const Address = require('../model/AddressModel')

class AddressDao {
    async createAddress(AddressData) {
        return Address.create(AddressData)
    }

    async updateAddress(addressId, newData) {
        return Address.findByIdAndUpdate(addressId, newData, {new:true})
    }

    async deleteAddress(addressId) {
        return Address.findByIdAndDelete(addressId)
    }
}

module.exports = AddressDao