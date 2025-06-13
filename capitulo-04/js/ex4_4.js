const frm = document.querySelector("form")
const resp = document.querySelector ("h2")

frm.addEventListener ("submit", (e) => {
  const hora = Number (frm.inHora.value)
    let fuso = hora + 5
      if (fuso > 24) {
        fuso = fuso - 24
      }


resp.innerText = `Hora na França: ${fuso.toFixed(2)} Horas. (m)`

  e.preventDefault()
})