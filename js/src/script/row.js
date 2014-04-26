function Row(columns) {
	this._cells = [];

	for (var i = 0; i < columns; i++) {
		this._cells[i] = new Cell();
	}
}

Row.prototype.adjacentLiveCells = function(index) {
	
}

Row.prototype.liveCells = function(index) {
	return this._cells.length;
}

Row.prototype.countAlive = function () {
	
}