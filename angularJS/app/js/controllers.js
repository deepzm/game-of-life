
 
var gameOfLifeControllers = angular.module('gameOfLifeControllers', []);

gameOfLifeControllers.controller('GameOfLifeController', function ($scope) {
  $scope.golGrid = [
		[{"id" : "1", "status" : false}, {"id" : "2", "status" : false}],
		[{"id" : "3", "status" : false}, {"id" : "4", "status" : true}]
	];
});
