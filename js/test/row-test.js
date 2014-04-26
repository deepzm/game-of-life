"use strict";

describe("Row tests", function () {
 
    it("Row gets create with given number of cells", function () {
        // Arrange
        var numberOfCells = 3;

        // Act
        var row = new Row(numberOfCells);
 
        // Assert
        expect(numberOfCells).toBe(row.liveCells());
    });

});