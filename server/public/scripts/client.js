console.log('client.js is loaded');

var app = angular.module('FoodApp', []);

//dependencies ($http) has to be in the same order - when the dependencies are called prior the function and in the function
app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController has been loaded');
    var self = this;
    self.food = 'I like food!';

    self.Food = [];

    self.newFood = {};
    getTheFood();
    self.createFood = function (newFoodName, newDeliciousness_rating, newIs_hot) {
        self.newFood.name = newFoodName;
        self.newFood.deliciousness_rating = newDeliciousness_rating;
        self.newFood.is_hot = newIs_hot;
        console.log(self.newFood);
        showTheFood();
    };

    function getTheFood() {
        $http({
            method: 'GET',
            url: '/food'
        })
            .then(function (response) {
                self.Food = response.data;
                console.log(response.data);
            }).catch((error) => {
                console.log('error it isnt working', error);
                res.sendStatus(500);
            });
    }

    function showTheFood() {
        $http({
            method: 'POST',
            url: '/food',
            data: self.newFood
        })
            .then(function (response) {
                console.log(response);
            }).catch((error) => {
                console.log('errors again', );
            });
            getTheFood();
        }
    }])
