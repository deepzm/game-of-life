
function GameOfLifeGridModal(rows, columns){
	this._rows = [rows];

	for (var i = 0; i < this.rows; i++) {
		this._cells = new Row(columns);
	}
}

GameOfLifeGridModal.prototype = {

 	adjacentLiveCells = function(rowIndex, columIndex) {
		
	}
}


function Row(columns) {
	this._cells = [columns];

	for (var i = 0; i < this.columns; i++) {
		this._cells = new Cell();
	}
}

Row.prototype = {

 	adjacentLiveCells = function(index) {
		
	},

	liveCells = function(index) {
		
	},

	countAlive = function () {
		
	}
}



function Cell () {
	this._isAlive = false;
}

Cell.prototype = {
	isAlive = function () {
		return this._isAlive;
	},

	kill = function () {
		this._isAlive = false;
	},

	makeAlive = function() {
		this._isAlive = true;
	},

	toggle = function() {
		if(this.isAlive()) {
			this.kill();
		} else {
			this.makeAlive();
		}
		return this.isAlive();
	}
}



function Event(sender) {
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {
    attach : function (listener) {
        this._listeners.push(listener);
    },
    notify : function (args) {
        var index;

        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    }
};