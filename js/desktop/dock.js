import { fechar, minimizar, menu, arquivosimg, gerenciador, sistema_menu } from "./linux.js";
// fechar aba do gerenciador de arquivo //

fechar.addEventListener('click', () => {
    gerenciador.style.display = 'none'
})

//minimizar aba do gerenciador de arquivo //

minimizar.addEventListener('click', () => {
    gerenciador.style.display = 'none'
})

// dock //

function alternar(elemento){
    elemento.style.display =
        elemento.style.display === 'none'
            ? 'block'
            : 'none'
}
menu.addEventListener('click', () => {
    alternar(sistema_menu)
})

// abrir gerenciador de arquivos //
arquivosimg.forEach(item => {
    item.addEventListener('click', () => {
        alternar(gerenciador)
    })
})
