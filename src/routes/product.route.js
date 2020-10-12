const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const verifyToken = require('../middleware/verifyToken');


router.get('/products', productController.getProduct);

module.exports = router;