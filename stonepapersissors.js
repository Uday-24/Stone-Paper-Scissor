let yourScore = 0;
let compScore = 0;
let comp_choices = ["rock", "paper", "scissor"];
let choices = document.querySelectorAll(".choice");
let youWin = false;

let yourScr = document.querySelector("#your-score");
let compScr = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

function checkWinner (you, com){
    if(you == com){
        msg.innerText = "It's Draw";
        msg.style.background = "black";
    }
    else{
        if(you === "rock"){
            //paper - scissor
            youWin = com=="paper" ? false : true;
        }
        else if(you === "paper"){
            //rock - scissor
            youWin = com=="scissor" ? false : true;
        }
        else{
            //paper - rock
            youWin = com=="rock" ? false : true;
        }
        if(youWin){
            yourScore++;
            yourScr.innerText = yourScore;
            msg.innerText = "You win!";
            msg.style.background = "green";
        }
        else{
            compScore++;
            compScr.innerText = compScore;
            msg.innerText = "Comp win!";
            msg.style.background = "red";
        }
    }
}

compChoice = () =>{
    let idx = Math.floor(Math.random() * 3);
    let comp_choice = comp_choices[idx];
    return comp_choice;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let yourChoiceId = choice.getAttribute("id");
        let compChoiceId = compChoice();
        console.log(yourChoiceId, compChoiceId);
        checkWinner(yourChoiceId, compChoiceId);
    });
});