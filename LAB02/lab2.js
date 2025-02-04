/*
 * Made by Erick Ovando - ID:200579494
    & Daniela Valenzuela - ID:200571463

    Teacher: Nadine Bakri
 */


var prompt = require(`prompt`)

prompt.start();

console.log("Enter your choice (ROCK, PAPER, OR SCISSORS):");

prompt.get(['answer'], function(err, result){

    var pcChoice;
    var answer=result.answer.toLowerCase();
    var pcNum = Math.random();
        

    if (pcNum < 0.34){
        pcChoice = "paper";
    } else if (pcNum < 0.67 ) {
        pcChoice = "scissors";
    } else {
        pcChoice = "rock";
    }
    
    console.log("pcNum: "+pcNum);
    console.log("pcChoice: " + pcChoice);
    
    
    var winner

    if (answer === pcChoice){
        winner = "Its A Tie"
    }else if(
        (answer=== "rock" && pcChoice==="scissors")||
        (answer=== "scissors" && pcChoice==="paper")||
        (answer=== "paper" && pcChoice==="rock")
    ){
        winner ="User Wins!";
    }
    else{
        winner = "Computer Wins!";
    }
    
    console.log('User selected: '+ answer);
    console.log('Computer Selected: ' + pcChoice);    
    console.log('Winner: ' + winner);
})