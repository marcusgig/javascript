const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all");
let myLi = "";

function showAll() {
    menuOptions.forEach(product => {
        myLi = myLi + `
        <li>
            <img src="${product.src}" >
            <h2>${product.name}</h2>
            <p>R$ ${product.price}</p>
        </li>
    `
        list.innerHTML = myLi;
    })
}



buttonShowAll.addEventListener("click", showAll)