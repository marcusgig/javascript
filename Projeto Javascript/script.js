const result = document.querySelector(".result");
const myScore = document.querySelector("#pontuacao");
const machineScore = document.querySelector("#pontuacao_maquina");

let humanScoreCount = 0;
let machineScoreCount = 0;

const GAME_OPTIONS = {
    ROCK: "ROCK",
    PAPER: "PAPER",
    SCISSORS: "SCISSORS"
}

const humanplay = (humanChoice) => {
    playJokenpo(humanChoice, machineplay());
}

const machineplay = () => {
    const escolhaMaquina = Math.floor(Math.random() * 3);
    const opcoes = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    return opcoes[escolhaMaquina];
}


const playJokenpo = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "É um empate!";
    }
    else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {

        result.innerHTML = "Você venceu!";
        humanScoreCount++;
        myScore.innerHTML = humanScoreCount;
    }
    else {
        result.innerHTML = "Você perdeu!";
        machineScoreCount++;
        machineScore.innerHTML = machineScoreCount;
    }

    console.log("Humano escolheu: " + human + " Máquina escolheu: " + machine);
}