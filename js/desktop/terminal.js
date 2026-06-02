import {
  fechar_terminal,
  input_text,
  output,
  calculadora,
  sistema_menu,
  gerenciador,
  menu,
  lista_de_tarefas,
  wallpaper,
  terminal_abrir,
  terminal_hero,
  linux,
  direito_terminal,
  menu_terminal
} from "./linux.js";

input_text.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const mensagem = input_text.value.trim();

    output.innerHTML += `
<p>giovani@portfolio:~$ ${mensagem}</p>`;

    executarComando(mensagem);

    input_text.value = "";
  }
});

const comandos = {
  help: helps,
  projetos: projetos,
  clear: clears,
  about: abouts,
  date: () => {
    output.innerHTML += `<pre>${new Date().toLocaleDateString()}</pre>`;
  },

  time: () => {
    const linha = document.createElement("pre");
    output.appendChild(linha);

    setInterval(() => {
      const agora = new Date();
      linha.innerHTML = `Hora atual: ${agora.toLocaleTimeString()}`;
    }, 100);
  },
  stack: stacks,
  exit: exits,
  social: socils,
  cv: cvs,
  skills: skill,
  contact: contacts,
  calculadora: togglecalculadora,
  config: toggleconfig,
  list: toggleTarefas,
  theme: toggletheme,
  arquivos: togglearg,
  carros: carro,
};

function executarComando(mensagem) {
  const parts = mensagem.trim().toLowerCase().split(" ");

  const cmd = parts[0];
  const subcmd = parts[1];

  if (cmd === "projeto") {
    if (subcmd && comandos[subcmd]) {
      comandos[subcmd]();
    } else {
      output.innerHTML += `<pre>Use: projeto carros</pre>`;
    }
    return;
  }

  if (comandos[cmd]) {
    comandos[cmd](parts.slice(1));
  } else {
    output.innerHTML += `<pre>Comando não encontrado: ${cmd}</pre>`;
  }
}

// funcao de help //

function helps() {
  output.innerHTML += `
<pre>
────────────────────────────────────────────────────────────
💻 PORTFÓLIO TERMINAL — CENTRAL DE COMANDOS
────────────────────────────────────────────────────────────

Use um comando para navegar pelas seções do terminal.

EXEMPLOS:
> about
> projetos
> projeto carros
> contact
> skills

────────────────────────────────────────────────────────────
📁 COMANDOS DISPONÍVEIS
────────────────────────────────────────────────────────────

┌─────────────────────┬─────────────────────────────────────────────┐
│ COMANDO             │ DESCRIÇÃO                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ about               │ Exibe informações sobre mim                 │
│ projetos            │ Lista todos os projetos                     │
│ projeto             │ Abre detalhes de um projeto específico      │
│ skills              │ Mostra habilidades e tecnologias            │
│ stack               │ Exibe stack de desenvolvimento              │
│ contact             │ Mostra informações de contato               │
│ social              │ Abre redes sociais                          │
│ cv                  │ Salva currículo em PDF em arquivos          │
│ date                │ Exibe a data atual                          │
│ time                │ Exibe horário em tempo real                 │
│ theme               │ Alterna tema do Sistema Web                 │
│ clear               │ Limpa o terminal                            │
│ exit                │ Fecha o terminal                            │
│ arquivos            │ Abre os arquivos                            │
│ config              │ Abre Configuração de sistemas               │
│ calculadora         │ Abre a Calculadora                          │
│ list                │ Abre lista de tarefas                       │
└─────────────────────┴─────────────────────────────────────────────┘

📌 EXEMPLO DE USO:
> projeto carros

────────────────────────────────────────────────────────────
</pre>

            `;
}

function projetos() {
  output.innerHTML += `
<pre>
┌──────────────────────────────────────────────────────────┐
│                     📁 PROJETOS                          │
└──────────────────────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════╗
║ 01 ▸ CARROS                                              ║
╠══════════════════════════════════════════════════════════╣
║ STATUS      │ FINALIZADO                                 ║
║ TIPO        │ FRONT-END UI                               ║
║ STACK       │ HTML • CSS                                 ║
║                                                          ║
║ DESCRIÇÃO:                                               ║ 
║ Projeto desenvolvido com foco em composição visual,      ║
║ utilização de imagens com position fixed e técnicas      ║
║ de responsividade para diferentes dispositivos.          ║
╚══════════════════════════════════════════════════════════╝


╔══════════════════════════════════════════════════════════╗
║ 02 ▸ CAFETERIA                                           ║
╠══════════════════════════════════════════════════════════╣
║ STATUS      │ FINALIZADO                                 ║
║ TIPO        │ LANDING PAGE                               ║
║ STACK       │ HTML • CSS                                 ║
║                                                          ║
║ DESCRIÇÃO:                                               ║
║ Uma das primeiras landing pages desenvolvidas,           ║
║ focada em estruturação semântica, estilização visual     ║
║ e organização de componentes front-end.                  ║ 
╚══════════════════════════════════════════════════════════╝

────────────────────────────────────────────────────────────
💡 DICA:
Clique aqui:
> projeto carros

para visualizar detalhes completos do projeto.
────────────────────────────────────────────────────────────
</pre> 
    `;
}

