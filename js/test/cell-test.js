"use strict";

describe("Cell tests", function () {
 
    it("Cell is dead by default", function () {
        
        // Act
        var cell = new Cell();
 
        // Assert
        expect(false).toBe(cell.isAlive());
    });

    it("Can make alive a cell", function () {
        
        // Arrange
        var cell = new Cell();

        //Act
        cell.makeAlive();
 
        // Assert
        expect(true).toBe(cell.isAlive());
    });


    it("Can kill a cell", function () {
        // Arrange
        var cell = new Cell();
        cell.makeAlive();

        cell.kill();
 
        // Assert
        expect(false).toBe(cell.isAlive());
    });


    it("Can toggle cell from dead to alive", function () {
    	 // Arrange
        var cell = new Cell();
        expect(false).toBe(cell.isAlive());

        //Act
        cell.toggle();
 
        // Assert
        expect(true).toBe(cell.isAlive());
    });

    it("Can toggle cell from dead to alive", function () {
    	 // Arrange
        var cell = new Cell();
        cell.makeAlive();
        expect(true).toBe(cell.isAlive());

        //Act
        cell.toggle();
 
        // Assert
        expect(false).toBe(cell.isAlive());
    });
});