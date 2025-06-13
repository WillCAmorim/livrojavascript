const frm = document.querySelector ("form")
const resp1 = document.querySelector ("#n100")
const resp2 = document.querySelector ("#n50")
const resp3 = document.querySelector ("#n10")

frm.addEventListener ("submit", (e) => {
  e.preventDefault()

const saque = Number (frm.inSaque.value)
  if (saque % 10 != 0) {
    alert ("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
    frm.inSaque.focus()
      return
  }
    const notasCem = Math.floor(saque/100)
      let resto = saque % 100

        const notasCinquenta = Math.floor(resto / 50)
          resto = resto % 50
          
            const notasDez = Math.floor (resto/10)

  if (notasCem > 0){
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
  }

  if (notasCinquenta > 0){
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }
  if (notasDez > 0){
    resp3.innerText = `Notas de R$ 10: ${notasDez}`
  }

})

frm.addEventListener("reset", () =>{
  resp1.innerText = ""
  resp2.innerText = ""
  resp3.innerText = ""
})