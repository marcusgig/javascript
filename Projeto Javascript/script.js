const result = document.querySelector(".result");
const myScore = document.querySelector("#pontuacao");
const machineScore = document.querySelector("#pontuacao_maquina");

let humanScoreCount = 0;
let machineScoreCount = 0;

const humanplay = (humanChoice) => {
    playJokenpo(humanChoice, machineplay());
}

const machineplay = () => {
    const escolhaMaquina = Math.floor(Math.random() * 3);
    const opcoes = ["ROCK", "PAPER", "SCISSORS"];
    return opcoes[escolhaMaquina];
}


const playJokenpo = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "É um empate!";
    }
    else if (
        (human === "ROCK" && machine === "SCISSORS") ||
        (human === "PAPER" && machine === "ROCK") ||
        (human === "SCISSORS" && machine === "PAPER")) {

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