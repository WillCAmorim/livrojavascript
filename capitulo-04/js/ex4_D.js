const frm = document.querySelector ("form")
const resp1 = document.querySelector ("h2")
const resp2 = document.querySelector ("h3")

frm.addEventListener ("submit", (e) => {
  e.preventDefault()
  const ladoA = Number (frm.inLadoA.value)
  const ladoB = Number (frm.inLadoB.value)
  const ladoC = Number (frm.inLadoC.value)

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
    resp1.innerText = "Lados inválidos para formar um triângulo!"
  } else {
    resp1.innerText = "Lados válidos para formar um triângulo!"
      if (ladoA == ladoB && ladoA == ladoC){
        resp2.innerText = "Tipo: Equilátero"
      } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        resp2.innerText = "Tipo: Isóceles"
      } else {
        resp2.innerText = "Tipo: Escaleno"
      }
  } 
})

frm.addEventListener ("reset", ()=>{
  resp1.innerText = ""
  resp2.innerText = ""
})