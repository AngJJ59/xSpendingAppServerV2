const {
    registerUser,
    getAllUsers,
    deleteUser,
    getUserById,
    updateUserData,
    addSpendingItem,
    deleteSpendingItem,
    updateSpendingItem

} = require('../controller/UserController')

const router = require('express').Router()

router.post('/user/new', registerUser)
router.get('/user/users', getAllUsers)
router.get('/user/getUser/:uniqueIdentifier', getUserById)
router.delete('/user/deleteUser/:uniqueIdentifier', deleteUser)
router.put('/user/updateUser/:uniqueIdentifier', updateUserData)

router.post('/:uniqueIdentifier/spendingitem/new', addSpendingItem)
router.delete('/:spendingItemUniqueIdentifier/spendingItem/delete',deleteSpendingItem)
router.put('/:spendingItemUniqueIdentifier/spendingItem/update',updateSpendingItem)

module.exports = router