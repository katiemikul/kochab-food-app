console.log('client.js is loaded');

var app = angular.module('FoodApp', []);

app.controller('FoodController', function () {
    console.log('FoodController has been loaded');
    var self = this;
    self.food = 'I like food!';
});
