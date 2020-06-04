const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const productRouter = require('./product.route');

router.use(userRouter);
router.use(authRouter);
router.use(productRouter);

router.use(function(user, req, res, next) {
    res.status(200).send(user);
});

module.exports = router;