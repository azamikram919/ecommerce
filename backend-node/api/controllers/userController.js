const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    User.find()
    .then(result => {
        res.status(200).json({
            usersData:result
        });
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    });
});

router.post('/signup', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password
    });

    user.save().then(result => {
        res.status(200).json({
            newUser: result
        })
    }).catch(err => {
        res.status(404).json({
            error: err
        })
    })
});

module.exports = router;