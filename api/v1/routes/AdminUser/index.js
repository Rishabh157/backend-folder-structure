const router = require('express').Router()
const adminController = require('../../controllers/AdminUser')

router.get('/login', adminController.adminLogin)

router.get('/create', adminController.createAdmin)

module.exports = router;