function clears() {
  output.innerHTML = `
  digite help
  `;
}

function abouts() {
  output.innerHTML += `
<pre>
──────────────────────────────────
📌 PERFIL
──────────────────────────────────

<img src="assets/img/perfilsobre.jpeg" alt="perfil profissional" width="100" style="border-Radius: 10%"></img>

Nome: Giovani Manzatto Furlan

Descrição:
Apaixonado por tecnologia e desenvolvimento de soluções que geram impacto real.
Gosta de aprender continuamente e transformar ideias em projetos práticos.

Interesses atuais:
• Internet das Coisas (IoT)
• C++
• Desenvolvimento de sistemas

──────────────────────────────────
</pre>
  
  `;
}

function stacks() {
  output.innerHTML += `
<pre>
──────────────────────────────────
🧠 STACK TECNOLÓGICA
──────────────────────────────────

FRONT-END:
├─ HTML
├─ CSS
└─ JavaScript

BACK-END:
├─ Python  → Iniciante
└─ C++     → Em desenvolvimento

VERSIONAMENTO:
├─ Git
└─ GitHub

FOCO ATUAL:
→ Evoluir em desenvolvimento backend e sistemas IoT

──────────────────────────────────
</pre>
  
  `;
}
function exits() {
  const terminal = document.getElementById("terminal-hero");
  terminal.classList.toggle("hideen");
}
function socils() {
  output.innerHTML += `
  Abrindo o github...
  Abrindo o linkdin...
  `;
  setTimeout(() => {
    window.open("https://github.com/giovanimanzattof");
  }, 1000);
}

function cvs() {
  const arq_curriculo = document.getElementById("arq-curriculo");

  


  const curriculo = document.createElement("div");
  curriculo.classList.add("curriculo");

  // cria o link
  const link = document.createElement("a");

  // texto do link
  link.textContent = "Curriculo.pdf";

  // cria ícone
  const icone = document.createElement("img");
  icone.src = "../assets/img/curriculo.png";
  icone.alt = "Ícone currículo";
  icone.classList.add("icone-curriculo");

  curriculo.appendChild(icone);

  // quando clica abre o curriculo
  curriculo.addEventListener("click", () => {
    // cria o iframe para aparecer o curriculo
    const iframe_curriculo = document.createElement("iframe");

    iframe_curriculo.src = "../assets/pdf/curriculo.pdf";
    iframe_curriculo.classList.add("iframe", "janela");
    iframe_curriculo.addEventListener("mouseleave", () => {
      iframe_curriculo.style.display = "none";
    });
    linux.appendChild(iframe_curriculo);
  });

  // adiciona o link dentro da div
  curriculo.appendChild(link);

  
  const existecurriculo = arq_curriculo.querySelector(".curriculo")

  if(existecurriculo){
    output.innerHTML += "O currículo já existe dentro da pasta de arquivos.<br>";
    return
  }
  // adiciona a div no HTML
  arq_curriculo.appendChild(curriculo);
}

function skill() {
  output.innerHTML += `
<pre>
┌──────────────────────────────────────────────────────────┐
│                      🧠 SKILLS                           │
└──────────────────────────────────────────────────────────┘

🎨 FRONT-END
──────────────────────────────────────────────────────────
• HTML        → Estrutura de páginas web
• CSS         → Estilização e responsividade
• JavaScript  → Interatividade e lógica no navegador

⚙️ BACK-END (em evolução)
──────────────────────────────────────────────────────────
• Python      → Lógica e automações (iniciante)
• C++         → Estudo de estruturas e performance (Desenvolvimento)

🔧 FERRAMENTAS
──────────────────────────────────────────────────────────
• Git         → Controle de versão
• GitHub      → Repositórios e colaboração

📌 NÍVEL ATUAL
──────────────────────────────────────────────────────────
Front-end: ██████████ 80%
Back-end : █░░░░░░░░░ 5%

──────────────────────────────────────────────────────────
💡 FOCO ATUAL:
Evoluir para desenvolvimento full-stack e projetos reais.
Construir sistemas em tempo real IoT.
──────────────────────────────────────────────────────────
</pre>
  
  `;
}

