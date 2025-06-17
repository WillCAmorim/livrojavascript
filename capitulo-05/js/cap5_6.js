const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) =>{
  e.preventDefault()

const num = Number (frm.inNumero.value)

let temDivisor = 0      //DECLARA E INICIALIZA CONTADOR

for (let i = 2; i <= num / 2; i++){ //Percorre todos os divisores de "NUM"
  if (num % i == 0){         // verifica se "i" (1,2,3..) é divisor do "NUM"
    temDivisor = 1
    break          //SE É, incrementa contador
    }          
  }  
  if (num > 1 && temDivisor == 0){    //Se possui apenas 2 divisores, é primo
    resp.innerText = `${num} é primo.`
  } else {
    resp.innerText = `${num} não é primo.`
  }
})