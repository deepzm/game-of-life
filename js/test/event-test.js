"use strict";

describe("event tests", function () {

	var eventObj;
	var sender;
	var listenerOne;
	var listenerTwo;

	beforeEach(function () {
		sender  = jasmine.createSpy('sender');
		eventObj = new Event(sender);

		listenerOne = jasmine.createSpy("l1");
		listenerTwo = jasmine.createSpy("l2");

	});

	it("Can attach listeners", function () {
		
		eventObj.attach(listenerOne);
		eventObj.attach(listenerTwo);

		expect(eventObj._listeners).toEqual([listenerOne, listenerTwo]);
	});

	it("Will notify listeners", function () {
		
		eventObj.attach(listenerOne);
		eventObj.attach(listenerTwo);
		var arguements = 9;

		eventObj.notify(arguements)

		expect(listenerOne).toHaveBeenCalledWith(sender, arguements);
		expect(listenerTwo).toHaveBeenCalledWith(sender, arguements);
	});

});