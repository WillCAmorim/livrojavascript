const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e)=>{
  e.preventDefault ()
  const numero = Number (frm.inNumero.value)

  let resposta = ""

  for (let i = 1; i <= 10; i= i + 1) {
    resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
  }

  resp.innerText = resposta 
})

frm.addEventListener("reset", ()=>{
  resp.innerText = ""
})