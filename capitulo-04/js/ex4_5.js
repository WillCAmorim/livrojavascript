const frm = document.querySelector ("form")
const resp = document.querySelector ("h2")

frm.addEventListener ("submit", (e) =>{

  const numero = Number (frm.inNumero.value)
  e.preventDefault()
  
  const raiz = Math.sqrt (numero)
    if (Number.isInteger(raiz)){
      resp.innerText = `Raiz: ${raiz}`
    } else {
      resp.innerText = `Não tem raiz exata para: ${raiz}`
    }


})