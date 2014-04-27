
function GameOfLife(rows, columns){
	this._rows = [];

	for (var i = 0; i < rows; i++) {
		this._rows[i] = new Row(columns);
	}
}

GameOfLife.prototype.apply = function apply (state) {
	for (var i = this._rows.length - 1; i >= 0; i--) {
		this._rows[i].applyState(state[i]);
	};
}

GameOfLife.prototype.isAlive = function(rowIndex, columIndex) {
	if(rowIndex < 0 || rowIndex >= this._rows.length) {
		return false;
	}

	return this._rows[rowIndex].isAlive(columIndex);
}

GameOfLife.prototype.adjacentLiveCells = function(rowIndex, columIndex) {
	if(rowIndex < 0 || rowIndex >= this._rows.length) {
		return 0;
	} else {
		return this._rows[rowIndex].adjacentLiveCells(columIndex);
	}
}

GameOfLife.prototype.liveCells = function (rowIndex, columIndex) {
	if(rowIndex < 0 || rowIndex >= this._rows.length) {
		return 0;
	} else {
		return this._rows[rowIndex].liveCells(columIndex);
	}
}


GameOfLife.prototype.evolve = function (rowIndex, cellIndex, fnEvolve) {
	var numberOfAdjacentLiveCells = this.liveCells(rowIndex - 1, cellIndex) + this.adjacentLiveCells(rowIndex, cellIndex) + this.liveCells(rowIndex + 1, cellIndex);
	var currentState = this.isAlive(rowIndex, cellIndex);
	return fnEvolve(numberOfAdjacentLiveCells, currentState);
}
