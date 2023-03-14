var playerChoiceButtons = document.querySelectorAll('#player button');
var computerChoiceDisplay = document.querySelector('#computer-choice');
var resultMessageDisplay = document.querySelector('#result-message');

// memilih pilihan komputer secara acak
function getComputerChoice() {
	var choices = ['rock', 'paper', 'scissors'];
	var randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

// membandingkan pilihan pemain dan pilihan komputer
function compareChoices(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) {
		return 'Seri!';
	} else if (playerChoice == 'rock' && computerChoice == 'scissors' || 
			   playerChoice == 'paper' && computerChoice == 'rock' ||
			   playerChoice == 'scissors' && computerChoice == 'paper') {
		return 'Anda menang!';
	} else {
		return 'Anda kalah!';
	}
}

// menampilkan hasil permainan
function displayResult(playerChoice, computerChoice, resultMessage) {
	computerChoiceDisplay.textContent = computerChoice;
	resultMessageDisplay.textContent = resultMessage;
}

// Event listener untuk setiap tombol pilihan pemain
for (var i = 0; i < playerChoiceButtons.length; i++) {
	var button = playerChoiceButtons[i];
	button.addEventListener('click', function() {
		// Pilihan pemain
		var playerChoice = this.id;
		// Pilihan komputer
		var computerChoice = getComputerChoice();
		// Hasil permainan
		var resultMessage = compareChoices(playerChoice, computerChoice);
		// Tampilkan hasil permainan
		displayResult(playerChoice, computerChoice, resultMessage);
	});
}
