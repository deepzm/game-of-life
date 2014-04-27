"use strict";

describe("Cell tests", function () {
 
    it("Cell is dead by default", function () {
        
        // Act
        var cell = new Cell();
 
        // Assert
        expect(cell.isAlive()).toBe(false);
    });

    it("Can make alive a cell", function () {
        
        // Arrange
        var cell = new Cell();

        //Act
        cell.makeAlive();
 
        // Assert
        expect(cell.isAlive()).toBe(true);
    });


    it("Can kill a cell", function () {
        // Arrange
        var cell = new Cell();
        cell.makeAlive();

        cell.kill();
 
        // Assert
        expect(cell.isAlive()).toBe(false);
    });


    it("Can toggle cell from dead to alive", function () {
    	 // Arrange
        var cell = new Cell();
        expect(cell.isAlive()).toBe(false);

        //Act
        cell.toggle();
 
        // Assert
        expect(cell.isAlive()).toBe(true);
    });

    it("Can toggle cell from dead to alive", function () {
    	 // Arrange
        var cell = new Cell();
        cell.makeAlive();
        expect(cell.isAlive()).toBe(true);

        //Act
        cell.toggle();
 
        // Assert
        expect(cell.isAlive()).toBe(false);
    });
});