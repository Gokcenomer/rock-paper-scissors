

let getComputerChoice = () => {
    let choice = Math.floor((Math.random()*3));
    console.log(choice)
    if (choice===0) {
        return "Rock";
    }
    else if (choice===1) {
        return "Paper";
    }
    else{
        return "Scissor"
    }

};


let playRound= () => {
    let playerSection= prompt("Pick Rock Paper Scissor");
   let computerSection = getComputerChoice();
    if (playerSection===computerSection) {
        console.log("Its Tie!")
    }
    else if (playerSection==="Rock" && computerSection==="Paper" ) {
        console.log("Computer wins!")
    }
    else if (playerSection==="Paper" && computerSection==="Scissor") {
        console.log("Computer wins")
    }
    else if (playerSection==="Scissor" && computerSection==="Rock")  {
        console.log("COmputer wins")
    }
    else
    {
        console.log("Player Wins!!")    }

        console.log(playerSection)
        console.log(computerSection);
};

let game = () => {

    for (let index = 0; index < 5; index++) {
        playRound();
        
    }
    

};