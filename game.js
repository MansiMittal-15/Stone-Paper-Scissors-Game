let words = ["stone", "paper", "scissors"];

let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let btn = document.querySelector(".btn");


let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");


// when stone is clicked..
stone.addEventListener("click", ()=>{
    let random = words[Math.floor(Math.random()*3)];

    if(random === "stone")
    {
        btn.innerHTML = "It was a Draw.Play again!";
        btn.style.backgroundColor = "orange";
    }
    else if(random === "scissors")
    {
        btn.innerHTML = "you win! Your Rock beats Scissors."
        btn.style.backgroundColor = "green";

        let val = parseInt(userScore.innerHTML)+1;
        userScore.innerHTML = String(val);
    }
    else if(random === "paper")
    {
        btn.innerHTML = "You lost! Paper beats your Rock."
        btn.style.backgroundColor = "red";

        let val = parseInt(compScore.innerHTML)+1;
        compScore.innerHTML = String(val);
    }
});


// when paper is clicked..
paper.addEventListener("click", ()=>{
    let random = words[Math.floor(Math.random()*3)];

    if(random === "paper")
    {
        btn.innerHTML = "It was a Draw.Play again!";
        btn.style.backgroundColor = "orange";
    }
    else if(random === "stone")
    {
        btn.innerHTML = "You win! Your Paper beats Rock.";
        btn.style.backgroundColor = "green";

        let val = parseInt(userScore.innerHTML)+1;
        userScore.innerHTML = String(val);
    }
    else if(random === "scissors")
    {
        btn.innerHTML = "You lost! Scissors beats your Paper.";
        btn.style.backgroundColor = "red";

        let val = parseInt(compScore.innerHTML)+1;
        compScore.innerHTML = String(val);
    }
});


// when scissors is clicked..
scissors.addEventListener("click", ()=>{
    let random = words[Math.floor(Math.random()*3)];

    if(random === "scissors")
    {
        btn.innerHTML = "It was a Draw.Play again!";
        btn.style.backgroundColor = "orange";
    }
    else if(random === "paper")
    {
        btn.innerHTML = "You win! Your Scissors beats Paper.";
        btn.style.backgroundColor = "green";

        let val = parseInt(userScore.innerHTML)+1;
        userScore.innerHTML = String(val);
    }
    else if(random === "stone")
    {
        btn.innerHTML = "You lost! Rock beats your Scissors.";
        btn.style.backgroundColor = "red";

        let val = parseInt(compScore.innerHTML)+1;
        compScore.innerHTML = String(val);
    }
});


btn.addEventListener("click", ()=>{
    btn.innerHTML = "Play your Move.";
    btn.style.backgroundColor = "rgb(2, 2, 67)"
});


let restart = document.querySelector("#restart");
restart.addEventListener("click", ()=>{
    btn.innerHTML = "Play your move again!";
    btn.style.backgroundColor = "rgb(2, 2, 67)";
    btn.style.color = "white";

    userScore.innerHTML = "0";
    compScore.innerHTML = "0";
})