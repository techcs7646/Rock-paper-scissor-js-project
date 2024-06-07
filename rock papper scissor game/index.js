let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const option =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawGame =() =>{
    console.log("game is draw");
    msg.innerText = "game was Draw";
}

const shoowWin =(userWin)=>{
    if(userWin){
        console.log("you win !")
        msg.innerText="You Win";
        userScore++;
        userScorePara.innerText=userScore;

    }
    else{
        console.log("you loss");
        msg.innerText="You Loss";
        compScore++;
        compScorePara.innerText=compScore;
    }
    
}


const playGame = (userChoice)=>{
  console.log("user choice =",userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice =",compChoice);

  if(userChoice===compChoice ){
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoice==="rock"){
        userWin = compChoice==="paper" ? false:true;
    }
    else if(userChoice==="paper"){
       userWin =compChoice==="scissor" ? false:true;
    }
    else{
        userWin=compChoice===rock ? false:true;
    }
    shoowWin(userWin);
  }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("clicked id is",userChoice);
        playGame(userChoice);
    })
});