import { fechar_menu, sistema_menu, gerenciador, menu } from "./linux.js";
// fechar configurao do sistema //
fechar_menu.addEventListener('click', () => {
    if(sistema_menu.style.display === 'block'){
        sistema_menu.style.display = 'none' 
        menu.classList.remove("add")

    } else{
        gerenciador.style.display = 'none'
        
    }
})