let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let text = document.querySelector('.text')
let playerScore = document.querySelector('#playerScore')
let cpuScore = document.querySelector('#cpuScore')
let playerWins = 0;
let computerWins = 0;

function getComputerChoice () {
    let arr = ["ROCK", "PAPER", "SCISSORS"]
    return arr[Math.floor(Math.random() * 3)]
}

const cpuChoice = getComputerChoice()

function playRound(playerChoice, getComputerChoice) {
    if (playerChoice === getComputerChoice) {
      text.innerHTML = playerChoice+" and "+getComputerChoice+ ' equals a TIE'
    }
    if (
      (playerChoice === 'ROCK' && getComputerChoice === 'SCISSORS') ||
      (playerChoice === 'SCISSORS' && getComputerChoice === 'PAPER') ||
      (playerChoice === 'PAPER' && getComputerChoice === 'ROCK')
    ) {
        playerWins++
        playerScore.innerHTML = playerWins
      text.innerHTML = playerChoice+' beats '+getComputerChoice+ '\n player WINS'
    }
    if (
      (getComputerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
      (getComputerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
      (getComputerChoice === 'PAPER' && playerChoice === 'ROCK')
    ) {
        computerWins ++
        cpuScore.innerHTML = computerWins
      text.innerHTML = playerChoice+' losses to '+getComputerChoice+ '\n computer WINS'
    }
}
rock.addEventListener('click', () => handleClick('ROCK'))
paper.addEventListener('click', () => handleClick('PAPER'))
scissors.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerChoice){
    const cpuChoice = getComputerChoice()
    playRound(playerChoice, cpuChoice)
}

text.innerHTML = handleClick()

// function endGame() {
//     if (playerScore == 5){
//         text.innerHTML = "YOU WIN THE GAME!"
//         playerScore = 0
//         cpuScore = 0
//     } else if (cpuScore == 5){
//         text.innerHTML = "YOU LOSE THE GAME, TRY AGAIN"
//         playerScore = 0
//         cpuScore = 0
//     }
// }

