const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(frm.inNumero.value)

