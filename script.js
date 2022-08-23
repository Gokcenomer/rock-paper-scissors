
const buttonRock = document.querySelector('#rock')
const buttonPaper = document.querySelector('#paper')
const buttonScissors = document.querySelector('#scissors')
let playerScoreTag = document.querySelector('#playerScore')
let computerScoreTag = document.querySelector('#computerScore')
let winner = document.querySelector('#winner')

let getComputerChoice = () => {
    let choice = Math.floor((Math.random()*3));
<<<<<<< HEAD
    console.log(choice)
=======
    
>>>>>>> rps-ui
    if (choice===0) {
        return "rock";
    }
    else if (choice===1) {
        return "paper";
    }
    else{
        return "scissor"
    }

};

let counter = 0
let playerScore = 0
let computerScore = 0

<<<<<<< HEAD
let playRound= () => {
    let playerSection= prompt("Pick Rock Paper Scissor");
=======

let playRound = (e) => {
    playerSection = e.target.id;

>>>>>>> rps-ui
   let computerSection = getComputerChoice();
    if (playerSection===computerSection) {
        console.log("Its Tie!")
    }
    else if (playerSection==="rock" && computerSection==="paper" ) {
        computerScore ++;
    }
    else if (playerSection==="paper" && computerSection==="scissor") {
        computerScore ++;
    }
    else if (playerSection==="scissor" && computerSection==="rock")  {
        computerScore ++;
    }
    else
    {
        playerScore++ 
     }
     counter++

<<<<<<< HEAD
        console.log(playerSection)
        console.log(computerSection);
};

let game = () => {

    for (let index = 0; index < 5; index++) {
        playRound();
=======
    if (counter == 5) {
        playerScore = 0
        computerScore = 0
        counter = 0
>>>>>>> rps-ui
        
    }
   

    if (playerScore > computerScore) {
        winner.textContent = "Player ";
    }
    else{
        winner.textContent = "Computer ";
    }

    
    playerScoreTag.textContent = playerScore;
    computerScoreTag.textContent = computerScore;

    
    
        
};


buttonRock.addEventListener('click', playRound);
buttonPaper.addEventListener('click', playRound);
buttonScissors.addEventListener('click', playRound);
