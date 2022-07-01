const computerSelection = ["rock", "paper", "scissor"];

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const reset = document.querySelector(".reset");


const visible = document.querySelector(".retry");

const winner = document.querySelector(".showing");

let computerScore = 0;
let playerScore = 0;

const textChange = document.querySelector(".changing");

const scorePlayer= document.querySelector(".playerScore");
const scoreComputer= document.querySelector(".computerScore");


const playerSelection = [rock, paper, scissor];


const headVhead = (playerMove) => {
    const player  = playerMove;
    const computer = computerPlay()

    if(playerScore != 5 && computerScore !=5){
        if(player.innerText == computer ){
            textChange.innerText = "TIE ROUND! ";
        }else if(player.innerText == "✊" && computer == "scissor"){
            playerScore +=1;
            scorePlayer.innerText = playerScore;
            textChange.innerText = "Player takes this round";
        }else if(player.innerText == "✋" && computer == "scissor"){
            computerScore +=1;
            scoreComputer.innerText = computerScore;
            textChange.innerText = "Computer takes this round";

        }else if(player.innerText == "✌" && computer == "paper"){
            playerScore +=1;
            scorePlayer.innerText = playerScore;
            textChange.innerText = "Player takes this round";
        }else if(player.innerText == "✊" && computer == "paper"){
            computerScore +=1;
            scoreComputer.innerText = computerScore;
            textChange.innerText = "Computer takes this round";
        }else if(player.innerText == "✌" && computer == "rock"){
            playerScore +=1;
            scorePlayer.innerText = playerScore;
            textChange.innerText = "Player takes this round";
        }else if(player.innerText == "✋" && computer == "rock"){
            playerScore +=1;
            scorePlayer.innerText = playerScore;
            textChange.innerText = "Player takes this round";
        }else{
            textChange.innerText = "TIE ROUND! ";
        }
    }

    if(playerScore == 5){
        visible.style.display = "block";
        winner.style.display = "block";
        winner.innerText = "You Are the winner 😄 ";



    }else if(computerScore == 5){
        visible.style.display = "block";
        winner.style.display = "block";
        winner.innerText = "The Computer is the winner  😔";

    }



}



const playerPlay = (key) =>{

    key.addEventListener('click', () => {

        headVhead(key);
    })


}


const computerPlay = () => {

    const rand = parseInt(Math.random() *3);
    return computerSelection[rand];

}


playerPlay(rock);
playerPlay(scissor);
playerPlay(paper);


const resetGame = reset.addEventListener('click', () =>  {
    visible.style.display = "none";
    winner.style.display = "none";
    playerScore = 0;
    computerScore = 0;

    scorePlayer.innerText = playerScore;
    scoreComputer.innerText = computerScore;
    textChange.innerText = "Make Your Decision";



});