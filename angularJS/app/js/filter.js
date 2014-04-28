'use strict';

var gameOfLifeFilters = angular.module('gameOfLifeFilters', []);

gameOfLifeFilters.filter('deadORalive', function() {
  return function(input) {
    return input ? 'alive' : 'dead';
  };
});