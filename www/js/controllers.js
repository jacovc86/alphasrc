angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout, Menu) {
	$scope.menu = Menu.dishes;
});
