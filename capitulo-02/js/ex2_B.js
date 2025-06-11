const frm = document.querySelector("form")
const resp = document.querySelector("#outresp")

frm.addEventListener("submit", (e) => {
    const preco = Number (frm.inPreco.value)
    const tempo = Number (frm.inTempo.value)

    const valorFinal = Math.ceil(tempo/15) * preco
    
    resp.innerText = `Valor a Pagar R$: ${valorFinal.toFixed(2)}`

    e.preventDefault()
})