let playerSelection;
let computerSelection;
let playerScore=0;
let computerScore=0;

const choice=['Rock','Paper','Scissors'];
const selections = document.querySelectorAll ('.selection');
const selectPlayerScore = document.querySelector('#player-score');
const selectComputerScore = document.querySelector('#computer-score');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

const changeImage = function () {
    if (playerSelection == 'Rock') {
        document.querySelector('#player-choice').src = 'img/rock.png';
    } if (playerSelection == 'Paper') {
        document.querySelector('#player-choice').src = 'img/paper.png';
    } if (playerSelection == 'Scissors') {
        document.querySelector('#player-choice').src = 'img/scissors.png';
    } if (computerSelection == 'Rock') {
        document.querySelector('#computer-choice').src = 'img/rock.png';
    } if (computerSelection == 'Paper') {
        document.querySelector('#computer-choice').src = 'img/paper.png';        
    } if (computerSelection == 'Scissors') {
        document.querySelector('#computer-choice').src = 'img/scissors.png';
    }
}

const message = document.querySelector('.message-container');
const messageText = document.createElement('p');
const resetButton = document.createElement('button');
const result = document.querySelector('.result-container');
const resultMessage = document.createElement('p');

resetButton.textContent = 'Reset game'

selections.forEach((selection) => {                             // playRound when player makes selection
    selection.addEventListener('click', playRound)
    })

function computerPlay () {                                      // randomises computer choice
    let random = Math.floor(Math.random()*choice.length);
    return choice[random];
}

function playRound () {                                         // play game first to five
    
    if (playerScore < 5 && computerScore < 5) {                 
        playerSelection = this.id;                  
        computerSelection = computerPlay ();
        changeImage() 

        if (computerSelection == playerSelection) {
            selectPlayerScore.textContent = (`Player score: ${ playerScore }`);
            selectComputerScore.textContent = (`Computer score: ${ computerScore }`)     
            messageText.textContent =`It was a tie - you both chose ${ playerSelection }. How underwhelming.`;
            message.appendChild(messageText);
        }
        
        else if (computerSelection =='Rock' && playerSelection =='Paper' 
            || computerSelection =='Paper' && playerSelection =='Scissors'
            || computerSelection =='Scissors' && playerSelection =='Rock') {
                ++playerScore;
                if (playerScore < 5) {
                    selectPlayerScore.textContent = (`Player score: ${ playerScore }`);
                    selectComputerScore.textContent = (`Computer score: ${ computerScore }`)
                    messageText.textContent = ( `You win! You chose ${ playerSelection } which beats the computer's ${ computerSelection }!`);
                    message.appendChild(messageText); }
                else if (playerScore == 5) {
                    playerWin ()
                    messageText.textContent = ( `You win! You chose ${ playerSelection } which beats the computer's ${ computerSelection }!`);
                    selectPlayerScore.textContent = (`Player score: ${ playerScore }`);
                    selectComputerScore.textContent = (`Computer score: ${ computerScore }`)
                    }
        }
        
        else {
            ++computerScore;
            if (computerScore < 5) {
                selectPlayerScore.textContent = (`Player score: ${ playerScore }`);
                selectComputerScore.textContent = (`Computer score: ${ computerScore }`)
                messageText.textContent = (`You lose. Computer chose ${ computerSelection } which beats your ${ playerSelection }.`);
                message.appendChild(messageText);
            } else if (computerScore == 5) {
            computerWin();
            messageText.textContent = (`You lose. Computer chose ${ computerSelection } which beats your ${ playerSelection }.`);
            selectPlayerScore.textContent = (`Player score: ${ playerScore }`);
            selectComputerScore.textContent = (`Computer score: ${ computerScore }`)
            }
        }
    } 
}   

function computerWin () {
    message.appendChild(messageText);
    resultMessage.textContent = (`You lost :( Click below to go again.`)
    result.appendChild(resultMessage);
    result.appendChild(resetButton);
    selections.forEach((selection) => {
        selection.removeEventListener('click', playRound)
    })
} 
    
function playerWin() {
    message.appendChild(messageText);
    resultMessage.textContent = (`YOU WIN! Click below to defend your crown.`)
    result.appendChild(resultMessage);
    result.appendChild(resetButton);
    selections.forEach((selection) => {
        selection.removeEventListener('click', playRound)
    })
}
        
resetButton.addEventListener ('click', resetGame);

function resetGame () {
    playerScore=0;
    computerScore=0;
    selectPlayerScore.textContent = (`Player score: ${ playerScore }`);
    selectComputerScore.textContent = (`Computer score: ${ computerScore }`)
    messageText.textContent = '';
    resultMessage.textContent = '';
    result.removeChild(resetButton);
    selections.forEach((selection) => {
        selection.addEventListener('click', playRound)
    })
}
