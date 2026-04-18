const computerPlay = () => {

      const random = Math.random();
      if (random < 0.333) return 'Rock';
      else if (random < 0.666) return 'Paper';
      else return 'Scissors';

}

const playRound = (playerSelection, computerSelection) => {
      const player = playerSelection.trim().toLowerCase();
      const computer = computerSelection.toLowerCase();

      if (player !== 'rock' && player !== 'paper' && player !== 'scissors') {
            return 'Invalid selection. Please enter Rock, Paper, or Scissors.';

      } else if (player === computer) {
            return `It's a Tie! You both chose ${computerSelection}. No points awarded!`;

      } else if (player === 'rock' && computer === 'scissors') {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;

      } else if (player === 'paper' && computer === 'rock') {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;

      } else if (player === 'scissors' && computer === 'paper') {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;

      } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
      }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));




