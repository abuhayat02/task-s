const express = require('express')
const {ourUserContoler , manageUsers} = require('../controllers/userContorller')
const router = express.Router()


router.post('/register' , ourUserContoler)

router.get('/users' , manageUsers)

module.exports = router
