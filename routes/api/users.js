const express = require('express');
const router = express.Router();
const User = require("../../controllers/UserController.js");

// restrict index for logged in user only

console.log("User", User);

// api route for register action
router.post('/register', User.doRegister);

// api route for login action
router.post('/login', User.doLogin);

// api route for logout action
router.get('/logout', User.logout);

// api rout to get current user
router.get('/getCurrentUser', User.getCurrentUser);

module.exports = router;
