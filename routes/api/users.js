// modules
const express = require('express');

// router object
const router = express.Router();

// controller
const usersCtrl = require('../../controllers/users');

// routes
router.post('/signup', usersCtrl.signup);

// export
module.exports = router;