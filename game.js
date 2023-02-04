// This function is only for the computer's turn in the game //


let optionOne = 2;
let optionTwo = 3;
let optionThree = 4; 


function computerPlay(choice) {
    const play = Math.floor(Math.random() * 10) + 1;

    if (choice === 2) {
        return "rock"
    } 
    if ( choice === 3) {
        return "paper"
    } 
    if ( choice === 4) {
        return "scissors"
    } 
}

// This function is for one round of the game //

    let lower = text.toLowerCase();
    let upper = text.toUpperCase();

function firstGame (playerSelection, computerSelection) {
    let playerChoice = "rock";
    let computerChoice = "paper";
    let playerSelection = playerChoice;
    let computerSelection = computerChoice;
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!"   
    }   
}

