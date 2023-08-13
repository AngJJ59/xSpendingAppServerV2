const Address = require('../model/AddressModel')

class AddressDao {
    async createAddress(AddressData) {
        const createdAddress = await Address.create(AddressData)
        return createdAddress
    }

    async getAddress(addressId) {
        return Address.findById(addressId)
    }

    async updateAddress(addressId, newData) {
        return Address.findByIdAndUpdate(addressId, newData, {new:true})
    }

    async deleteAddress(addressId) {
        return Address.findByIdAndDelete(addressId)
    }
}

module.exports = AddressDao