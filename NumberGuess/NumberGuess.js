/**
 * @todo: Restart the game
 * @todo : Validate user input
 */


var x;

var Game = (function() {
	"use strict";

	var Spokesman = (function() {
		var messages = {
			welcome: 'Hey, you found me. Kudos. Now try to guess the number I have in my mind. It\'s an integer somewhere between 0 and 100',
			instructions: 'You should enter your guess by reassigning the x variable',
			bigger: 'Please enter a bigger number',
			smaller: 'Please enter a smaller number',
			found: 'Damn, you are good!! You found it only with ' + tries + ' tries.',
			invalid: 'This is supposed to be a NUMBER guessing game.',
			outOfBounds: 'IQ radikiou... X is a number between 0 and 100.'
		};

		return {
			say: function(message) {
				console.log(messages[message]);
			}
		};
	}());

	var Checker = (function() {
		return {
			validity: function() {
				if (typeof x === "number") {
					if (x <= 100 && x >= 0) {
						this.test();
					} else {
						Spokesman.say('outOfBounds');
					}
				} else {
					Spokesman.say('invalid');
				}
			},
			test: function() {
				if (number > x) {
					Spokesman.say('bigger');
				} else if (number < x) {
					Spokesman.say('smaller');
				} else if (number === x) {
					Spokesman.say('found');
				}
			}
		};
	}());

	Spokesman.say('welcome');
	Spokesman.say('instructions');

	var number = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var savedx, tries = 0;

	setInterval(function() {
		if (x !== savedx) {
			tries++;
			savedx = x;
			Checker.validity();
		}
	}, 50);

}());