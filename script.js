let userscore = 0;
let compscore = 0;

const gencompchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomnum = Math.floor(Math.random() * 3);
    return options[randomnum];

}

let draw = () => {
    msg.innerHTML = "It is a draw";
    msg.style.backgroundColor = 'black';
}
let us=document.querySelector('#user-score')
let cs=document.querySelector('#comp-score')
let msg = document.querySelector('#msg');
const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        us.innerHTML=userscore;
        msg.innerHTML = `you win!! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = 'green';

    }
    else {
        compscore++;
        cs.innerHTML=compscore;
        msg.innerHTML = `computer wins!! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = 'red';

    }
}
const playGame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice == compchoice) {
        draw();
        return;
    }
    let userwin = true;
    if (userchoice === 'rock') {
        //paper,scissors
        userwin = compchoice === 'scissors' ? true : false;
    }
    else if (userchoice === 'paper') {
        //rock,scissors
        userwin = compchoice === 'rock' ? true : false;
    }
    else {
        userwin = compchoice === 'paper' ? true : false;
    }
    showWinner(userwin,userchoice,compchoice);
}
let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id');
        playGame(userchoice);
    });
});