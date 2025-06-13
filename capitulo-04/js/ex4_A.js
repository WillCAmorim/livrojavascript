const frm = document.querySelector ("form")
const resp = document.querySelector ("h2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number (frm.inNumero.value)

  let resultado = numero % 2 != 0
    if (resultado > 0) {
      resp.innerText = `${numero} é Impar.`
    } else {
      resp.innerText = `${numero} é Par.`
    }
})