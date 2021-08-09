let choice=['Rock','Paper','Scissors'];
let playerSeletion;
let computerSelection;
let playerScore=0;
let computerScore=0;

function computerPlay () {
    let random = Math.floor(Math.random()*choice.length);
    return choice[random]; }

function playRound (playerSelection, computerSelection) {    
    playerSelection = prompt('Choose rock, paper or scissors!', '');
    playerSelection = (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)).toString();
    
    computerSelection = computerPlay ();

    if (computerSelection === playerSelection) {
        alert('It was a tie! Go again')}
    else if (computerSelection =='Rock' && playerSelection =='Paper' 
        || computerSelection =='Paper' && playerSelection =='Scissors'
        || computerSelection =='Scissors' && playerSelection =='Rock')
        { playerScore += 1;
            alert( `You Win! ${ playerSelection } beats ${ computerSelection }`);
            }
    else {computerScore +=1;
        alert(`You Lose! ${ computerSelection } beats ${ playerSelection }`);
        
    };
}

function game () {
    while (computerScore != 5 && playerScore != 5) {
        playRound();
    }
    if (computerScore ==5)
    {return `Player score is ${ playerScore } and computer score is ${ computerScore }. Computer wins :(`}
    else if (playerScore == 5)
    {return `Player score is ${ playerScore } and computer score is ${ computerScore }. Player wins!`}

}