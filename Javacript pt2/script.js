function generateNumber() {
    console.log("clicou");

    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);


    if (min >= max) {
        alert("O valor minimo deve ser menor que o maximo");

    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(`O número sorteado foi: ${result}`);
    }

    

}