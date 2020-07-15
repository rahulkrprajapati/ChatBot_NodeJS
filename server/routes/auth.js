const express = require('express')
const router  = express.Router()

const AuthController = require('../controllers/AuthController')
const ChatController = require('../controllers/ChatController')
//const authenticate   = require('../middleware/authentication')

router.post('/register', AuthController.register)
router.post('/login',AuthController.login)
router.post('/chatHistory',ChatController.registerChat)
router.post('/updateChat',ChatController.updateChat)
router.get('/showChat',ChatController.showChat)

module.exports=router