const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const varejo = preco * 0.50
    const promocao = (preco * 2) + varejo

    resp1.innerHTML = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
    resp2.innerHTML = `O 3º produto custará apenas R$: ${varejo.toFixed(2)}`

    e.preventDefault()
})