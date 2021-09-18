let options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
}

let playerSelection = "";
function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats rock!";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats rock!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats scissors!";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats scissors!";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "You lose! Scissors beats paper!";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats paper!";
  } else {
    return "You tied! Try again!";
  }
}
