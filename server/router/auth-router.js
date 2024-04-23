const express = require ('express')
const verifyToken = require('../middlewares/auth_middleware');
const  router = express.Router()
const authController = require('./../controllers/auth-controller')
/* const authMiddleware = require('../middlewares/auth_middleware') */

router.post('/register',(authController.register))
router.post('/login', (authController.login))
router.get('/user', verifyToken, authController.getUser)
module.exports = router