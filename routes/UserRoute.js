const {
    registerUser
} = require('../controller/UserController')

const router = require('express').Router()

router.post('/user/new', registerUser)





module.exports = router