const express = require('express');
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/foodapp';

function mongooseConnect(){
    mongoose.connect(databaseUrl);

    mongoose.connection.on('connected', () => {
        console.log(`mongoose connected to ${databaseUrl}`);
    });
    mongoose.connection.on('error', () => (
        console.log('mongoose connection error', error)
    ));
}

module.exports = mongooseConnect();