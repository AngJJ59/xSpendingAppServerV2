const UserService = require('../service/UserService')

const userService = new UserService()

module.exports.registerUser = async (req, res) => {
    try {
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            contactNum: req.body.contactNum,
        }
        const user = await userService.createUser(userData)

        res.json(user)

    } catch(err) {
        console.log(err.message)
    }
}