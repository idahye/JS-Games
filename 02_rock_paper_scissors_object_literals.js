// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var myGame = {
	// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
	// Names inside the object may be either strings or identifiers that are followed by a colon.
	// object literals can contain properties and methods:

	playerChoiceDisplay: document.getElementById("player_choice"),
	computerChoiceDisplay: document.getElementById("computer_choice"),
	resultDisplay: document.getElementById("result"),
	computerChoice: '',
	userChoice: '',

	// a method 
	functionkey: function () {
		'use strict';
	},

	computerInput: function () {

		switch (Math.floor(Math.random() * 3)) {
			case 0:
				this.computerChoice = "Rock";
				break;
			case 1:
				this.computerChoice = "Paper";
				break;
			case 2:
				this.computerChoice = "Scissors";
		}

	},

	compare: function () {
		// game is a draw
		if (this.userChoice === this.computerChoice) {
			this.resultDisplay.innerHTML = 'Game is a draw!';
			// all other possibilities
		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock') {
			this.resultDisplay.innerHTML = 'You win!';
		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissors') {
			this.resultDisplay.innerHTML = 'You loose!';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Rock') {
			this.resultDisplay.innerHTML = 'You loose!';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Paper') {
			this.resultDisplay.innerHTML = 'You win!';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper') {
			this.resultDisplay.innerHTML = 'You loose!';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') {
			this.resultDisplay.innerHTML = 'You win!';
		}
	},
	display : function (){
		// to make user and computer choice visible
		this.playerChoiceDisplay.innerHTML = this.userChoice;
		this.computerChoiceDisplay.innerHTML = this.computerChoice;
	}

	///// object end /////
};

// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}

// main logic
function play() {
	//myGame.functionkey();
	myGame.userChoice = this.id; // registering the buttons id!
	myGame.computerInput();
	myGame.compare();
	myGame.display();
}