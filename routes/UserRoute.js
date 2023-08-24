const {
    registerUser,
    getAllUsers,
    deleteUser,
    getUserById,
    updateUserData,
    addSpendingItem

} = require('../controller/UserController')

const router = require('express').Router()

router.post('/user/new', registerUser)
router.get('/user/users', getAllUsers)
router.get('/user/getUser/:uniqueIdentifier', getUserById)
router.delete('/user/deleteUser/:uniqueIdentifier', deleteUser)
router.put('/user/updateUser/:uniqueIdentifier', updateUserData)

router.post('/:uniqueIdentifier/spendingitem/new', addSpendingItem)

module.exports = router