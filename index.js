const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
let youChose = document.getElementById("youchose");
let riduChose = document.getElementById("riduchose");

function getComputerChoice(){
  computerChoice = Math.floor(Math.random() * hand.length) + 1;
  if (computerChoice === 1){
    return hand[0];
  } else if (computerChoice === 2){
    return hand[1];
  } else if (computerChoice === 3){
    return hand[2];
  }
}

function finalWinner(){
  if (humanScore === 5){
    document.getElementById("winner").innerHTML = `🎉Congratulations, You beat Ridwan and won the game🥇`;
    reset();
    return false
  } else if (computerScore === 5){
    document.getElementById("winner").innerHTML = `🎉Ridwan beat You and won the game🥇`;
    reset();
    return false;
  }
  return true;
}

function reset(){
  humanScore = 0;
  computerScore = 0;
  document.getElementById("yourscore").innerHTML = `Your Score: ${humanScore}`;
  document.getElementById("ridurscore").innerHTML = `Ridwan's Score: ${computerScore}`;
  document.getElementById("youchose").innerHTML = "You chose: ";
  document.getElementById("riduchose").innerHTML = "Ridwan chose: ";
}

function playRound(){
  if (humanChoice === computerChoice){
    document.getElementById("winner").innerHTML = "It's a tie!";
  } else if(humanChoice === 2 && computerChoice === 1){
    document.getElementById("winner").innerHTML = `You win! ${hand[1]} beats ${hand[0]}.`;
    humanScore++;
    document.getElementById("yourscore").innerHTML = `Your Score: ${humanScore}.`;
  } else if (humanChoice === 3 && computerChoice === 2){
    document.getElementById("winner").innerHTML = `You win! ${hand[2]} beat ${hand[1]}.`;
    humanScore++;
    document.getElementById("yourscore").innerHTML = `Your Score: ${humanScore}.`;
  } else if (humanChoice === 1 && computerChoice === 3){
    document.getElementById("winner").innerHTML = `You win! ${hand[0]} beats ${hand[2]}.`;
    humanScore++;
    document.getElementById("yourscore").innerHTML = `Your Score: ${humanScore}.`;
  } else if (humanChoice === 1 && computerChoice === 2){
    document.getElementById("winner").innerHTML = `Ridwan wins! ${hand[0]} beats ${hand[1]}. `;
    computerScore++;
    document.getElementById("ridurscore").innerHTML = `Ridwan's Score: ${computerScore}.`;
  } else if (humanChoice === 2 && computerChoice === 3){
    document.getElementById("winner").innerHTML = `Ridwan wins! ${hand[2]} beat ${hand[1]}. `;
    computerScore++;
    document.getElementById("ridurscore").innerHTML = `Ridwan's Score: ${computerScore}.`;
  } else if (humanChoice === 3 && computerChoice === 1){
    document.getElementById("winner").innerHTML = `Ridwan wins! ${hand[0]} beats ${hand[2]}. `;
    computerScore++;
    document.getElementById("ridurscore").innerHTML = `Ridwan's Score: ${computerScore}.`;
  }

  if(finalWinner()){

  }
}

function rock(){
  humanChoice = 1;
  youChose.innerHTML = `You chose: ${hand[0]}.`;
  riduChose.innerHTML = `Ridwan chose: ${getComputerChoice()}.`;
  playRound();
}
function paper(){
  humanChoice = 2;
  youChose.innerHTML = `You chose: ${hand[1]}.`;
  riduChose.innerHTML = `Ridwan chose: ${getComputerChoice()}.`;
  playRound();
}
function scissors(){
  humanChoice = 3;
  youChose.innerHTML = `You chose: ${hand[2]}.`;
  riduChose.innerHTML = `Ridwan chose: ${getComputerChoice()}.`;
  playRound();
}