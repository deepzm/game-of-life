"use strict";

describe("event tests", function () {

	var eventObj;
	var sender;

	beforeEach(function () {
		sender  = jasmine.createSpy('sender');
		eventObj = new Event(sender);
	});

	it("Can attach listeners", function () {
		var listenerOne = jasmine.createSpy("l1");
		var listenerTwo = jasmine.createSpy("l2");

		eventObj.attach(listenerOne);
		eventObj.attach(listenerTwo);

		expect(eventObj._listeners).toEqual([listenerOne, listenerTwo]);
	});

	it("Will notify listeners", function () {
		var listenerOne = jasmine.createSpy("l1");
		var listenerTwo = jasmine.createSpy("l2");
		eventObj.attach(listenerOne);
		eventObj.attach(listenerTwo);
		var arguements = 9;

		eventObj.notify(arguements)

		expect(listenerOne).toHaveBeenCalledWith(sender, arguements);
		expect(listenerTwo).toHaveBeenCalledWith(sender, arguements);
	});

});