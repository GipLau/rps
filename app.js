let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if ( letter === "r") return "Rock";
    if ( letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You won! 🎉`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 1000);
    wincondition();
}

function wincolor() {
    document.getElementById("result").style.color = "#4DCC7D";
}

function lose(user, computer) {
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lost... 💩`
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 1000);;
}

function losecolor() {
    document.getElementById("result").style.color = "#FC121B";
}

function draw(user, computer) {
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a draw ~ ❄️`;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(() => document.getElementById(user).classList.remove('grey-glow'), 1000);
}

function drawcolor() {
    document.getElementById("result").style.color = "#A0A0A0";
}

function wincondition() {
    if (userScore >= 5 && userScore > compScore)
        alert("You Won The Game! 🎉");
    if (compScore >= 5 && compScore > userScore)
        alert("You Lost! Try Again! 💩"); 
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            wincolor();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            losecolor();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            drawcolor();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();
