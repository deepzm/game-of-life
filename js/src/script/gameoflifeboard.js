function GameOfLifeBoard(model){
	this._model = model;
	
	this.gameOfLifeGrid = $('<div />')
	this.gameOfLifeGrid.addClass('gol-grid');
	
	for (var i = model._rows.length - 1; i >= 0; i--) {
		var gridRow = createGridRow(model._rows[i]);
		this.gameOfLifeGrid.append(gridRow);
	};

}

GameOfLifeBoard.prototype.appendTo = function  (element) {
	element.append(this.gameOfLifeGrid);
}


function createGridRow (modelRow) {	
	var gameOfLifeGridRow = $('<div />')
	gameOfLifeGridRow.addClass('gol-row');

	for (var i = modelRow._cells.length - 1; i >= 0; i--) {
		var gridCell = createGridCell(modelRow._cells[i]);
		gameOfLifeGridRow.append(gridCell);
	};

	return gameOfLifeGridRow;
}

function createGridCell (modelCell) {
	var gameOfLifeGridCell = $('<div />')
	gameOfLifeGridCell
		.addClass('gol-cell')
		.addClass('dead')
		.click(function (event) {
			modelCell.toggle();
		});

	modelCell.addListener(function (sourceCell) {
		if(sourceCell.isAlive()) {
			gameOfLifeGridCell.removeClass('dead');
			gameOfLifeGridCell.addClass('alive');
		} else {
			gameOfLifeGridCell.removeClass('alive');
			gameOfLifeGridCell.addClass('dead');
		}
	});

	return gameOfLifeGridCell;
}