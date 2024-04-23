const express = require ('express')
const verifyToken = require('../middlewares/auth_middleware')

const adminController = require('../controllers/admin-controller')

const  router = express.Router() 

router.get('/users', verifyToken, adminController.getAllusers)
router.get('/contact', verifyToken, adminController.getAllusers)
router.post('/services/post', verifyToken, adminController.addServices)
router.delete('/services/:id',verifyToken, adminController.deleteservice)
router.delete('/contact/delete/:id',verifyToken,  adminController.deleteonecontact)
/* 

router.get('/users', (adminController.getAllusers)) */
/* router.get('/contact', (adminController.getAllcontacts)) */
router.get('/user/:id', (adminController.getSingleUser))
router.delete('/user/delete/:id', (adminController.deleteOneuser))
router.put('/user/update/:id', (adminController.updateOne))
/* router.delete('/contact/delete/:id', (adminController.deleteonecontact)) */
/* router.post('/services/post', (adminController.addServices)) */
/* router.delete('/services/:id', (adminController.deleteservice)) */




module.exports = router