'use strict';

angular.module('gameOfLifeFilters', [])
	.filter('deadORalive', function() {
  		return function(input) {
    		return input ? 'alive' : 'dead';
  		};
	});