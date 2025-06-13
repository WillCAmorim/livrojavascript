const frm = document.querySelector ("form")
const resp1 = document.querySelector ("#resp1")
const resp2 = document.querySelector ("#resp2")
const resp3 = document.querySelector ("#resp3")

frm.addEventListener ("submit", (e) => {
  e.preventDefault()

  const valor = Number(frm.inValor.value)
  
  if (valor < 1.00){
    resp3.innerText = "Valor insuficiente"
  }

  const trintaMin = (valor >= 1)
    let trocoTrinta = (valor % 1)

      const sessentaMin = (valor >=1.75)
        let trocoSessenta = (valor % 1.75)

          const centovinteMin = (valor >= 3)
            let trocoCentovinte = (valor - 3)

  if (trintaMin) {
    resp1.innerText = "Tempo: 30 min"
    resp2.innerText = `Troco R$: ${trocoTrinta.toFixed(2)}`
  }
  if (sessentaMin) {
    resp1.innerText = "Tempo: 60 min"
    resp2.innerText = `Troco R$: ${trocoSessenta.toFixed(2)}`
  }
  if (centovinteMin) {
    resp1.innerText = "Tempo: 120 min"
    resp2.innerText = `Troco R$: ${trocoCentovinte.toFixed(2)}`
  }
})

frm.addEventListener("reset", () =>{
  resp1.innerText = ""
  resp2.innerText = ""
  resp3.innerText = ""
})