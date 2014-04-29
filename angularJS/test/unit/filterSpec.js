'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('gameOfLifeFilters'));


  describe('deadORalive', function() {

  	    it('has a deadORalive filter', inject(function($filter) {
	        expect($filter('deadORalive')).not.toBeNull();
    	}));


    it('should convert boolean values to dead or alive',
        inject(function(deadORaliveFilter) {
	      expect(deadORaliveFilter(true)).toBe('alive');
	      expect(deadORaliveFilter(false)).toBe('dead');
	    }));
  });
});
