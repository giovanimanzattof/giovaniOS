import { lista, titulo_lista, tarefas_paragrafo, input_lista, btn_salvar, lista_de_tarefas, lista_tarefas_btn, fechar_lista } from "./linux.js";



const listas = []

btn_salvar.addEventListener("click", () => {
    const titulo_list = titulo_lista.value.trim()
    const paragrafo = tarefas_paragrafo.value.trim()

    if(titulo_list === ""){
        alert("digite algo no titulo")
        return
    }

    listas.push({
        nome: titulo_list,
        descricao: paragrafo
    })

    lista.innerHTML = listas.map(list => {
        return`
        <div class="list">
            <h1>${list.nome}</h1>
            <p>${list.descricao}</p>
        </div>
        `
    }).join()
    
    titulo_lista.value = ''
    tarefas_paragrafo.value = ''
})

lista_tarefas_btn.addEventListener("click", () => {
    if(lista_de_tarefas.style.display === 'none'){
        lista_de_tarefas.style.display = 'block'
    } else {
        lista_de_tarefas.style.display = 'none'
    }

})

fechar_lista.addEventListener("click", () => {
    if(lista_de_tarefas.style.display === 'block'){
        lista_de_tarefas.style.display = 'none'
    } else {
        lista_de_tarefas.style.display =  'block'
    }

})




    
