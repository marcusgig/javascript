const convertButton = document.querySelector(".convert-button");

function convertValues(){
    const inputCurrency = document.querySelector(".input-currency").value;
    const dolarToday = 5.2;
    const convertedValue    = inputCurrency / dolarToday;
    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues);