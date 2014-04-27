function Cell () {
	this._isAlive = false;
	this.changeStateEvent = new Event(this);
}


Cell.prototype.isAlive = function () {
	return this._isAlive;
}

Cell.prototype.kill = function () {
	this._isAlive = false;
	this.changeStateEvent.notify();
}

Cell.prototype.makeAlive = function() {
	this._isAlive = true;
	this.changeStateEvent.notify();
}

Cell.prototype.toggle = function() {
	if(this.isAlive()) {
		this.kill();
	} else {
		this.makeAlive();
	}
	this.changeStateEvent.notify();
	return this.isAlive();
}

Cell.prototype.addListener = function (listener) {
	this.changeStateEvent.attach(listener);
};