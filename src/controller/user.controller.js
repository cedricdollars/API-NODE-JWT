const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.getUser = (req, res) => {

    User.findOne({
        _id: req.params.id
    })
    .then(user => {
        if(!user) {
            return res.status(400).send("Not user found")
        }
        res.send(user)
    }).catch (err => {
        return res.status(400).send({
            message: 'no retrieve user'
        })
    })

};