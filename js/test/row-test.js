"use strict";

describe("Row tests", function () {
 
    it("Row gets create with given number of cells", function () {
        // Arrange
        var numberOfCells = 3;

        // Act
        var row = new Row(numberOfCells);
 
        // Assert
        expect(numberOfCells).toBe(row._cells.length);
    });

    it("Can change the state of cells", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);

        // Act
        row.applyState([false, true, false]);


        // Assert
        expect(row._cells[0].isAlive()).toBe(false);
        expect(row._cells[1].isAlive()).toBe(true);
        expect(row._cells[2].isAlive()).toBe(false);
    });


	it("Can read the state of cells", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);

        // Act
        row.applyState([false, true, false]);


        // Assert
        expect(row.isAlive(0)).toBe(0);
        expect(row.isAlive(1)).toBe(1);
        expect(row.isAlive(2)).toBe(0);
    });


    it("WIll return false if index out-of-bounds", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);

        // Act
        row.applyState([false, true, false]);


        // Assert
        expect(row.isAlive(-1)).toBe(0);
        expect(row.isAlive(9)).toBe(0);
    });    


    it("Can report the number of adjacent live cells", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);
        row.applyState([false, true, false]);

        // Act
        expect(row.adjacentLiveCells(0)).toBe(1);
        expect(row.adjacentLiveCells(1)).toBe(0);
        expect(row.adjacentLiveCells(2)).toBe(1);

    });

    it("Can report the number of live cells including self", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);
        row.applyState([false, true, true]);

        // Act
        expect(row.liveCells(0)).toBe(1);
        expect(row.liveCells(1)).toBe(2);
        expect(row.liveCells(2)).toBe(2);

    });
});