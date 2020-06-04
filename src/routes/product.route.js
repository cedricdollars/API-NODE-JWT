const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.get('/products', productController.getProduct);

module.exports = router;