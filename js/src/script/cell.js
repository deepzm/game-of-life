function Cell () {
	this._isAlive = false;
}


Cell.prototype.isAlive = function () {
	return this._isAlive;
}

Cell.prototype.kill = function () {
	this._isAlive = false;
}

Cell.prototype.makeAlive = function() {
	this._isAlive = true;
}

Cell.prototype.toggle = function() {
	if(this.isAlive()) {
		this.kill();
	} else {
		this.makeAlive();
	}
	return this.isAlive();
}