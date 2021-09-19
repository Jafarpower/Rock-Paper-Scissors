// array options
let options = ["Rock", "Paper", "Scissors"];

// function computerPlay()
// return random value from array
function computerPlay() {
  let randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
}

// function playRound()
// start a round of rock-paper-scissors between playerSelection and computerSelection
function playRound(playerSelection) {
  // playerSelection assign playerSelection string to lowercase
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = computerPlay();

  if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You lose! Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You win! Paper beats rock!";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You win! Rock beats scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats scissors!";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "You lose! Scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats paper!";
  } else {
    return "You tied! Try again!";
  }
}

// function game()
// loop 5 times
// prompt player for selection
// at end output winner and points
function game() {
  let i = 0;
  let points = 0;
  let roundStatus = 0;

  while (i < 5) {
    i++;
    roundStatus++;
    let playerSelection = prompt("Select: rock, paper or scissors");
    let round = playRound(playerSelection);
    console.log(round);

    // roundWinner assign 4 if true and -1 if false
    let roundWinner = round.search("win");

    if (roundWinner === 4) {
      points++;
    }

    if (points >= 3 && roundStatus >= 5) {
      console.log(`You won with ${points} points`);
    } else if (points <= 2 && roundStatus >= 5) {
      console.log(`You lost with ${points} points`);
    }
  }
}
