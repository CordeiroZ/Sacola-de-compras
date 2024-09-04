const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");

botaoSalvarItem.addEventListener("click", adicionaritem);

function adicionaritem(evento) {
    evento.preventDefault()          // PREVINE O EVENTO PADRAO DE ENVIO DE FORMULARIO QUE É ATUALIZAR A PAGINA
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");  

    itemDaLista.appendChild(containerItemLista);

}