const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const slection = prompt(`${ROCK}, ${PAPER}, OR ${SCISSORS}`, '').toUpperCase();

    if (
        slection !== ROCK &&
        slection !== PAPER &&
        slection !== SCISSORS
    ) {
        alert(`invalida choice! we chose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }

    return slection;
}

const getComputerChoise = () => {
    const randomValue = Math.random();
    // console.log(randomValue);
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const gettWinner = (cChoice, pChoice) =>
    cChoice === pChoice ?
    RESULT_DRAW :
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK) ?
    RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS
    // if (cChoice === pChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER ||
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Annonymous function');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoise();
    const winner = gettWinner(computerChoice, playerSelection);
    let message = `You picked ${playerSelection}, computer picked ${computerChoice} therefore you`;
    if (winner === RESULT_DRAW) {
        message = message + ' had a draw'
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' won.';
    } else {
        message = message + ' lost.';
    }
    alert(message);
});

const sumup = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumup(1, 2, 22, 222));