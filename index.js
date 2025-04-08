const inputItem = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

let contador = 0; // Variável que vai trocar de valor

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão do botão
    console.log(inputItem.value);

    const itemDaLista = document.createElement("li"); 
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("div");
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

});



















