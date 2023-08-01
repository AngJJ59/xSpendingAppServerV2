const UserService = require('../service/UserService')

const userService = new UserService()

module.exports.registerUser = (req, res) => {
    try {
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            contactNum: req.body.contactNum,
        }


        const user = userService.createUser(userData)

        user.save()

        res.json(user)

    } catch(err) {
        console.log(err.message)
    }
}