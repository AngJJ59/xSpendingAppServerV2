const addressDao = require('../DAO/AddressDao')

class AddressService {
    constructor() {
      this.addressDao = new addressDao();
    }
  
    async createAddress(addressData) {
      return this.addressDao.createAddress(addressData);
    }

  
    // Other methods for address-related business logic...
  }

  module.exports = AddressService;