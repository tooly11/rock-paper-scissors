//computerPlay() funciton will randomly return either 'rock', 'paper', or 'scissors'
function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * choice.length);
  return choice[compChoice]
}

let winPoint = 2;
let losePoint = 0;
let tiePoint = 1;
let playerScore = 0;
let computerScore = 0;
let totalPlayerScore = 0;
let totalComputerScore = 0;
let x = 0;

const container = document.querySelector("#buttons-container");

const array = Array.from(container.querySelecterAll("button"));

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  window.location.reload(true);
});

function game() {
  function RockBtn() {
    let computerSelection = computerPlay();
  }
}