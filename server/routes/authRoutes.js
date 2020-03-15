const express = require('express');
const router = express.Router();
const { signInUser, signUpUser } = require('../controllers/authController');

router.route('/signin').post(signInUser);
router.route('/signup').post(signUpUser);

module.exports = router;
