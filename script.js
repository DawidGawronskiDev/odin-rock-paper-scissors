let btn = document.getElementsByClassName("btn");
let winnerInfo = document.getElementById("winnerInfo");
let scoreInfo = document.getElementById("scoreInfo");

let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

const checkChoice = (element) => {
  switch (element) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
};

const checkWinner = (firstElement, secondElement) => {
  if ((firstElement == 0) & (secondElement == 2)) {
    playerScore++;
    return "Player Wins!";
  }
  if ((firstElement == 1) & (secondElement == 0)) {
    playerScore++;
    return "Player Wins!";
  }
  if ((firstElement == 2) & (secondElement == 1)) {
    playerScore++;
    return "Player Wins!";
  }
  if ((firstElement == 0) & (secondElement == 1)) {
    computerScore++;
    return "Computer Wins!";
  }
  if ((firstElement == 1) & (secondElement == 2)) {
    computerScore++;
    return "Computer Wins!";
  }
  if ((firstElement == 2) & (secondElement == 0)) {
    computerScore++;
    return "Computer Wins!";
  }
  if (firstElement == secondElement) {
    return "Draw!";
  }
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    playerChoice = Number(btn[i].value);
    computerChoice = Math.floor(Math.random() * 3) + 0;

    // Display of picks
    console.log(
      "Your pick: " +
        checkChoice(playerChoice) +
        ". Computer pick: " +
        checkChoice(computerChoice)
    );
    // Display who win
    winnerInfo.textContent = checkWinner(playerChoice, computerChoice);
    console.log(checkWinner(playerChoice, computerChoice));
    // Display score
    scoreInfo.textContent =
      "Your score: " + playerScore + ". Computer score: " + computerScore;
    console.log(
      "Your score: " + playerScore + ". Computer score: " + computerScore
    );
  });
}

console.log("Hello World!");
