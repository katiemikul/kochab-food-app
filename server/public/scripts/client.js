console.log('client.js is loaded');

var app = angular.module('FoodApp', []);

//dependencies ($http) has to be in the same order - when the dependencies are called prior the function and in the function
app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController has been loaded');
    var self = this;
    self.food = 'I like food!';

self.Food = [
    {
    "name": "Katie",
    "deliciousness_rating": "10",
    "is_hot": "not hot enough",
}
];

    self.newFood = {};

    self.createFood = function(newFoodName, newDeliciousness_rating, newIs_hot){
    self.newFood.name = newFoodName;
    self.newFood.deliciousness_rating = newDeliciousness_rating;
    self.newFood.is_hot = newIs_hot;
    console.log(self.newFood);
    self.Food.push(angular.copy(self.newFood));
    };

    $http({
        method: 'GET',
        url: '/food'
    })
    .then(function(response) {
        console.log(response.data);
    });
}]);
