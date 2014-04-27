"use strict";

describe("game of life test", function () {

	var gol;

	beforeEach(function () {
		gol = new GameOfLife(3, 3);
	});

	it("Can set state of grid", function() {
		var initialState = [
							[false, false, false],
							[false, true, false],
							[false, false, false]
							];

		gol.apply(initialState);


		verifyState([
			[false, false, false],
			[false, true, false],
			[false, false, false]]);
	});

	it("Can read the state of grid", function () {
    	// Arrange
        var initialState = [
							[false, false, false],
							[false, true, false],
							[false, false, false]
							];
		gol.apply(initialState);

        // Assert
        expect(gol.isAlive(0, 0)).toBe(false);
        expect(gol.isAlive(1, 1)).toBe(true);
        expect(gol.isAlive(2, 2)).toBe(false);
    });


    it("WIll return false if index out-of-bounds", function () {
    	// Arrange
        var initialState = [
							[false, false, false],
							[false, true, false],
							[false, false, false]
							];
		gol.apply(initialState);


        // Assert
        expect(gol.isAlive(-1, -1)).toBe(false);
        expect(gol.isAlive(9, 10)).toBe(false);
    });    


    it("Can report the number of adjacent live cells", function () {
    	// Arrange
        var initialState = [
							[false, false, false],
							[false, true, false],
							[false, false, false]
							];
		gol.apply(initialState);

        // Act
        expect(gol.adjacentLiveCells(1, 0)).toBe(1);
        expect(gol.adjacentLiveCells(1, 1)).toBe(0);
        expect(gol.adjacentLiveCells(1, 2)).toBe(1);

    });

    it("Can report the number of live cells including self", function () {
// Arrange
        var initialState = [
							[false, false, false],
							[false, true, false],
							[false, false, false]
							];
		gol.apply(initialState);

        // Act
        expect(gol.liveCells(1, 0)).toBe(1);
        expect(gol.liveCells(1, 1)).toBe(1);
        expect(gol.liveCells(1, 2)).toBe(1);

    });


	function verifyState(expectedState) {
		for (var i = gol._rows.length - 1; i >= 0; i--) {
			for (var j = gol._rows[i]._cells.length - 1; j >= 0; j--) {
				expect(gol._rows[i]._cells[j]._isAlive).toBe(expectedState[i][j]);
			};
		};
	}

});