
function GameOfLifeController (rows, columns, playGroundDiv) {
	this.gridRows = rows;
	this.gridColumns = columns;
	this.gameOfLife = new GameOfLife(rows, columns);
	this.board = new GameOfLifeBoard(this.gameOfLife);

	var playGround = $('#'+playGroundDiv);
	playGround.text("");

	this.board.appendTo(playGround);
}

GameOfLifeController.prototype.go = function () {
	var newState = [];
	for (var i = 0; i < this.gridRows; i++) {
		newState[i] = [];
		for (var j = 0; j < this.gridColumns; j++) {
			newState[i][j] = this.gameOfLife.evolve(i, j, evolution);
		}	
	}
	this.gameOfLife.apply(newState);
}


function evolution(count, state) {
	if(count < 2 || count > 3) {
		return false;
	} else if(count == 2) {
		return state;
	} else {
		return true;
	}
}
