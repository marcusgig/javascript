const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dolarToday = 5.2;
    const euroToday = 6.2;

    const convertedValue = inputCurrency / dolarToday;

    if (currencySelect.value == "USD") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / dolarToday);

    }
    if (currencySelect.value == "EUR") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / euroToday);

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrency);




}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");

    if (currencySelect.value == "USD") {

        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "EUR") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);