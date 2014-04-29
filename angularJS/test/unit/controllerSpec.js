'use strict';

describe('GameOfLife controllers', function() {


	describe('GameOfLifeController', function(){
		beforeEach(module('gameoflifeApp'));

	    it('should set 2x2 game of life grid', inject(function($controller) {
	    	// expect(scope.phones).toBeUndefined();
			var scope = {},
	    	
	    	ctrl = $controller('GameOfLifeController', {$scope:scope});

      		expect(scope.golGrid).toEqual([
				[{"id" : "1", "status" : false}, {"id" : "2", "status" : false}],
				[{"id" : "3", "status" : false}, {"id" : "4", "status" : true}]
			]);
    	}));

	});

});