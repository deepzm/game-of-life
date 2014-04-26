function Row(columns) {
	this._cells = [];

	for (var i = 0; i < columns; i++) {
		this._cells[i] = new Cell();
	}
}

Row.prototype.applyState = function (state) { 
	for (var i = state.length - 1; i >= 0; i--) {
		if(state[i]) {
			this._cells[i].makeAlive();
		} else {
			this._cells[i].kill();
		}
	};
}


Row.prototype.isAlive = function(index) {
	if(index < 0 || index >= this._cells.length) {
		return 0;	
	} else if(this._cells[index].isAlive()) {
		return 1;
	} else {
		return 0;
	}
}


Row.prototype.adjacentLiveCells = function(index) {
	return this.isAlive(index-1) + this.isAlive(index + 1);
}

Row.prototype.liveCells = function(index) {
	return this.adjacentLiveCells(index) + this.isAlive(index);
}

