//CRIA REFERENCIA AO FORM E AOS ELEMENTOS H2 e H3 (RESPOSTAS)

const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

//FAZ PROGRAMA SER ACIONANDO COMO "OUVINTE" QUANDO BOTÃO SUBMIT É CLICADO

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value           // obtém contéudo dos campos
    const duracao = Number(frm.inDuracao.value) // obtém conteúdo dos campos (declarar que é número)

    const horas = Number(Math.floor(duracao / 60))      // "Math.floor" -> (arredonda resultado para baixo)
    const minutos = Number(duracao % 60)               // "%" -> Resultado do que resta da divisão inteira.

    resp1.innerText = titulo                    // Exibe respostas
    resp2.innerText = `${horas} hora(s) \n ${minutos} minuto(s)`

    e.preventDefault()                          // Evita envio do form
})

