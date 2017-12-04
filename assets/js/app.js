"use strict";
var app = angular.module("app", []);

app.controller('MainCtrl', ['$scope',  function($scope) {
    var year = 2018,
        end = new Date('02/14/'+ year.toString() +' 00:01 AM'),
        now = new Date(),
        _day = 86400000;
    if((end - now) < 0){
        year++;
        end = new Date('02/14/'+ year.toString() +' 00:01 AM');
    }
    console.log(_day);
    $scope.days = Math.floor((end - now) / _day);

}]);

