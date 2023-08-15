const UserService = require('../service/UserService')
const AddressService = require('../service/AddressService')

const userService = new UserService()
const addressService = new AddressService()

module.exports.registerUser = async (req, res) => {
    try {
        const addressData = {
            street: req.body.street,
            city: req.body.city,
            zipCode: req.body.zipCode
        }

        const userAddress = await addressService.createAddress(addressData);
        
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            contactNum: req.body.contactNum,
            userAddress: userAddress
        }

        const user = await userService.createUser(userData)

        res.json(user)

    } catch(err) {
        console.log(err.message)
    }
}

module.exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.uniqueIdentifier)
        res.json(user)
    } catch(err) {
        console.log(err.message)
    }
}

module.exports.getAllUsers = async (_req, res) => {
    const allUsers = await userService.getUsers()

    res.json(allUsers)
}

module.exports.updateUserData = async (req, res) => {
    try {
        const updatedData = req.body

        const infoToUpdate = await userService.updateUser(
            req.params.uniqueIdentifier,
            updatedData
        )

        if(!infoToUpdate) {
            return res.status(404).json({error: 'User Not Found.'})
        }

        return res.status(200).json({message: 'Info Updated'})

    } catch(err) {
        console.log(err.message)
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const userToDelete = await userService.deleteUser(req.params.uniqueIdentifier)

        res.json(userToDelete)
    } catch(err) {
        console.log(err.message)
    }
}

module.exports.createAddress = async (req, res) => {
    try {
        
    } catch(err) {
        
    }
}