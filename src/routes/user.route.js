const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/user/:id', userController.getUser);

module.exports = router;