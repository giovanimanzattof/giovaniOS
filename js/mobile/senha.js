const bolinhas = document.querySelectorAll(".bolinha")
const botoes = document.querySelectorAll(".btn button");
const tela_inicial = document.getElementById("tela-inicial")

let posicao = 0
let senha = ""

function togleeclick(numero){
    if(posicao < bolinhas.length){
        bolinhas[posicao].classList.add("preenchida")
        
        senha += numero
        posicao++

        console.log(senha)
    }
    if(posicao )

    if(senha.length === 6){

    if(senha === "123456"){

        document.getElementById("senha").style.display = "none"
        tela_inicial.style.display = "block"

    } else {

        console.log("incorrect");

        bolinhas.forEach(bolinha => {
            bolinha.classList.remove("preenchida");
        });

        senha = "";
        posicao = 0;

    }

}
}
botoes.forEach(botao => {

    botao.addEventListener("touchstart", (e) => {

        e.preventDefault();

        const numero = botao.textContent;

        togleeclick(numero);

    });

});