const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const FilterVegan = document.querySelector(".filter-vegan");

function newValue(value) {
    const newValue = value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return newValue;
}


function showAll(productsArray) {
    let myLi = "";

    productsArray.forEach(product => {
        myLi = myLi + `
        <li>
            <img src="${product.src}" >
            <h2>${product.name}</h2>
            <p>R$ ${newValue(product.price)}</p>
        </li>
    `
        list.innerHTML = myLi;
    })
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: (product.price * 0.9).toFixed(2)
    }))
    showAll(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
         <li>

            <p>O valor total dos itens é de  R$ ${newValue(totalValue)}</p>
        </li>
   `

}

function filterAllVegan() {
    const veganItems = menuOptions.filter((product) => product.vegan === true)
    showAll(veganItems)
}


buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems)
sumAll.addEventListener("click", sumAllItems)
FilterVegan.addEventListener("click", () => filterAllVegan())