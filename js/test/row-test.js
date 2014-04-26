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
        expect(false).toBe(row._cells[0].isAlive());
        expect(true).toBe(row._cells[1].isAlive());
        expect(false).toBe(row._cells[2].isAlive());
    });


	it("Can read the state of cells", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);

        // Act
        row.applyState([false, true, false]);


        // Assert
        expect(0).toBe(row.isAlive(0));
        expect(1).toBe(row.isAlive(1));
        expect(0).toBe(row.isAlive(2));
    });


    it("WIll return false if index out-of-bounds", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);

        // Act
        row.applyState([false, true, false]);


        // Assert
        expect(0).toBe(row.isAlive(-1));
        expect(0).toBe(row.isAlive(9));
    });    


    it("Can report the number of adjacent live cells", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);
        row.applyState([false, true, false]);

        // Act
        expect(1).toBe(row.adjacentLiveCells(0));
        expect(0).toBe(row.adjacentLiveCells(1));
        expect(1).toBe(row.adjacentLiveCells(2));

    });

    it("Can report the number of live cells including self", function () {
    	// Arrange
        var numberOfCells = 3;
        var row = new Row(numberOfCells);
        row.applyState([false, true, true]);

        // Act
        expect(1).toBe(row.liveCells(0));
        expect(2).toBe(row.liveCells(1));
        expect(2).toBe(row.liveCells(2));

    });
});