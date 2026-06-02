import { janelas, linux, direito } from "./linux.js";
// trazer janelas para frente e movelas //


let maiorZ = 1;

janelas.forEach((janela) => {
    const barra = janela.querySelector(".barra");

    let movendo = false;
    let offsetX = 0;
    let offsetY = 0;

    barra.addEventListener("mousedown", (e) => {
        movendo = true;

        // traz para frente
        maiorZ++;
        janela.style.zIndex = maiorZ;

        offsetX = e.clientX - janela.offsetLeft;
        offsetY = e.clientY - janela.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (movendo) {
            janela.style.left = (e.clientX - offsetX) + "px";
            janela.style.top = (e.clientY - offsetY) + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        movendo = false;
    });
});

// aperta botao do mouse direito abre janela //



linux.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // bloqueia menu do navegador

    direito.style.display = "flex";
    direito.style.left = e.clientX + "px";
    direito.style.top = e.clientY + "px";
});

linux.addEventListener('click', () => {
    direito.style.display = 'none'
})
