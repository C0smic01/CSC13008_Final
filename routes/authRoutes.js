const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isNotAuthenticated, isAuthenticated } = require('../middleware/auth');

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', isAuthenticated, authController.logout);

module.exports = router;