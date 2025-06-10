//Cria refêrencia ao form e ao elemento h2 (onde será exibida a resposta)

const frm = document.querySelector("form") //apenas uma linha
const resp = document.querySelector("h3") //primeiro elemento h2 da página

/*
const cor = document.querySelector("#inCor") //elemento com id=inCor
const lista = document.querySelector(".lista") // elemento da class=lista
*/

//Cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value       //obtém o nome digitado no form
    resp.innerText = `Olá, ${nome}.`      //Exibe a resposta do programa
    e.preventDefault()                  //evita envio do form
})
