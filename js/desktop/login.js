import { login, icon, linux, menu_bar, text_descricao, inicializacao, inicio, screen } from "./linux.js";
const relogio = document.getElementById("relogio")
// Comando para saber a senha //
function eye(){
    if(login.type === 'password'){
        login.type = 'text'

        icon.classList.remove("ri-eye-close-line")
        icon.classList.add("ri-eye-line")
    } else{
        login.type = 'password'

        icon.classList.remove("ri-eye-line")
        icon.classList.add("ri-eye-close-line")
    }
}

icon.addEventListener('click', eye)


// COmando para entrar colando a senha //
function atualizarRelogio() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    relogio.textContent =
        `${horas}:${minutos}:${segundos}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);


function entrar() {
    
    if (login.value === "1234") {
        relogio.style.transform = 'translateY(-40px)'
        relogio.style.opacity = 0

        setTimeout(() => {
            screen.style.opacity = 0;
            screen.style.visibility = "hidden";

            linux.style.opacity = 1;
        }, 300);

        setTimeout(() => {
            gsap.to(menu_bar, {
                opacity: 1,
                y: -10,
                duration: 1.2,
                ease: "power3.out"
            });
        }, 600);
        
    } else {
        login.type = 'text'
        login.value = "Não Encontrado";
        setTimeout(() => {
            login.value = ''
            login.type = 'password'
        }, 600);
        
    }
}
login.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        entrar()
    }
})

document.getElementById("btn-input").addEventListener("click", entrar);

// tela de inicio aparecer logo //



// como funcina tela de inicio //

const textoSO = `
Este portfólio é um Sistema Operacional Web interativo.
Ele simula um desktop moderno no navegador para demonstrar minhas habilidades de desenvolvimento.
Para entrar, use a senha: 1234, use no código 4321
`;

const textoProjetos = `
Os projetos estão integrados diretamente no Sistema Operacional Web. 
Abra o aplicativo 'Menu' no desktop virtual para explorar e testar cada aplicação em tempo real.
`;
// Função genérica de digitação
function efeitoDigitacao(elemento, texto, velocidade = 50, callback = null) {
    let index = 0;

    function digitar() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, velocidade);
        } else {
            
            setTimeout(() => {
                if(inicializacao){
                    inicializacao.style.opacity = 0
                    inicializacao.style.visibility = 'hidden'
                }
            }, 1100);
            if(typeof callback === "function"){
                callback()
            }
        }
    }

    digitar();
    
}




// Execução em sequência
efeitoDigitacao(text_descricao, textoSO, 30, () => {
    efeitoDigitacao(text_descricao, textoProjetos);
});