const frm = document.querySelector ("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e)=>{
  e.preventDefault()

  const num = Number(frm.inNumber.value)
  let estrelas = ""
  for (let i=1; i <= num; i++){
    if (i % 2 == 1){
      estrelas = estrelas + "*" //POSIÇÃO DO IMPAR
    } else {
      estrelas = estrelas + "-" //POSIÇÃO DO PAR
    }
  }
  resp.innerText = estrelas
})
