
function GameOfLife(rows, columns){
	this._rows = [rows];

	for (var i = 0; i < this.rows; i++) {
		this._cells = new Row(columns);
	}
}

GameOfLife.prototype.adjacentLiveCells = function(rowIndex, columIndex) {
		
}









