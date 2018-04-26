const express = require('express');
const router = express.Router();
// const foodCollection = require('../modules/food.collection');
const mongoose = require('mongoose');

const Food = require('../models/food.schema');

const dataFromDatabase = require('../modules/database.connection');

router.get('/', (req, res) => {
    console.log('this is happening');
    Food.find({})
    .then((dataFromDatabase) => {
        console.log(dataFromDatabase);
        res.send(dataFromDatabase);
    }).catch((error) => {
        console.log('error with food.find', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const foodToAdd = req.body;
    console.log(foodToAdd);
    Food.create(foodToAdd)
    .then((response) => {
        res.send(response);
        console.log('post to database', response);
    }).catch((error) => {
        console.log('error with push to database', error);
        res.sendStatus(500);
    })
    // console.log(req.body);
    // foodCollection.push(req.body);
    // res.sendStatus(201);
});

module.exports = router;