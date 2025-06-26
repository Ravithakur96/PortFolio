// let divs = document.querySelectorAll(".box");

// let idx= 1;
// for(div of divs) {
//   div.innerText = `new unique value ${idx}`;
//   idx++;
// }

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let div= document.querySelector("div");
// console.log(div.innerText);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// let div =document.querySelector("div");
// div.style.backgroundColor="red";
// div.style.fontSize="26px";
// div.innerText="Hello!";

// let newBtn =document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new</i>"

// document.querySelector("body").prepend(newHeading);

// document.querySelector("h1").remove(newHeading);

// let newBtn = document.createElement("button");
// newBtn.innerText ="click me!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor ="red";

// document.querySelector("body").prepend(newBtn);

// // let para = document.querySelector("p");
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.cliickX,evt.clicky);

// }
// // 
//     btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked - handler 1");
// });

// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked - handler 2");
// });

// const handler3 = () => {
//     console.log("button1 was clicked - handler 3");
// };

// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked - handler 4");
// });

// btn1.removeEventListener("click",handler3);

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light"


// modeBtn.addEventListener("click", ()=>{
//  if(currMode=="light"){
//     currMode = "dark";
//    body.classList.add("dark");
//    body.classList.remove("light"); 
// }
//  else{
//     currMode = "light";
//     body.classList.add("light");
//  }

//  console.log(currMode);

// });

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice= () => {
   const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
   };

   const drawGame = () => {
      console.log("game was draw...");
      msg.innerText = "Game was over. Play again"; 
      msg.style.backgroundColor ="#081b31";
   }

   const showWinnner = (userWin,userChoice,compChoice) => {
      if(userWin){
         userScore++;
         userScorePara.innerText = userScore;
   
       msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor ="green";
      }else {
         compScore++;
         compScorePara.innerText = compScore;

         msg.innerText = `You lose!${compChoice} beats  Your ${userChoice}`;
         msg.style.backgroundColor ="red";
      }
   }

const playGame = (userChoice) => {
console.log("user choice =" , userChoice);

const compChoice = genComputerChoice();
console.log("comp choice = ",compChoice);

if(userChoice === compChoice){
   //Draw Game
   drawGame();
} else{
let userWin = true;
if(userChoice ==="rock"){
   //scissors ,paper
   userWin = compChoice === "paper" ? false : true;
      } else if(userChoice === "paper"){
         //rock,scissors
        userWin =  compChoice =="scissors" ? false : true;
      }

      else{
         //paper,scissors
         userWin = compChoice === "rock" ? false : true;
      }
      showWinnner(userWin, userChoice , compChoice);
   }
};



choices.forEach((choice) => {
   choice.addEventListener("click", () =>{
      const userChoice = choice.getAttribute("id");
   playGame(userChoice);
   });
   });