const express = require ('express')

const adminController = require('../controllers/admin-controller')

const  router = express.Router() 

router.get('/users', (adminController.getAllusers))
router.get('/contact', (adminController.getAllcontacts))
router.get('/user/:id', (adminController.getSingleUser))
router.delete('/user/delete/:id', (adminController.deleteOneuser))
router.put('/user/update/:id', (adminController.updateOne))
router.delete('/contact/delete/:id', (adminController.deleteonecontact))
router.post('/services/post', (adminController.addServices))
router.delete('/services/:id', (adminController.deleteservice))




module.exports = router