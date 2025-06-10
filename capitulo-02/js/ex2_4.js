const frm = document.querySelector ("form")
const resp = document.querySelector ("#outresp1")

frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo*consumo) / 1000 //outra forma seria ((quilo / 1000) * consumo)

    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`

    e.defaultPrevented()
})