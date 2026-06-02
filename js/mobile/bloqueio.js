const hrs = document.getElementById("hrs")
const semana = document.getElementById("semana")
const bloqueio = document.getElementById("bloqueio")
const relogio = document.getElementById("relogio-tela")


function atualizarRelogio() {
    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");

    hrs.textContent = `${hora}:${minuto}`;
    relogio.textContent = `${hora}:${minuto}`
}

function atualizarRelogiodia(){
    const data = new Date();

    let dataFormatada = data.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

dataFormatada =dataFormatada.charAt(0).toUpperCase() +dataFormatada.slice(1);

console.log(dataFormatada);
semana.textContent =`${dataFormatada}`
}

atualizarRelogiodia()
// Executa imediatamente
atualizarRelogio();

setInterval(atualizarRelogio, 1000);


bloqueio.addEventListener("touchmove", () => {
    gsap.to(".hors, .deslize", {
        y: -20,
        opacity: 0,
        duration: 0.2
    })
    
    
    setTimeout(() => {
        bloqueio.style.display = "none"
        document.getElementById("senha").style.display = "block"
    }, 1000);
})