function contacts() {
  output.innerHTML += `
<pre>
┌──────────────────────────────────────────────────────────┐
│                     📞 CONTATO                          │
└──────────────────────────────────────────────────────────┘

💬 INFORMAÇÕES DIRETAS

Nome: Giovani Manzatto Furlan
Função: Desenvolvedor Front-End (em formação)

📧 E-MAIL

contato: giovanimanzattof@gmail.com

🌐 REDES SOCIAIS

GitHub   → https://github.com/giovanimanzattof
LinkedIn → linkedin.com/in/seuusuario
Instagram → @devtec_manzatto

💼 DISPONIBILIDADE

✔ Freelance: Disponível
✔ Estágio: Aberto a oportunidades
✔ Projetos: Aceitando colaborações

📍 LOCALIZAÇÃO

Brasil

──────────────────────────────────────────────────────────
💡 COMANDOS ÚTEIS:
> social  → abre redes sociais
> cv      → Salva o arquivo na pasta de arquivos 
              Digite:
                > arquivos
> exit    → fechar terminal
──────────────────────────────────────────────────────────
</pre>  
  
  `;
}

function toggle(element) {
  if (!element) return;

  element.style.display =
    element.style.display === "none" || element.style.display === ""
      ? "block"
      : "none";
}


function togglecalculadora() {
  toggle(calculadora);
}

function toggleconfig() {
  toggle(sistema_menu);
}

function toggleTarefas() {
  toggle(lista_de_tarefas);
}

function toggletheme() {
  toggle(wallpaper);
}
function togglearg() {
  toggle(gerenciador);
}
function fecharterminal() {
  toggle(fechar_terminal);
}



function toggleterminal() {
  terminal_hero.classList.toggle("oculto")
  clears()
}
fechar_terminal.addEventListener("click", toggleterminal);
terminal_abrir.addEventListener("click", toggleterminal);
direito_terminal.addEventListener("click", toggleterminal)
menu_terminal.addEventListener("click", toggleterminal)


function carro(){
  output.innerHTML += `
<pre style="font-family: Arial, sans-serif; line-height: 1.6;">

                        <img src="../assets/img/carros.png" width="260">

<strong style="font-size: 18px;">🚗 Projeto: EsportCars</strong>

────────────────────────────────────────

<strong>🎯 Objetivo</strong>
Desenvolver uma base sólida em desenvolvimento web, com foco em imagens, 
organização de código e construção de interfaces modernas e responsivas.

────────────────────────────────────────

<strong>⚙️ Funcionalidades</strong>
✔ Exibição de diferentes modelos de carros  
✔ Página de detalhes individuais para cada veículo  
✔ Navegação simples e intuitiva  
✔ Estrutura modular para fácil expansão  
✔ Interface visual organizada e responsiva  

────────────────────────────────────────

<strong>💻 Tecnologias utilizadas</strong>
• HTML5  
• CSS3  
• JavaScript  

────────────────────────────────────────

<strong>📖 Descrição do sistema</strong>
O EsportCars é um catálogo digital de veículos que apresenta diferentes categorias, c
omo carros a combustão, elétricos e híbridos.  
O sistema simula uma vitrine automotiva interativa, permitindo explorar modelos e suas características de 
forma simples e visual.

────────────────────────────────────────

<strong>📊 Status</strong>
🟡 Em desenvolvimento (versão 1.0)

────────────────────────────────────────

<strong>📚 Aprendizados</strong>
• Flexbox e Grid para layouts modernos  
• Organização de projetos front-end  
• Manipulação de conteúdo com JavaScript  
• Estruturação semântica de HTML  
• Melhoria de lógica de interface  

────────────────────────────────────────

<strong>🚀 Versões futuras</strong>
• Navegação estilo terminal (CLI interativo)  
• Sistema de filtros (corrida, esportivo, luxo)  
• Interface mais interativa e dinâmica  
• Animações e transições visuais  
• Expansão do catálogo de carros  

────────────────────────────────────────

<strong style="font-size: 14px;">EsportCars — evoluindo cada linha de código 🚀</strong>

</pre>
  `
}