// function computerPlay()
// ouputs random word from array strings
function computerPlay() {
  let strings = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * strings.length);
  return strings[randomNum];
}
