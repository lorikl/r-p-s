function getComputerChoice () {
    let arr = ["ROCK", "PAPER", "SCISSORS"]
    return arr[Math.floor(Math.random() * 3)]
}
const playerChoice = prompt('Pick a Choice').toUpperCase()
const cpuChoice = getComputerChoice()

function playRound(playerChoice, getComputerChoice) {
    if (playerChoice === getComputerChoice) {
      return 'tie'
    }
    if (
      (playerChoice === 'ROCK' && getComputerChoice === 'SCISSORS') ||
      (playerChoice === 'SCISSORS' && getComputerChoice === 'PAPER') ||
      (playerChoice === 'PAPER' && getComputerChoice === 'ROCK')
    ) {
      return 'player WINS'
    }
    if (
      (getComputerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
      (getComputerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
      (getComputerChoice === 'PAPER' && playerChoice === 'ROCK')
    ) {
      return 'computer WINS'
    }
  }

console.log(cpuChoice)
console.log(playerChoice)
console.log(playRound(playerChoice, cpuChoice))
