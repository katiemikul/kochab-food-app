const express = require('express');
const router = express.Router();
const foodCollection = require('../modules/food.collection');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    res.send(foodCollection);
});

router.post('/', (req, res) => {
    console.log(req.body);
    foodCollection.push(req.body);
    res.sendStatus(201);
});

module.exports = router;