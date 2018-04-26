console.log('client.js is loaded');

var app = angular.module('FoodApp', []);

app.controller('FoodController', function () {
    var self = this;
    self.message = 'I like food!';
});
