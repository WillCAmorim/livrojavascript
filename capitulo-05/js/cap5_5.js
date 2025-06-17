const frm = document.querySelector ("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

let resposta = ""   // STRING COM A RESPOSTA A SER EXIBIDA
let numContas = 0  // Inicializa o contador...
let valTotal = 0   // e acumulador (variaveis globais)

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const descricao = frm.inDescricao.value
  const valor = Number (frm.inValor.value)

  numContas++       // Adiciona valor ao contador e acumulador
  valTotal += valor
  resposta = resposta + descricao + "- R$: " + valor.toFixed(2) + "\n"
  resp1.innerText = `${resposta}---------------`
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

  frm.inDescricao.value = ""  // Limpa campos do form
  frm.inValor.value = ""
  frm.inDescricao.focus()     // Posiciona no campo inDescricao do form
})

