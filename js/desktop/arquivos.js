import { card_sidebar, linux, pasta } from "./linux.js";

// ==========================================
// NAVEGAÇÃO DO GERENCIADOR
// ==========================================

card_sidebar.forEach((item) => {
  item.addEventListener("click", () => {

    card_sidebar.forEach((card) => {
      card.classList.remove("card-bar");
    });

    item.classList.add("card-bar");

    document.querySelectorAll(".arte").forEach((arte) => {
      arte.classList.remove("ativo");
    });

    const target = item.dataset.target;

    if (!target) {
      console.warn("data-target não encontrado:", item);
      return;
    }

    const secao = document.getElementById(target);

    if (!secao) {
      console.warn(`Elemento #${target} não existe`);
      return;
    }

    secao.classList.add("ativo");
  });
});

// ==========================================
// CRIAR NOVA PASTA
// ==========================================

if (pasta) {
  pasta.addEventListener("click", criarNovaPasta);
}

function criarNovaPasta() {

  const quantidade = document.querySelectorAll(".novo").length;

  const novo = document.createElement("div");
  novo.className = "novo";

  novo.style.position = "absolute";
  const espacamentoX = 120;
  const espacamentoY = 100;

  const alturaDesktop = linux.clientHeight;

  const itensPorColuna = Math.floor((alturaDesktop - 20) / espacamentoY);

  const coluna = Math.floor(quantidade / itensPorColuna);
  const linha = quantidade % itensPorColuna;

  novo.style.left = `${20 + coluna * espacamentoX}px`;
  novo.style.top = `${20 + linha * espacamentoY}px`;

  novo.innerHTML = `
    <div style="font-size:50px">📁</div>

    <input
      type="text"
      placeholder="Nova pasta"
      maxlength="20"
      style="
        width:90px;
        text-align:center;
        background:transparent;
        border:none;
        outline:none;
        color:white;
      "
    >
  `;

  linux.appendChild(novo);

  const input = novo.querySelector("input");

  input.focus();

  input.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
      novo.remove();
      return;
    }

    if (e.key !== "Enter") return;

    const nome = input.value.trim() || "Nova pasta";

    novo.innerHTML = `
      <div class="container">
          <div class="paste"></div>
          <div class="papel"></div>
          <div class="paper"></div>
          <div class="pape"></div>
          <div class="pastafe"></div>
      </div>

      <span>${nome}</span>
    `;

    novo.style.color = "white";
    novo.style.display = "flex";
    novo.style.flexDirection = "column";
    novo.style.alignItems = "center";
    novo.style.gap = "5px";
    novo.style.width = "90px";
    novo.style.textAlign = "center";
  });

  novo.addEventListener("dblclick", () => {

    const nomeAtual =
      novo.querySelector("span")?.textContent || "Nova pasta";

    novo.innerHTML = `
      <div style="font-size:50px">📁</div>

      <input
        type="text"
        value="${nomeAtual}"
        maxlength="20"
        style="
          width:90px;
          text-align:center;
          background:transparent;
          border:none;
          outline:none;
          color:white;
        "
      >
    `;

    const novoInput = novo.querySelector("input");

    novoInput.focus();
    novoInput.select();

    novoInput.addEventListener("keydown", (e) => {

      if (e.key === "Enter") {

        const novoNome =
          novoInput.value.trim() || "Nova pasta";

        novo.innerHTML = `
          <div class="container">
              <div class="paste"></div>
              <div class="papel"></div>
              <div class="paper"></div>
              <div class="pape"></div>
              <div class="pastafe"></div>
          </div>

          <span>${novoNome}</span>
        `;
      }

    });

  });

}

// ==========================================
// ARRASTAR PASTAS
// ==========================================

let zIndexAtual = 1;

document.addEventListener("mousedown", (e) => {

    const pasta = e.target.closest(".novo");

    if (!pasta) return;

    const desktop = linux;

    const rectDesktop = desktop.getBoundingClientRect();
    const rectPasta = pasta.getBoundingClientRect();

    const offsetX = e.clientX - rectPasta.left;
    const offsetY = e.clientY - rectPasta.top;

    pasta.style.position = "absolute";
    pasta.style.zIndex = ++zIndexAtual;

    pasta.dataset.oldLeft = pasta.style.left;
    pasta.dataset.oldTop = pasta.style.top;

    function mover(e) {

        let x = e.clientX - rectDesktop.left - offsetX;
        let y = e.clientY - rectDesktop.top - offsetY;

        const maxX = desktop.clientWidth - pasta.offsetWidth;
        const maxY = desktop.clientHeight - pasta.offsetHeight;

        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        pasta.style.left = `${x}px`;
        pasta.style.top = `${y}px`;

    }

    function parar() {

    const pastas = document.querySelectorAll(".novo");

    pastas.forEach((outraPasta) => {

        if (outraPasta === pasta) return;

        const r1 = pasta.getBoundingClientRect();
        const r2 = outraPasta.getBoundingClientRect();

        const colidiu =
            r1.left < r2.right &&
            r1.right > r2.left &&
            r1.top < r2.bottom &&
            r1.bottom > r2.top;

        if (colidiu) {

            const leftTemp = outraPasta.style.left;
            const topTemp = outraPasta.style.top;

            outraPasta.style.left = pasta.dataset.oldLeft;
            outraPasta.style.top = pasta.dataset.oldTop;

            pasta.style.left = leftTemp;
            pasta.style.top = topTemp;
        }
    });

    document.removeEventListener("mousemove", mover);
    document.removeEventListener("mouseup", parar);
}

    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", parar);

});